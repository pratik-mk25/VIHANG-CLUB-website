import React, { useState, useEffect, useRef } from 'react';
import './UavSim.css';

// Advanced Quadcopter Drone Dimensions
const DRONE_W = 45;
const DRONE_H = 15;

export default function UavSim({ onClose }) {
  const [gameState, setGameState] = useState('START'); // START, PLAYING, GAME_OVER
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [battery, setBattery] = useState(100);

  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  const playerY = useRef(150);
  const playerVel = useRef(0);
  const obstacles = useRef([]); // { x, gapCenterY, gapSize, scored }
  const particles = useRef([]);
  const ticks = useRef(0);
  
  const currentPhase = score >= 15000 ? 3 : score >= 5000 ? 2 : 1;
  const prevPhaseRef = useRef(1);
  const levelUpTickRef = useRef(-1000);

  useEffect(() => {
    if (currentPhase > prevPhaseRef.current) {
      levelUpTickRef.current = ticks.current;
      prevPhaseRef.current = currentPhase;
    } else if (gameState === 'START') {
      prevPhaseRef.current = 1;
    }
  }, [currentPhase, gameState]);

  const getDynamicConfig = (phase) => {
    if (phase === 3) {
      return { gravity: 0.35, jump: -5.8, speed: 8, spawnDist: 250, gapSize: 110 }; // Phase 3: COMBAT
    } else if (phase === 2) {
      return { gravity: 0.22, jump: -4.8, speed: 5, spawnDist: 350, gapSize: 160 }; // Phase 2: ELEVATED
    } else {
      return { gravity: 0.15, jump: -4.0, speed: 3, spawnDist: 500, gapSize: 220 }; // Phase 1: TRAINING
    }
  };

  const spawnObstacle = (config) => {
    const minY = 50 + config.gapSize / 2;
    const maxY = 350 - config.gapSize / 2;
    const gapCenterY = minY + Math.random() * (maxY - minY);
    
    obstacles.current.push({
      x: 800,
      gapCenterY: gapCenterY,
      gapSize: config.gapSize,
      scored: false
    });
  };

  const jump = () => {
    if (gameState === 'START' || gameState === 'GAME_OVER') {
      playerY.current = 150;
      playerVel.current = -4.0;
      obstacles.current = [];
      particles.current = [];
      ticks.current = 0;
      levelUpTickRef.current = -1000; // Reset flash timer
      prevPhaseRef.current = 1; // Reset phase tracker
      setScore(0);
      setBattery(100);
      setGameState('PLAYING');
    } else if (gameState === 'PLAYING') {
      const config = getDynamicConfig(currentPhase);
      playerVel.current = config.jump;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, currentPhase]);

  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    const config = getDynamicConfig(currentPhase);

    // Black Background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);

    // Subtle White Tech Grid (Parallax)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    const gridOffset = (ticks.current * 1) % 40; 
    for(let i = -gridOffset; i < w; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0); ctx.lineTo(i, h);
      ctx.stroke();
    }
    for(let j = 0; j < h; j += 40) {
      ctx.beginPath();
      ctx.moveTo(0, j); ctx.lineTo(w, j);
      ctx.stroke();
    }

    if (gameState === 'PLAYING') {
      ticks.current++;
      
      // Increase score rapidly (based on distance/speed)
      setScore(s => s + Math.floor(config.speed));

      // Decrease battery slowly
      if (ticks.current % 10 === 0) {
        setBattery(b => {
          const newBat = b - 0.1;
          if (newBat <= 0) {
            setGameState('GAME_OVER'); // Battery died!
            return 0;
          }
          return newBat;
        });
      }

      // Physics
      playerVel.current += config.gravity;
      playerY.current += playerVel.current;

      // Floor/Ceiling constraints
      if (playerY.current > h - DRONE_H) {
        setGameState('GAME_OVER'); // Crashed into ground
      }
      if (playerY.current < 0) {
        playerY.current = 0;
        playerVel.current = 0;
      }

      // Spawning
      if (obstacles.current.length === 0 || obstacles.current[obstacles.current.length - 1].x < w - config.spawnDist) {
        spawnObstacle(config);
      }

      // Move & Draw Hyperspeed Particles (White)
      if (ticks.current % 5 === 0) {
        particles.current.push({ 
          x: w, 
          y: Math.random() * h, 
          speed: Math.random() * 3 + config.speed,
          length: Math.random() * 20 + 5
        });
      }
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      for (let i = particles.current.length - 1; i >= 0; i--) {
        let p = particles.current[i];
        p.x -= p.speed;
        ctx.fillRect(p.x, p.y, p.length, 1.5);
        if (p.x + p.length < 0) particles.current.splice(i, 1);
      }

      // Move & Draw Obstacles (Black and White)
      for (let i = obstacles.current.length - 1; i >= 0; i--) {
        let obs = obstacles.current[i];
        obs.x -= config.speed;
        
        const obsW = 60;
        const topHeight = obs.gapCenterY - obs.gapSize/2;
        const bottomTop = obs.gapCenterY + obs.gapSize/2;

        ctx.fillStyle = '#0a0a0a'; 
        ctx.strokeStyle = '#ffffff'; 
        ctx.lineWidth = 2;

        // Top Pillar Body
        ctx.beginPath();
        ctx.rect(obs.x, 0, obsW, topHeight);
        ctx.fill(); ctx.stroke();
        
        // Bottom Pillar Body
        ctx.beginPath();
        ctx.rect(obs.x, bottomTop, obsW, h - bottomTop);
        ctx.fill(); ctx.stroke();

        // White Caps on the pillars
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(obs.x - 5, topHeight - 15, obsW + 10, 15); // Top Cap
        ctx.fillRect(obs.x - 5, bottomTop, obsW + 10, 15); // Bottom Cap

        // Inner Mechanical Details (White)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        for(let py = 20; py < topHeight - 20; py += 30) {
          ctx.strokeRect(obs.x + 10, py, obsW - 20, 10);
        }
        for(let py = bottomTop + 30; py < h - 20; py += 30) {
          ctx.strokeRect(obs.x + 10, py, obsW - 20, 10);
        }

        // Collision Check
        const playerX = 100;
        const hitX = playerX + 5;
        const hitRight = playerX + DRONE_W - 5;
        const hitY = playerY.current + 2;
        const hitBottom = playerY.current + DRONE_H - 2;
        
        const obsRight = obs.x + obsW;

        if (hitX < obsRight && hitRight > obs.x) {
          if (hitY < topHeight || hitBottom > bottomTop) {
            setGameState('GAME_OVER');
          }
        }

        if (obs.x < -100) {
          obstacles.current.splice(i, 1);
        }
      }
    }

    // Draw Player Drone (Quadcopter Style - Black and White)
    ctx.save();
    const playerX = 100;
    const yPos = playerY.current;
    
    ctx.translate(playerX + DRONE_W/2, yPos + DRONE_H/2);
    ctx.scale(0.5, 0.5); // Shrink the visual size by 50%
    
    // Pitch forward when speeding up/jumping, pitch back when falling
    const pitch = Math.max(-0.3, Math.min(0.3, playerVel.current * 0.05));
    ctx.rotate(pitch);
    
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#0a0a0a';
    ctx.lineWidth = 2;

    // Central Body
    ctx.beginPath();
    ctx.roundRect(-20, -5, 40, 10, 5); 
    ctx.fill(); ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(-20, 0); ctx.lineTo(-35, -5); // Back arm
    ctx.moveTo(20, 0); ctx.lineTo(35, -5);   // Front arm
    ctx.stroke();

    // Motors
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-40, -10, 10, 5); // Back motor
    ctx.fillRect(30, -10, 10, 5);  // Front motor

    // Propellers (Animated Blur)
    const rotorSpin = ticks.current * 0.8; 
    const rotorWidth = 25 + Math.sin(rotorSpin) * 10; 
    
    let propAlpha = 0.6;
    if (gameState === 'PLAYING') {
       const jumpPower = Math.max(0, -playerVel.current);
       propAlpha = Math.min(1, 0.6 + jumpPower * 0.1);
    }
    
    ctx.fillStyle = `rgba(255, 255, 255, ${propAlpha})`;
    ctx.fillRect(-35 - rotorWidth/2, -13, rotorWidth, 2); // Back propeller
    ctx.fillRect(35 - rotorWidth/2, -13, rotorWidth, 2);  // Front propeller

    // Landing skids / Payload
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-10, 5); ctx.lineTo(-15, 15); ctx.lineTo(15, 15); ctx.lineTo(10, 5); // Skids
    ctx.stroke();
    
    // Camera payload
    ctx.fillStyle = '#0a0a0a';
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(10, 8, 4, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();

    // White Camera Lens
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(11, 8, 1.5, 0, Math.PI*2);
    ctx.fill();
    
    ctx.restore();

    // Draw Ground Line
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, h - 2);
    ctx.lineTo(w, h - 2);
    ctx.stroke();

    // HUD (White)
    ctx.fillStyle = '#ffffff';
    ctx.font = '22px "Courier New", Courier, monospace';
    ctx.fontWeight = 'bold';
    
    ctx.textAlign = 'right';
    ctx.fillText(`HI-SCORE [${String(highScore).padStart(5, '0')}]  CURR [${String(score).padStart(5, '0')}]`, w - 20, 30);

    if (gameState === 'PLAYING' || gameState === 'GAME_OVER') {
      ctx.textAlign = 'left';
      ctx.font = '16px "Courier New", Courier, monospace';
      
      let threatText = "THREAT LEVEL: NORMAL";
      if (currentPhase === 3) {
        threatText = "THREAT LEVEL: COMBAT";
      } else if (currentPhase === 2) {
        threatText = "THREAT LEVEL: ELEVATED";
      }
      
      ctx.fillText(threatText, 20, 30);
      
      // Live telemetry: Battery and Velocity
      ctx.font = '12px "Courier New", Courier, monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText(`VEL: ${playerVel.current.toFixed(1)} m/s`, 20, 50);
      
      // Draw Battery
      const batStr = battery.toFixed(1);
      ctx.fillText(`BATT: ${batStr}%`, 20, 65);
      
      // Little battery visual indicator
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(120, 55, 40, 10);
      ctx.fillRect(160, 58, 2, 4); // battery nub
      ctx.fillRect(121, 56, 38 * (battery/100), 8); // fill
    }

    // Level Up Alert
    if (gameState === 'PLAYING' && ticks.current - levelUpTickRef.current < 90) {
      // Blinking text
      if (Math.floor(ticks.current / 10) % 2 === 0) {
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.font = '24px "Courier New", Courier, monospace';
        ctx.fillText(`! THREAT LEVEL INCREASED !`, w/2, h/2);
      }
    }

    ctx.textAlign = 'center';
    if (gameState === 'START') {
      ctx.fillStyle = '#ffffff';
      ctx.font = '28px "Courier New", Courier, monospace';
      ctx.fillText("UAV FLIGHT SIMULATOR", w/2, h/2 - 50);
      
      ctx.font = '20px "Courier New", Courier, monospace';
      ctx.fillText("> INITIALIZE THRUST [SPACE] <", w/2, h/2 - 10);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '16px "Courier New", Courier, monospace';
      ctx.fillText("--- HOW TO PLAY ---", w/2, h/2 + 30);
      ctx.fillText("PRESS [SPACE] TO JUMP AND DODGE PILLARS", w/2, h/2 + 55);
      ctx.fillText("DON'T LET THE BATTERY REACH 0%", w/2, h/2 + 75);

    } else if (gameState === 'GAME_OVER') {
      ctx.fillStyle = '#ffffff';
      ctx.font = '32px "Courier New", Courier, monospace';
      if (battery <= 0) {
        ctx.fillText("BATTERY DEPLETED", w/2, h/2 - 30);
      } else {
        ctx.fillText("CRITICAL SYSTEM FAILURE", w/2, h/2 - 30);
      }
      ctx.font = '20px "Courier New", Courier, monospace';
      ctx.fillText("> REBOOT SIMULATION [SPACE] <", w/2, h/2 + 30);
    }

    frameRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    frameRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(frameRef.current);
  }, [gameState, score, highScore, battery, currentPhase]);

  useEffect(() => {
    if (gameState === 'GAME_OVER' && score > highScore) {
      setHighScore(score);
    }
  }, [gameState, score]);

  return (
    <div className="uav-sim-overlay" onClick={jump}>
      <div className="uav-sim-container">
        <button className="sim-close" onClick={(e) => { e.stopPropagation(); onClose(); }} style={{ color: '#111111', background: 'transparent', border: 'none' }}>[X] ABORT</button>
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={400} 
          style={{ 
            display: 'block', 
            width: '100%', 
            border: '1px solid rgba(255,255,255,0.5)', 
            background: '#000000', 
            boxShadow: '0 0 40px rgba(255,255,255,0.1)'
          }} 
        />
      </div>
    </div>
  );
}

// ── UTC Clock ──
function updateClock(){
  const t=new Date();
  const utcEl = document.getElementById('utcTime');
  if(utcEl) utcEl.textContent='UTC: '+t.toISOString().slice(11,19);
}
setInterval(updateClock,1000);updateClock();

// ── Nav Scroll ──
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('navbar');
  if(nav) nav.classList.toggle('scrolled',window.scrollY>50);
});

// ── Mobile Nav ──
const ham=document.getElementById('hamburger');
const mNav=document.getElementById('mobileNav');
if(ham && mNav){
  ham.addEventListener('click',()=>{
    mNav.classList.toggle('open');
    const spans=ham.querySelectorAll('span');
    if(mNav.classList.contains('open')){
      spans[0].style.transform='rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity='0';
      spans[2].style.transform='rotate(-45deg) translate(5px,-5px)';
    }else{
      spans.forEach(s=>{s.style.transform='';s.style.opacity=''});
    }
  });
}
function closeMobile(){if(mNav) mNav.classList.remove('open');}

// ── Year footer ──
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent=new Date().getFullYear();

// ── Projects Filter ──
function filterProjects(status,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(c=>{
    if(status==='all'||c.dataset.status===status){
      c.classList.remove('project-hidden');
    }else{
      c.classList.add('project-hidden');
    }
  });
}

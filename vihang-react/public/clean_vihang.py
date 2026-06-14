from PIL import Image

img = Image.open('vihang logo.jpg').convert('RGBA')
data = img.getdata()
new_data = []

for r, g, b, a in data:
    brightness = max(r, g, b)
    if brightness < 100:
        # Completely remove all JPEG noise and blurry backgrounds
        new_data.append((0, 0, 0, 0))
    elif brightness > 160:
        # Make the main logo pure white and fully opaque
        new_data.append((255, 255, 255, 255))
    else:
        # Smoothly blend the edges for a clean anti-aliased look
        alpha = int(((brightness - 100) / 60.0) * 255)
        new_data.append((255, 255, 255, alpha))

img.putdata(new_data)
img.save('vihang-logo-transparent.png')

print("Vihang logo perfectly cleaned and thresholded!")

from PIL import Image

# 1. Process Vihang Logo (Perfect luminance-to-alpha)
img_v = Image.open('vihang logo.jpg').convert('RGBA')
gray_v = img_v.convert('L')
img_v.putalpha(gray_v)
img_v.save('vihang-logo-transparent.png')

# 2. Process SSGMCE Logo (Soft black threshold)
img_s = Image.open('ssgmce-logo.png').convert('RGBA')
data_s = img_s.getdata()
new_data_s = []

for r, g, b, a in data_s:
    # Use the maximum RGB value to determine if it's near black
    brightness = max(r, g, b)
    if brightness < 20:
        # Fully transparent for pure black
        new_data_s.append((r, g, b, 0))
    elif brightness < 45:
        # Smooth alpha fade for anti-aliased edges
        alpha = int(((brightness - 20) / 25.0) * 255)
        new_data_s.append((r, g, b, alpha))
    else:
        # Fully opaque for everything else
        new_data_s.append((r, g, b, 255))

img_s.putdata(new_data_s)
img_s.save('ssgmce-logo-transparent.png')

print("Images successfully processed to true transparent PNGs!")

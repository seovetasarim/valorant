"""Kurulum sihirbazı görsellerini (NSIS sidebar + header) mevcut marka görsellerinden üretir."""
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

A = sys.argv[1]          # src/assets klasörü
OUT = sys.argv[2]        # build klasörü
F = '/tmp/fonts/'
BG = (11, 13, 18)
RED = (255, 61, 79)

def font(size, w='700'):
    return (ImageFont.truetype(F + f'raj-latin-{w}.ttf', size), ImageFont.truetype(F + f'raj-latin-ext-{w}.ttf', size))

def text(draw, xy, s, fonts, fill, spacing=0, anchor_center=False, measure=False):
    base, ext = fonts
    def pick(ch):
        return base if ord(ch) < 128 else ext
    widths = [pick(c).getlength(c) for c in s]
    total = sum(widths) + spacing * (len(s) - 1)
    if measure:
        return total
    x, y = xy
    if anchor_center:
        x -= total / 2
    for c, w in zip(s, widths):
        draw.text((x, y), c, font=pick(c), fill=fill)
        x += w + spacing
    return total

def slash(size, x0, w, color, alpha):
    W, H = size
    layer = Image.new('RGBA', size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.polygon([(x0, 0), (x0 + w, 0), (x0 + w + H * 0.55, H), (x0 + H * 0.55, H)], fill=color + (alpha,))
    return layer

def fade_mask(size, start, end):
    W, H = size
    m = Image.new('L', size, 255)
    d = ImageDraw.Draw(m)
    for y in range(H):
        if y > start:
            v = max(0, 255 - int(255 * (y - start) / max(1, end - start)))
            d.line([(0, y), (W, y)], fill=v)
    return m

# ---------------------------------------------------------------- sidebar
S = 4
W, H = 164 * S, 314 * S
img = Image.new('RGBA', (W, H), BG + (255,))

city = Image.open(A + '/city.webp').convert('RGB')
ch = int(H * 0.72)
cw = int(city.width * ch / city.height)
city = city.resize((cw, ch), Image.LANCZOS)
cx = int(cw * 0.70) - W // 2
city = city.crop((cx, 0, cx + W, ch))
city = ImageEnhance.Brightness(city).enhance(0.62).convert('RGBA')
city.putalpha(fade_mask((W, ch), int(ch * 0.45), ch))
img.alpha_composite(city, (0, 0))

img.alpha_composite(slash((W, H), -260, 110, RED, 150))
img.alpha_composite(slash((W, H), 300, 46, RED, 90))

op = Image.open(A + '/operator-1.webp').convert('RGBA')
oh = int(H * 1.45)
ow = int(op.width * oh / op.height)
op = op.resize((ow, oh), Image.LANCZOS)
op = op.crop((0, 0, ow, int(H * 0.66)))
glow = op.split()[3].filter(ImageFilter.GaussianBlur(28))
glow_layer = Image.new('RGBA', op.size, RED + (0,))
glow_layer.putalpha(glow.point(lambda v: int(v * 0.55)))
m = fade_mask(op.size, int(op.height * 0.62), op.height)
op_alpha = Image.composite(op.split()[3], Image.new('L', op.size, 0), m)
op.putalpha(op_alpha)
gl_alpha = Image.composite(glow_layer.split()[3], Image.new('L', op.size, 0), m)
glow_layer.putalpha(gl_alpha)
ox = (W - ow) // 2 + int(W * 0.04)
img.alpha_composite(glow_layer, (ox, int(H * 0.035)))
img.alpha_composite(op, (ox, int(H * 0.035)))

# alt bölüm: logo + marka yazısı
grad = Image.new('RGBA', (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grad)
top = int(H * 0.56)
for y in range(top, H):
    a = min(255, int(255 * (y - top) / (H * 0.12)))
    gd.line([(0, y), (W, y)], fill=BG + (a,))
img.alpha_composite(grad)

logo = Image.open(A + '/logo.webp').convert('RGBA')
lw = int(W * 0.30)
logo = logo.resize((lw, int(logo.height * lw / logo.width)), Image.LANCZOS)
lg = logo.split()[3].filter(ImageFilter.GaussianBlur(22))
lgl = Image.new('RGBA', logo.size, RED + (0,)); lgl.putalpha(lg.point(lambda v: int(v * 0.7)))
ly = int(H * 0.60)
img.alpha_composite(lgl, ((W - lw) // 2, ly))
img.alpha_composite(logo, ((W - lw) // 2, ly))

d = ImageDraw.Draw(img)
ty = ly + logo.height + int(H * 0.018)
text(d, (W / 2, ty), 'DİJİTAL', font(30 * S), (255, 255, 255, 255), spacing=6, anchor_center=True)
ty2 = ty + 31 * S
text(d, (W / 2, ty2), 'CROSSHAIR COLLECTION', font(9 * S, '600'), (201, 205, 214, 255), spacing=4, anchor_center=True)
ly2 = ty2 + 15 * S
d.rectangle([W / 2 - 34 * S / 2, ly2, W / 2 + 34 * S / 2, ly2 + 2 * S], fill=RED + (255,))
d.rectangle([W - 3 * S, 0, W, H], fill=RED + (200,))

side = img.convert('RGB').resize((164, 314), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=0.8, percent=60, threshold=2))
side.save(OUT + '/installerSidebar.bmp')
side.save(OUT + '/uninstallerSidebar.bmp')
side.resize((164 * 3, 314 * 3), Image.NEAREST).save('/tmp/sidebar_preview.png')
img.convert('RGB').resize((328, 628), Image.LANCZOS).save('/tmp/sidebar_2x.png')

# ----------------------------------------------------------------- header
HW, HH = 150 * S, 57 * S
hdr = Image.new('RGBA', (HW, HH), BG + (255,))
hdr.alpha_composite(slash((HW, HH), 330, 40, RED, 120))
hdr.alpha_composite(slash((HW, HH), 390, 14, RED, 70))
hl = Image.open(A + '/logo.webp').convert('RGBA')
hlh = int(HH * 0.78)
hl = hl.resize((int(hl.width * hlh / hl.height), hlh), Image.LANCZOS)
hg = hl.split()[3].filter(ImageFilter.GaussianBlur(14))
hgl = Image.new('RGBA', hl.size, RED + (0,)); hgl.putalpha(hg.point(lambda v: int(v * 0.7)))
hx = HW - hl.width - 10 * S
hdr.alpha_composite(hgl, (hx, (HH - hlh) // 2))
hdr.alpha_composite(hl, (hx, (HH - hlh) // 2))
header = hdr.convert('RGB').resize((150, 57), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=0.8, percent=60, threshold=2))
header.save(OUT + '/installerHeader.bmp')
header.resize((450, 171), Image.NEAREST).save('/tmp/header_preview.png')
print('ok')

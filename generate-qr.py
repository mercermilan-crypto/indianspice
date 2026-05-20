"""Generate QR codes pointing to the live Indian Spice menu.

Run with: python generate-qr.py
Outputs:
  qr.png           — clean QR, 1000x1000
  qr-branded.png   — QR with Indian Spice logo overlaid, 2000x2000 (print-quality)
"""
import io
import urllib.request
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from PIL import Image

URL = "https://mercermilan-crypto.github.io/indianspice/#menu"
LOGO_URL = "https://indianspice.ca/wp-content/uploads/2023/10/PNG-C-1536x1018-1-170x113-1.png"

# ---------- 1. Clean QR ----------
qr = qrcode.QRCode(
    version=None,
    error_correction=ERROR_CORRECT_H,   # 30% redundancy so logo overlay works
    box_size=20,
    border=2,
)
qr.add_data(URL)
qr.make(fit=True)
img = qr.make_image(fill_color="#1c120a", back_color="#fbf6ed").convert("RGB")
img = img.resize((1000, 1000), Image.LANCZOS)
img.save("qr.png", optimize=True)
print(f"qr.png        — {img.size[0]}x{img.size[1]}")

# ---------- 2. Branded QR with logo in center ----------
qr2 = qrcode.QRCode(
    version=None,
    error_correction=ERROR_CORRECT_H,
    box_size=40,
    border=2,
)
qr2.add_data(URL)
qr2.make(fit=True)
img2 = qr2.make_image(fill_color="#1c120a", back_color="#fbf6ed").convert("RGB")
img2 = img2.resize((2000, 2000), Image.LANCZOS)

# Fetch the logo and paste it in the center on a cream-colored backdrop
with urllib.request.urlopen(LOGO_URL) as r:
    logo = Image.open(io.BytesIO(r.read())).convert("RGBA")

# Make logo about 22% of the QR size
target = int(img2.size[0] * 0.22)
ratio = target / max(logo.size)
logo = logo.resize(
    (int(logo.size[0] * ratio), int(logo.size[1] * ratio)),
    Image.LANCZOS,
)

# Cream backdrop circle behind the logo so QR cells don't show through
backdrop_size = int(target * 1.25)
backdrop = Image.new("RGB", (backdrop_size, backdrop_size), "#fbf6ed")
bx = (img2.size[0] - backdrop.size[0]) // 2
by = (img2.size[1] - backdrop.size[1]) // 2
img2.paste(backdrop, (bx, by))

lx = (img2.size[0] - logo.size[0]) // 2
ly = (img2.size[1] - logo.size[1]) // 2
img2.paste(logo, (lx, ly), logo)

img2.save("qr-branded.png", optimize=True)
print(f"qr-branded.png — {img2.size[0]}x{img2.size[1]}")
print(f"\nQR URL: {URL}")

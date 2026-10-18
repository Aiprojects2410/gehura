import base64
import os

def get_b64(path):
    with open(path, 'rb') as f:
        ext = os.path.splitext(path)[1].lower()
        mime = 'image/png' if ext == '.png' else 'image/jpeg'
        return f'data:{mime};base64,' + base64.b64encode(f.read()).decode('utf-8')

bg_b64 = get_b64('blank_degree_hd.png')
logo_b64 = get_b64('clean_ge_logo.png')
brand_logo_b64 = get_b64('clean_gehu_brand_perfect.png')
photo_b64 = get_b64('sohil_photo.png')
qr_b64 = get_b64('sohil_new_qr.png')
bar_b64 = get_b64('sohil_scannable_bar.png')
seal_b64 = get_b64('clean_seal_square.png')
sig_reg_b64 = get_b64('sig_reg_perfect.png')
sig_vc_b64 = get_b64('sig_vc_perfect.png')
dark_holo_b64 = get_b64('clean_dark_rect.png')
olive_holo_b64 = get_b64('clean_olive_rect.png')
silver_holo_b64 = get_b64('clean_silver_holo.png')

html_content = f'''<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Degree Certificate - MOHD SOHIL</title>
<style>
  @font-face {{
    font-family: 'NotoSerifDevanagari';
    src: url('NotoSerifDevanagari.ttf');
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
  @page {{
    size: 2480px 3508px;
    margin: 0;
  }}
  body {{
    width: 2480px;
    height: 3508px;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }}
  .bg-frame {{
    position: absolute;
    top: 0;
    left: 0;
    width: 2480px;
    height: 3508px;
    z-index: 1;
    pointer-events: none;
  }}
  .cert-container {{
    position: absolute;
    top: 0;
    left: 0;
    width: 2480px;
    height: 3508px;
    z-index: 2;
  }}

  /* Top metadata row */
  .meta-col {{
    position: absolute;
    top: 175px;
    text-align: center;
    color: #2a2a2a;
  }}
  .meta-label {{
    font-size: 38px;
    font-weight: 500;
    white-space: nowrap;
    margin-bottom: 8px;
    font-family: 'NotoSerifDevanagari', Arial, sans-serif;
  }}
  .meta-val {{
    font-size: 42px;
    font-weight: 600;
    font-family: Arial, sans-serif;
    color: #1a1a1a;
  }}
  .meta-serial {{
    left: 170px;
    width: 580px;
  }}
  .meta-enrolment {{
    left: 950px;
    width: 580px;
  }}
  .meta-roll {{
    left: 1750px;
    width: 580px;
  }}

  /* Header row: QR, Logo, Photo matching reference */
  .qr-code {{
    position: absolute;
    top: 360px;
    left: 240px;
    width: 200px;
    height: 200px;
  }}
  .main-logo {{
    position: absolute;
    top: 310px;
    left: 1085px;
    width: 310px;
    height: 310px;
    object-fit: contain;
  }}
  .student-photo {{
    position: absolute;
    top: 360px;
    left: 1980px;
    width: 220px;
    height: 275px;
    object-fit: cover;
    border: 1px solid #ddd;
  }}

  /* University Title */
  .title-section {{
    position: absolute;
    top: 660px;
    left: 0;
    width: 2480px;
    text-align: center;
  }}
  .gehu-brand-logo {{
    height: 145px;
    object-fit: contain;
    margin-bottom: 12px;
  }}
  .sub-act {{
    font-size: 26px;
    font-weight: 400;
    color: #222;
    margin-bottom: 6px;
  }}
  .sub-ugc {{
    font-size: 26px;
    font-weight: 400;
    color: #222;
    margin-bottom: 12px;
  }}
  .title-divider-line {{
    width: 1480px;
    height: 4px;
    background-color: #f37023;
    margin: 0 auto;
  }}

  /* Body Content */
  .body-content {{
    position: absolute;
    top: 1040px;
    left: 200px;
    right: 200px;
    text-align: center;
    color: #111111;
  }}
  
  /* Hindi Block */
  .hindi-block {{
    font-family: 'NotoSerifDevanagari', serif;
    line-height: 1.45;
  }}
  .hindi-line1 {{
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 24px;
    color: #1a1a1a;
  }}
  .hindi-name {{
    font-size: 64px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 22px;
    letter-spacing: 0.5px;
  }}
  .hindi-line2 {{
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 22px;
    color: #1a1a1a;
  }}
  .hindi-line3 {{
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 22px;
    color: #1a1a1a;
  }}
  .hindi-line4 {{
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 24px;
    color: #1a1a1a;
  }}
  .hindi-degree {{
    font-size: 60px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 22px;
    letter-spacing: 0.5px;
  }}
  .hindi-line5 {{
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 50px;
    color: #1a1a1a;
  }}

  /* English Block - Times New Roman / Serif matching reference */
  .english-block {{
    font-family: 'Times New Roman', Times, serif;
    line-height: 1.45;
  }}
  .eng-line1 {{
    font-size: 50px;
    font-weight: 400;
    margin-bottom: 24px;
    color: #1a1a1a;
  }}
  .eng-name {{
    font-size: 62px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 24px;
    letter-spacing: 0.5px;
  }}
  .eng-line2 {{
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 22px;
    color: #1a1a1a;
  }}
  .eng-line3 {{
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 26px;
    color: #1a1a1a;
  }}
  .eng-degree {{
    font-size: 58px;
    font-weight: 700;
    color: #111111;
    letter-spacing: 0.5px;
  }}

  /* Bottom Section */
  .silver-patch {{
    position: absolute;
    top: 2710px;
    left: 215px;
    width: 590px;
    height: 150px;
    object-fit: cover;
    opacity: 0.95;
  }}
  .addr-block {{
    position: absolute;
    top: 2950px;
    left: 215px;
    text-align: left;
    color: #1a1a1a;
  }}
  .addr-hindi {{
    font-family: 'NotoSerifDevanagari', serif;
    font-size: 40px;
    line-height: 1.35;
    font-weight: 500;
  }}
  .addr-eng {{
    font-family: Arial, sans-serif;
    font-size: 38px;
    line-height: 1.35;
    font-weight: 500;
  }}
  .addr-date {{
    font-family: 'NotoSerifDevanagari', Arial, sans-serif;
    font-size: 38px;
    line-height: 1.35;
    font-weight: 500;
    margin-top: 4px;
  }}

  /* Seal */
  .stamp-seal {{
    position: absolute;
    top: 2710px;
    left: 1065px;
    width: 350px;
    height: 350px;
    object-fit: contain;
  }}

  /* Barcode matching reference */
  .barcode-box {{
    position: absolute;
    top: 2635px;
    left: 1890px;
    width: 320px;
    height: 80px;
  }}
  .barcode-img {{
    width: 320px;
    height: 80px;
    image-rendering: pixelated;
  }}

  /* Signatures */
  .sig-registrar {{
    position: absolute;
    top: 2760px;
    left: 1520px;
    width: 300px;
    height: auto;
  }}
  .sig-vc {{
    position: absolute;
    top: 2750px;
    left: 1900px;
    width: 290px;
    height: auto;
  }}

  /* Signature Labels */
  .sig-label-reg {{
    position: absolute;
    top: 2970px;
    left: 1470px;
    width: 400px;
    text-align: center;
    color: #1a1a1a;
  }}
  .sig-label-vc {{
    position: absolute;
    top: 2970px;
    left: 1845px;
    width: 400px;
    text-align: center;
    color: #1a1a1a;
  }}
  .sig-label-hindi {{
    font-family: 'NotoSerifDevanagari', serif;
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 4px;
  }}
  .sig-label-eng {{
    font-family: Arial, sans-serif;
    font-size: 40px;
    font-weight: 500;
  }}

  /* Hologram Bottom Strips */
  .holo-dark {{
    position: absolute;
    top: 3170px;
    left: 1520px;
    width: 310px;
    height: 110px;
    object-fit: cover;
  }}
  .holo-olive {{
    position: absolute;
    top: 3170px;
    left: 1895px;
    width: 340px;
    height: 110px;
    object-fit: cover;
  }}
</style>
</head>
<body>
  <!-- Background border frame -->
  <img class="bg-frame" src="{bg_b64}">

  <div class="cert-container">
    <!-- Top Metadata -->
    <div class="meta-col meta-serial">
      <div class="meta-label">उपाधि क्रमांक / Degree Serial No.</div>
      <div class="meta-val">2021054084920</div>
    </div>
    <div class="meta-col meta-enrolment">
      <div class="meta-label">नामांकन संख्या / Enrolment No.</div>
      <div class="meta-val">GE-21538540</div>
    </div>
    <div class="meta-col meta-roll">
      <div class="meta-label">अनुक्रमांक / Roll No.</div>
      <div class="meta-val">2187530</div>
    </div>

    <!-- Header Items -->
    <img class="qr-code" src="{qr_b64}">
    <img class="main-logo" src="{logo_b64}">
    <img class="student-photo" src="{photo_b64}">

    <!-- University Title Section -->
    <div class="title-section">
      <img class="gehu-brand-logo" src="{brand_logo_b64}">
      <div class="sub-act">Established by an Act of the State Legislature of Uttarakhand (Adhiniyam Sankhya 12 of 2011)</div>
      <div class="sub-ugc">University under section 2(f) of UGC Act, 1956</div>
      <div class="title-divider-line"></div>
    </div>

    <!-- Body Text -->
    <div class="body-content">
      <div class="hindi-block">
        <div class="hindi-line1">प्रमाणित किया जाता है कि</div>
        <div class="hindi-name">मोहम्मद सोहिल</div>
        <div class="hindi-line2">को वर्ष २०२४ में</div>
        <div class="hindi-line3">विश्वविद्यालय द्वारा आयोजित परीक्षा</div>
        <div class="hindi-line4">८.४१ सी.जी.पी.ए. के साथ उत्तीर्ण करने पर</div>
        <div class="hindi-degree">वाणिज्य स्नातक</div>
        <div class="hindi-line5">की उपाधि प्रदान की जाती है</div>
      </div>

      <div class="english-block">
        <div class="eng-line1">This is to certify that</div>
        <div class="eng-name">MOHD SOHIL</div>
        <div class="eng-line2">having passed the University examination of 2024</div>
        <div class="eng-line3">with CGPA 8.41 has been awarded the Degree of</div>
        <div class="eng-degree">Bachelor of Commerce</div>
      </div>
    </div>

    <!-- Bottom Section -->
    <img class="silver-patch" src="{silver_holo_b64}">

    <div class="addr-block">
      <div class="addr-hindi">ग्राफिक एरा हिल विश्वविद्यालय</div>
      <div class="addr-hindi">देहरादून, उत्तराखण्ड, भारत</div>
      <div class="addr-eng">Graphic Era Hill University</div>
      <div class="addr-eng">Dehradun (Uttarakhand) INDIA</div>
      <div class="addr-date">दिनांक / Date: 29th June 2024</div>
    </div>

    <!-- Center Seal -->
    <img class="stamp-seal" src="{seal_b64}">

    <!-- Barcode -->
    <div class="barcode-box">
      <img class="barcode-img" src="{bar_b64}">
    </div>

    <!-- Signatures -->
    <img class="sig-registrar" src="{sig_reg_b64}">
    <img class="sig-vc" src="{sig_vc_b64}">

    <!-- Signature Labels -->
    <div class="sig-label-reg">
      <div class="sig-label-hindi">कुलसचिव</div>
      <div class="sig-label-eng">Registrar</div>
    </div>
    <div class="sig-label-vc">
      <div class="sig-label-hindi">कुलपति</div>
      <div class="sig-label-eng">Vice Chancellor</div>
    </div>

    <!-- Holographic Bottom Patches -->
    <img class="holo-dark" src="{dark_holo_b64}">
    <img class="holo-olive" src="{olive_holo_b64}">
  </div>
</body>
</html>'''

with open('degree_clean_render.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
with open('degree.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print('Updated degree_clean_render.html and degree.html!')

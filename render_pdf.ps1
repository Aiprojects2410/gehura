[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
Add-Type -AssemblyName System.Drawing

$pdfPath = "C:\Users\learn\.gemini\antigravity\brain\dd2c0895-e1d6-4ebe-aa42-9bb22693168b\.user_uploaded\media_1787226265006.pdf"

$asyncOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)
while ($asyncOp.Status -eq 'Started') { Start-Sleep -Milliseconds 50 }
$file = $asyncOp.GetResults()

$asyncDoc = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)
while ($asyncDoc.Status -eq 'Started') { Start-Sleep -Milliseconds 50 }
$doc = $asyncDoc.GetResults()

$page = $doc.GetPage(0)
$stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream

# Render at 3x high resolution
$renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
$renderOptions.DestinationWidth = [uint32]($page.Size.Width * 3)
$renderOptions.DestinationHeight = [uint32]($page.Size.Height * 3)

$asyncRender = $page.RenderToStreamAsync($stream, $renderOptions)
while ($asyncRender.Status -eq 'Started') { Start-Sleep -Milliseconds 50 }

$netStream = $stream.AsStreamForRead()
$renderedBmp = [System.Drawing.Bitmap]::FromStream($netStream)
$fullPath = "C:\Users\learn\.gemini\antigravity\scratch\graphic-era-login\marksheet_full_rendered.png"
$renderedBmp.Save($fullPath, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Output "Full PDF rendered! Size: $($renderedBmp.Width) x $($renderedBmp.Height)"

# Now crop the high-res Header
# Bounding box in high-res:
# Header is at top: x ~ 8%, w ~ 84%, y ~ 6%, h ~ 10%
$w = $renderedBmp.Width
$h = $renderedBmp.Height

$hx = [int]($w * 0.08)
$hy = [int]($h * 0.065)
$hw = [int]($w * 0.84)
$hh = [int]($h * 0.085)

$rectHeader = New-Object System.Drawing.Rectangle($hx, $hy, $hw, $hh)
$bmpHeader = $renderedBmp.Clone($rectHeader, $renderedBmp.PixelFormat)
$bmpHeader.Save("C:\Users\learn\.gemini\antigravity\scratch\graphic-era-login\marksheet_header.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpHeader.Dispose()

# Crop Watermark: center
$wx = [int]($w * 0.18)
$wy = [int]($h * 0.22)
$ww = [int]($w * 0.64)
$wh = [int]($h * 0.44)

$rectWM = New-Object System.Drawing.Rectangle($wx, $wy, $ww, $wh)
$bmpWM = $renderedBmp.Clone($rectWM, $renderedBmp.PixelFormat)
$bmpWM.Save("C:\Users\learn\.gemini\antigravity\scratch\graphic-era-login\marksheet_watermark.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpWM.Dispose()

$renderedBmp.Dispose()
$netStream.Dispose()
$stream.Dispose()

Write-Output "Successfully extracted 100% authentic Header and Watermark!"

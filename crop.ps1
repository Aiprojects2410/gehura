Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\learn\.gemini\antigravity\brain\dd2c0895-e1d6-4ebe-aa42-9bb22693168b\.user_uploaded\media_1787227266077.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# Header bounds
$rectHeader = New-Object System.Drawing.Rectangle(195, 48, 535, 78)
$bmpHeader = $src.Clone($rectHeader, $src.PixelFormat)
$bmpHeader.Save("C:\Users\learn\.gemini\antigravity\scratch\graphic-era-login\marksheet_header.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpHeader.Dispose()

# Watermark
$rectWM = New-Object System.Drawing.Rectangle(260, 195, 420, 420)
$bmpWM = $src.Clone($rectWM, $src.PixelFormat)
$bmpWM.Save("C:\Users\learn\.gemini\antigravity\scratch\graphic-era-login\marksheet_watermark.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpWM.Dispose()

$src.Dispose()
Write-Output "Cropped cleanly!"

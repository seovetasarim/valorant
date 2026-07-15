# indir.valocross.com — indirme sayacı

Bu klasördekileri **cPanel File Manager** ile şuraya yükle:

`public_html/indir.valocross.com/`

## Dosyalar
| Dosya | Görev |
|-------|--------|
| `download.php` | Tıklanınca sayaç +1 → `.exe` indir |
| `stats.php` | Güncel sayıyı JSON döner |
| `download-count.json` | Sayaç verisi (yoksa otomatik oluşur) |
| `DijitalCrosshair-Setup.exe` | Kurulum (zaten olmalı) |

## Test
- İndir: https://indir.valocross.com/download.php
- Sayaç: https://indir.valocross.com/stats.php

Site indirme butonları `download.php` adresini kullanır.

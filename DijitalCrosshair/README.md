# Dijital Crosshair 2.0

Valorant ve CS2 için Windows nişangah overlay uygulaması (Electron + React + Vite).

## Klasörler

- `electron/` → Ana süreç (`main.cjs`), köprü (`preload.cjs`), açılış animasyonu (`splash.html`) ve ikonlar
- `src/settings/` → Ana pencere (Anasayfa, Crosshairlar, Favoriler, Rehber, Ayarlar)
- `src/overlay/` → Oyunun üzerinde görünen şeffaf nişangah katmanı
- `src/components/Crosshair.js` → Nişangah çizici (önizleme ve overlay ortak kullanır)
- `src/lib/presets.js` → Valorant / CS2 / Eğlence nişangah kütüphanesi
- `src/assets/` → Logo, operatör ve arka plan görselleri

## Komutlar

```bash
npm install          # bağımlılıkları kur (ilk seferde)
npm run dev          # tasarımı tarayıcıda dene (http://localhost:5173)
npm start            # derleyip Electron'da aç
npm run dist         # Windows kurulum dosyası üret → release/DijitalCrosshair-Setup.exe
```

`npm run dist` Windows'ta çalıştırılmalıdır. Çıkan `DijitalCrosshair-Setup.exe` dosyasını
GitHub'daki `seovetasarim/valorant` deposunda yeni bir Release olarak yayınlarsan,
sitedeki indirme butonu otomatik olarak yeni sürümü indirir.

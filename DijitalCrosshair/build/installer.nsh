; Dijital Crosshair kurulum sihirbazı: koyu tema ve Türkçe metinler.
; Bu dosya electron-builder tarafından kurulum betiğinin en başına eklenir.

!define MUI_BGCOLOR "0B0D12"
!define MUI_TEXTCOLOR "F2F4F8"
!define MUI_INSTFILESPAGE_COLORS "F2F4F8 0B0D12"
!define MUI_ABORTWARNING
!define MUI_ABORTWARNING_TEXT "Kurulumdan çıkmak istediğine emin misin?"

!ifndef BUILD_UNINSTALLER
  !define MUI_FINISHPAGE_TITLE "Kurulum tamamlandı!"
  !define MUI_FINISHPAGE_TITLE_3LINES
  !define MUI_FINISHPAGE_TEXT "Dijital Crosshair bilgisayarına kuruldu ve oyuna hazır.$\r$\n$\r$\nProgramı bundan sonra masaüstündeki $\"Dijital Crosshair$\" kısayolundan açabilirsin. İndirdiğin kurulum dosyasını (DijitalCrosshair-Setup) artık silebilirsin.$\r$\n$\r$\nİpucu: Overlay'i oyun içinde Ctrl + Shift + X ile açıp kapatabilirsin."
  !define MUI_FINISHPAGE_RUN_TEXT "Dijital Crosshair'i şimdi başlat"
  !define MUI_FINISHPAGE_LINK "www.valocross.com - yüzlerce nişangah kodu"
  !define MUI_FINISHPAGE_LINK_LOCATION "https://www.valocross.com"
  !define MUI_FINISHPAGE_LINK_COLOR "FF3D4F"
!endif

!macro customWelcomePage
  !define MUI_WELCOMEPAGE_TITLE "Dijital Crosshair'e hoş geldin"
  !define MUI_WELCOMEPAGE_TITLE_3LINES
  !define MUI_WELCOMEPAGE_TEXT "Valorant ve CS2 için yüzlerce pro oyuncu nişangahı, tek tıkla ekranında.$\r$\n$\r$\n•  Hazır pro oyuncu ve yayıncı profilleri$\r$\n•  Renk, boyut ve kalınlığı canlı düzenleme$\r$\n•  Oyun dosyalarına dokunmayan güvenli overlay$\r$\n$\r$\nKuruluma başlamak için İleri'ye tıkla."
  !insertmacro MUI_PAGE_WELCOME
!macroend

!macro customUnWelcomePage
  !define MUI_WELCOMEPAGE_TITLE "Dijital Crosshair kaldırılıyor"
  !define MUI_WELCOMEPAGE_TEXT "Dijital Crosshair bilgisayarından kaldırılacak.$\r$\n$\r$\nFikrini değiştirirsen her zaman www.valocross.com adresinden yeniden indirebilirsin.$\r$\n$\r$\nDevam etmek için İleri'ye tıkla."
  !insertmacro MUI_UNPAGE_WELCOME
!macroend

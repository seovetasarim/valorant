import Link from 'next/link'
import DownloadCount from './DownloadCount'

/** Sayaç + yönlendirme (indir.valocross.com/download.php) */
const DOWNLOAD_URL = 'https://indir.valocross.com/download.php'

const steps = [
  {
    n: '01',
    title: 'Uygulamayı indir',
    text: 'Resmi indirme bağlantısından Dijital Crosshair kurulum dosyasını bilgisayarınıza kaydedin (~88 MB portable). Yalnızca resmi kaynaktan gelen dosyayı kullanın.',
  },
  {
    n: '02',
    title: 'Kurulumu başlat',
    text: 'İndirdiğiniz .exe dosyasını çalıştırın. Windows güvenlik uyarısı çıkarsa “Daha fazla bilgi” → “Yine de çalıştır” adımlarını izleyin; uygulama oyuna müdahale etmez, yalnızca ekran üzeri overlay kullanır.',
  },
  {
    n: '03',
    title: 'Nişangahı ayarla',
    text: 'Açılışta Valorant, CS2 veya Eğlence galerisinden hazır profil seçin. Renk, kalınlık, kenarlık ve opaklığı kaydırıcılarla anında düzenleyin.',
  },
  {
    n: '04',
    title: 'Oyuna geç',
    text: 'Overlay’i etkinleştirip oyunu açın. Nişangah ekranın ortasında sabit kalır. İsterseniz tepsiye küçültüp arka planda çalıştırabilirsiniz.',
  },
]

const features = [
  {
    title: 'Hazır nişangah kütüphanesi',
    text: 'Yüzlerce Valorant ve CS2 profili, gerçek paylaşım kodları ve eğlenceli sembol stilleri tek galeride.',
  },
  {
    title: 'Anlık özelleştirme',
    text: 'Renk, boyut, kalınlık, offset, outline ve opaklığı canlı önizleme ile değiştirin; ayarlarınız kaybolmaz.',
  },
  {
    title: 'Güvenli overlay',
    text: 'Oyun dosyalarına yazmaz, enjekte etmez. Yalnızca masaüstü üzerinde şeffaf bir katman olarak çalışır.',
  },
  {
    title: 'Hafif Windows uygulaması',
    text: 'Electron tabanlı, hızlı açılış, sistem tepsisi desteği ve isteğe bağlı Windows ile birlikte başlatma.',
  },
]

const faqs = [
  {
    q: 'Dijital Crosshair ücretsiz mi?',
    a: 'Evet. Uygulamayı valocross.com üzerinden ücretsiz indirebilir ve kurabilirsiniz.',
  },
  {
    q: 'Valorant veya CS2 VAC / ban riski var mı?',
    a: 'Uygulama oyun sürecine enjekte olmaz; ekran üzeri overlay kullanır. Yine de üçüncü parti yazılımlarda her zaman resmi kurallara dikkat edin ve yalnızca güvenilir kaynaktan indirin.',
  },
  {
    q: 'Hangi işletim sistemlerini destekliyor?',
    a: 'Windows 10 ve Windows 11 (64-bit) için optimize edilmiştir.',
  },
  {
    q: 'Sitedeki kodları uygulamada kullanabilir miyim?',
    a: 'Evet. Nişangah sayfasından kopyaladığınız Valorant profil kodlarını oyunda içe aktarabilir; masaüstü uygulamasında da benzer stilleri galeriden seçebilirsiniz.',
  },
  {
    q: 'Kurulumda Windows engeli çıkarsa ne yapmalıyım?',
    a: 'SmartScreen yeni yayınlanan uygulamalarda sık görülür. Daha fazla bilgi → Yine de çalıştır ile devam edebilirsiniz. Dosyayı yalnızca resmi valocross.com adresinden indirdiğinizden emin olun.',
  },
]

export default function DownloadAppContent() {
  return (
    <article className="mx-auto w-full max-w-3xl px-3 pb-10 pt-2 md:max-w-4xl md:px-4">
      <header className="mb-6 border-b border-primary-700/40 pb-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-700">
          Windows uygulaması
        </p>
        <h1 className="mb-3 text-2xl font-bold uppercase leading-tight text-white md:text-4xl">
          Dijital Crosshair indir ve kur
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-primary-800 md:text-base">
          Valorant ve CS2 için özel masaüstü nişangah uygulaması. Hazır
          profiller, canlı özelleştirme ve güvenli ekran overlay ile hedefini
          netleştir. Resmi indirme:{' '}
          <span className="text-white">valocross.com</span>.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center justify-center border-2 border-primary-700 bg-primary-700 px-6 py-3 text-sm font-bold uppercase text-white transition-all hover:border-white"
          >
            Windows için indir (.exe)
          </a>
          <Link
            href="/views/crosshairs"
            className="inline-flex items-center justify-center border-2 border-primary-700 px-6 py-3 text-sm font-bold uppercase text-primary-700 transition-all hover:border-white hover:text-white"
          >
            Nişangah kodları
          </Link>
        </div>
        <DownloadCount />
      </header>

      <section className="mb-8" aria-labelledby="nedir">
        <h2
          id="nedir"
          className="mb-3 text-lg font-bold uppercase text-white md:text-xl"
        >
          Dijital Crosshair nedir?
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-primary-800 md:text-base">
          <p>
            <strong className="text-white">Dijital Crosshair</strong>, Windows
            üzerinde çalışan bir nişangah overlay uygulamasıdır. Valorant
            oynarken veya CS2’de aim antrenmanı yaparken ekranın ortasına özel
            bir crosshair yerleştirmenizi sağlar. Oyun dosyalarına dokunmaz;
            yalnızca masaüstünde şeffaf bir katman olarak görünür.
          </p>
          <p>
            Uygulama içinde yüzlerce hazır profil bulunur: rekabetçi Valorant
            stilleri, CS2 nişangahları ve eğlenceli sembol setleri. Renk,
            kalınlık, kenarlık ve opaklığı anında değiştirebilir; sık kullandığın
            ayarı tepsiye indirerek hızlıca geri açabilirsin.
          </p>
        </div>
      </section>

      <section className="mb-8" aria-labelledby="ozellikler">
        <h2
          id="ozellikler"
          className="mb-4 text-lg font-bold uppercase text-white md:text-xl"
        >
          Öne çıkan özellikler
        </h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <li
              key={f.title}
              className="border-2 border-primary-700/60 bg-primary-900/40 p-3"
            >
              <h3 className="mb-1 text-sm font-bold uppercase text-white">
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed text-primary-800 md:text-sm">
                {f.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8" aria-labelledby="kurulum">
        <h2
          id="kurulum"
          className="mb-4 text-lg font-bold uppercase text-white md:text-xl"
        >
          Kurulum adımları
        </h2>
        <ol className="space-y-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex gap-3 border-l-2 border-primary-700 bg-primary-900/30 p-3"
            >
              <span className="shrink-0 text-sm font-bold text-primary-700">
                {s.n}
              </span>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase text-white">
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed text-primary-800 md:text-sm">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-8" aria-labelledby="sistem">
        <h2
          id="sistem"
          className="mb-3 text-lg font-bold uppercase text-white md:text-xl"
        >
          Sistem gereksinimleri
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-primary-800">
          <li>Windows 10 veya Windows 11 (64-bit)</li>
          <li>En az 100 MB boş disk alanı</li>
          <li>İnternet bağlantısı (ilk indirme ve güncellemeler için)</li>
          <li>Valorant / CS2 veya herhangi bir tam ekran / pencere oyunu</li>
        </ul>
      </section>

      <section className="mb-8" aria-labelledby="sss">
        <h2
          id="sss"
          className="mb-4 text-lg font-bold uppercase text-white md:text-xl"
        >
          Sık sorulan sorular
        </h2>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="border-2 border-primary-700/50 bg-primary-900/30 p-3 open:border-primary-700"
            >
              <summary className="cursor-pointer text-sm font-bold uppercase text-white">
                {item.q}
              </summary>
              <p className="mt-2 text-xs leading-relaxed text-primary-800 md:text-sm">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-2 border-primary-700 bg-primary-900/50 p-4 text-center md:p-6">
        <h2 className="mb-2 text-lg font-bold uppercase text-white">
          Hemen dene
        </h2>
        <p className="mb-4 text-sm text-primary-800">
          Dijital Crosshair’i resmi kaynaktan indir, kur ve nişangahını saniyeler
          içinde kişiselleştir.
        </p>
        <a
          href={DOWNLOAD_URL}
          className="inline-flex items-center justify-center border-2 border-white bg-primary-700 px-8 py-3 text-sm font-bold uppercase text-white transition-all hover:bg-transparent"
        >
          Dijital Crosshair Windows kurulumu
        </a>
      </section>
    </article>
  )
}

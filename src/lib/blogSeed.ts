import type { BlogPost } from './blog'

const CM = 'https://www.cocukmont.com.tr'
const CAT = {
  mont: `${CM}/kategori/cocuk-mont`,
  bot: `${CM}/kategori/cocuk-bot`,
  aks: `${CM}/kategori/atki-bere-eldiven`,
  kizMont: `${CM}/kategori/kiz-cocuk-mont`,
  erkekMont: `${CM}/kategori/erkek-cocuk-mont`,
}

const DW = 'https://www.dijitalwebsite.com'
const DWP = {
  web: `${DW}/web-tasarim`,
  seo: `${DW}/seo-hizmeti`,
  eticaret: `${DW}/e-ticaret-sitesi`,
  yerel: `${DW}/yerel-seo`,
  teknik: `${DW}/teknik-seo`,
  kurumsal: `${DW}/kurumsal-web-tasarim`,
  ozel: `${DW}/ozel-yazilim`,
  projeler: `${DW}/projeler`,
  iletisim: `${DW}/iletisim`,
}

const LY = 'https://www.lyyildirimlarinsaat.com'
const LYP = {
  tadilat: `${LY}/silivri-tadilat`,
  tesisat: `${LY}/silivri-tesisat`,
  dusakabin: `${LY}/silivri-dusakabin`,
  iletisim: `${LY}/iletisim`,
  blog: `${LY}/blog`,
}

function tags(...items: string[]) {
  return JSON.stringify(items)
}

function a(href: string, label: string) {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
}

const COCUKMONT_POSTS: BlogPost[] = [
  {
    id: 'cm-1',
    title: 'Toptan çocuk mont alımında sezon öncesi stok dengesi',
    slug: 'toptan-cocuk-mont-sezon-stok-dengesi',
    description:
      'Mağaza ve bayi alımlarında toptan çocuk mont stoğunu yaş grubu, cinsiyet ve kumaş tipine göre nasıl dengelemeniz gerektiğini anlatıyoruz.',
    author: 'ValoCross Editör',
    category: 'Tedarik Rehberi',
    tags: tags(
      'toptan çocuk mont',
      'toptan mont bot',
      'toptan çocuk bot',
      'toptan atkı bere eldiven',
      'www.cocukmont.com.tr',
    ),
    views: 128,
    createdAt: '2026-08-06T10:00:00.000Z',
    content: `
<p>Kış sezonu açılmadan önce en kritik karar, vitrinde ne kadar çeşit tutacağınız değil; hangi beden ve model kombinasyonunun satacağını önceden okumaktır. ${a(CM, 'toptan çocuk mont')} alımında çoğu işletme aynı hataya düşer: popüler renkleri fazla, ara bedenleri az alır. Sezon ortasında raflar dolu görünür ama satılacak ürün kalmamıştır.</p>

<p>Türkiye pazarında çocuk mont talebi Eylül–Kasım arasında hızlanır. Bu pencereyi kaçırmamak için tedarikçi seçimi, numune kontrolü ve ilk parti miktarı aynı takvimde ilerlemelidir. ${a(CAT.mont, 'Çocuk mont')} kategorisinde kız ve erkek hatlarını ayrı planlamak, isteğe bağlı set satışlarını da kolaylaştırır.</p>

<h2>Yaş grubu ve beden dağılımı</h2>
<p>2–5 yaş ile 6–15 yaş aynı “çocuk” etiketi altında toplanır ama satış ritmi farklıdır. Küçük yaşta ebeveyn hızla karar verir; büyük yaşta model ve renk daha belirleyicidir. İlk partide bedenleri eşit bölmek yerine geçmiş satış oranınıza göre ağırlıklandırın. Yoksa ara bedenler erken biter, uç bedenler sezona kalır.</p>

<p>${a(CAT.kizMont, 'Kız çocuk mont')} ve ${a(CAT.erkekMont, 'erkek çocuk mont')} hatlarını ayrı kotaya bağlamak, vitrin dengesini korur. Tek tedarikçi üzerinden her iki hattı da görmek, renk ve kumaş uyumunu da kolaylaştırır. Bu noktada ${a(CM, 'www.cocukmont.com.tr')} üzerinden model çeşitliliğini peşinen kontrol etmek, numune turunu kısaltır.</p>

<h2>Kumaş, dolgu ve günlük kullanım</h2>
<p>Toptan alımda yalnızca fiyatı değil, dolgu gramajını, kapüşon detayını ve yıkama talimatını da kontrol edin. Okul ve günlük kullanım için aşırı ağır modeller stokta yavaş döner; hafif ama rüzgar kesici modeller daha hızlı çıkar. Su itici yüzey, şehir içi satışlarda avantaj sağlar; tamamen outdoor odaklı ürünler ise daha niş kalır.</p>

<p>Mağaza için ideal senaryo, ana stokta güvenli renkler (siyah, lacivert, haki, bordo) tutup, vitrinde 2–3 dikkat çekici modeli öne çıkarmaktır. ${a(CM, 'toptan çocuk mont')} siparişinde renk kotasını bu mantıkla kurmak, iade ve indirim baskısını azaltır.</p>

<h2>Montu tamamlayan yan ürünler</h2>
<p>Mont tek başına satılır ama sepet ortalaması yan ürünlerle büyür. Aynı müşteriye ${a(CAT.bot, 'toptan çocuk bot')} ve ${a(CAT.aks, 'toptan atkı bere eldiven')} önermek, hem stok devir hızını hem de kârlılığı etkiler. Özellikle set fiyatı sunabilen işletmeler, tek parça satışa göre daha öngörülebilir ciro yakalar.</p>

<p>${a(CM, 'toptan mont bot')} olarak düşündüğünüz kombine alım, depo planlamasını da sadeleştirir: mont ve bot aynı sezonda, aynı yaş grubunda ve benzer fiyat bandında hareket eder. Ayrı ayrı sipariş açmak yerine tek tedarikçi üzerinden ilerlemek, lojistik maliyetini düşürür.</p>

<h2>Tedarikçi ve teslimat takvimi</h2>
<p>İlk parti küçük, ikinci parti satışa göre büyütülmeli. Erken ve tek seferde aşırı stok, nakit akışını kilitler. Numune onayından sonra üretim / sevkiyat süresini yazılı alın; sezon ortasında “stok yok” cevabı alan bayi, o yılı telafi etmekte zorlanır.</p>

<p>Özetle sağlam bir kış planı; dengeli beden, ayrı kız–erkek hat, tamamlayıcı bot ve aksesuar, güvenilir tedarik zinciri demektir. Model ve fiyat bandını incelemek için ${a(CM, 'cocukmont.com.tr')} üzerinden güncel ${a(CAT.mont, 'toptan çocuk mont')} seçeneklerine bakabilirsiniz.</p>
`.trim(),
  },
  {
    id: 'cm-2',
    title: 'Mont ile botu aynı siparişte düşünmek: toptan alım pratiği',
    slug: 'toptan-mont-bot-birlikte-alim',
    description:
      'Kışlık çocuk giyiminde mont ve botu ayrı ayrı değil, birlikte planlayan işletmeler stok ve sepet ortalamasında öne çıkar. Toptan mont bot alımının pratik çerçevesi.',
    author: 'ValoCross Editör',
    category: 'Tedarik Rehberi',
    tags: tags(
      'toptan mont bot',
      'toptan çocuk mont',
      'toptan çocuk bot',
      'toptan atkı bere eldiven',
      'www.cocukmont.com.tr',
    ),
    views: 96,
    createdAt: '2026-08-06T11:00:00.000Z',
    content: `
<p>Kışlık ürün siparişini mont ve bot olarak ikiye bölmek, görünürde kontrol sağlar; pratikte ise vitrin uyumsuzluğu ve eksik kombinasyon üretir. ${a(CM, 'toptan mont bot')} mantığıyla ilerleyen işletmeler, aynı yaş grubu ve benzer fiyat bandında ürünleri yan yana koyduğu için müşteri kararını hızlandırır.</p>

<p>Bir ebeveyn mont seçtikten sonra bot aramaya başlar. O anda rafta uygun numara ve renk yoksa satış ya yarım kalır ya da başka mağazaya kayar. Bu yüzden ${a(CAT.mont, 'toptan çocuk mont')} ile ${a(CAT.bot, 'toptan çocuk bot')} stoğunu aynı plan dosyasında yönetmek gerekir.</p>

<h2>Fiyat bandını hizalamak</h2>
<p>Montu premium, botu çok ucuz tutmak sepeti büyütmez; müşteri ürünleri “uyumsuz” hisseder. Tersine, botu aşırı pahalı bırakmak da mont satışını bozar. Hedef, iki ürünün toplamının aile bütçesinde makul durmasıdır. ${a(CM, 'www.cocukmont.com.tr')} gibi tek kaynaktan alınan modellerde fiyat ve kalite dilimini eşitlemek daha kolaydır.</p>

<p>Set kampanyası kuracaksanız indirimi rastgele yapmayın. Mont + bot paketinde küçük bir avantaj vermek, ayrı ayrı yüzde indirim açmaktan daha temiz bir iletişimdir. Yanına ${a(CAT.aks, 'toptan atkı bere eldiven')} eklendiğinde üçlü paket, kış vitrininin omurgası olur.</p>

<h2>Renk ve model uyumu</h2>
<p>Lacivert montun yanında kahverengi bot her zaman çalışmaz; siyah ve gri tonlar daha güvenlidir. Vitrinde 2–3 “hazır kombin” kurun, kalan stoğu nötr tutun. Böylece personel yönlendirmesi kolaylaşır, müşteri ürünleri bir arada görür.</p>

<p>${a(CM, 'toptan mont bot')} alımında renk kartelası istemeyi unutmayın. Fotoğraf ile gerçek ürün tonu farklı çıkabiliyor; özellikle toptan partilerde bu fark iade riskini büyütür. Numune üzerinden onay almak, büyük partiden önce şarttır.</p>

<h2>Depo ve sevkiyat</h2>
<p>Montlar hacim kaplar, botlar ağırlık. Aynı sevkiyatta ikisini almak nakliye maliyetini düşürebilir ama depo yerleşimini önceden planlamazsanız sayım karmaşası çıkar. Montları yaşa, botları numaraya göre ayırın; etiketleme standart olsun.</p>

<p>İkinci parti siparişi, ilk iki–üç haftalık satışa göre açın. Erken tükenen numaralar ve yatık kalan renkler bu veriden netleşir. ${a(CM, 'cocukmont.com.tr')} üzerinden hem mont hem bot stoğunu peşinen görmek, yeniden sipariş süresini kısaltır.</p>

<h2>Satış sahasında kullanım</h2>
<p>Kasada “botunuz hazır mı?” sorusu basit ama etkilidir. Personeli bu tamamlayıcı satışı ezberletmek, reklamdan daha hızlı sonuç verir. Mont alan müşteriye bot; bot alan müşteriye mont önermek, aynı stok planının sahadaki yansımasıdır.</p>

<p>Kış sezonunu parçalı değil bütünlüklü düşünmek isteyenler için ${a(CM, 'toptan mont bot')} yaklaşımı en temiz yöntemdir. Model ve kategoriye ${a(CAT.mont, 'çocuk mont')} ile ${a(CAT.bot, 'çocuk bot')} sayfalarından ulaşabilirsiniz.</p>
`.trim(),
  },
  {
    id: 'cm-3',
    title: 'Toptan çocuk bot seçiminde numara dağılımı ve malzeme',
    slug: 'toptan-cocuk-bot-numara-malzeme',
    description:
      'Toptan çocuk bot alırken hangi numaraların hızlı döndüğünü, taban ve astar seçiminin iade oranını nasıl etkilediğini sade bir çerçevede ele alıyoruz.',
    author: 'ValoCross Editör',
    category: 'Tedarik Rehberi',
    tags: tags(
      'toptan çocuk bot',
      'toptan mont bot',
      'toptan çocuk mont',
      'toptan atkı bere eldiven',
      'www.cocukmont.com.tr',
    ),
    views: 112,
    createdAt: '2026-08-06T12:00:00.000Z',
    content: `
<p>Ayakkabı ve bot stoğu, monttan daha acımasızdır: yanlış numara dağılımı sezonu bitirmeden rafta kilitlenir. ${a(CM, 'toptan çocuk bot')} alımında başarı, model çeşitliliğinden çok doğru numara eğrisini kurmakta yatar.</p>

<p>22–45 arası geniş numara vaadi cazip görünür; pratikte her numaradan eşit almak depo şişirir. Okul çağı ve erken çocukluk talebi farklıdır. Geçmiş sezon fişleriniz yoksa bölgenizdeki okul yaş ortalamasına ve vitrin trafiğine göre orta numaralara ağırlık verin. ${a(CAT.bot, 'Çocuk bot')} kategorisinde kız ve erkek modellerini ayrı izlemek, renk ve kalıp farkını yönetmeyi kolaylaştırır.</p>

<h2>Taban, astar ve günlük konfor</h2>
<p>Kış botunda kaymaz taban ve nem yönetimi önceliklidir. Sert tabanlı ama içi terleten modeller, ilk yağmurdan sonra iade getirir. Astarın yumuşaklığı, fermuar/bağlık kolaylığı ve topuk desteği ebeveynlerin hızlı karar verdiği noktalardır.</p>

<p>CAT tipi ve benzeri günlük kış botları, okul yolu ve şehir içi kullanımda daha hızlı döner. Aşırı outdoor odaklı modeller ise daha sınırlı bir kitleye hitap eder. ${a(CM, 'www.cocukmont.com.tr')} üzerinde numara aralığı net yazılmış ürünleri tercih etmek, müşteri sorularını azaltır.</p>

<h2>Mont ile birlikte düşünmek</h2>
<p>Bot stoğu monttan bağımsız yönetilmemeli. ${a(CM, 'toptan mont bot')} planı yapan işletmeler, aynı yaş grubunda renk ve fiyat uyumunu korur. Mont satışı botu; bot satışı montu tetikler. Bu döngüyü kırmak, sepet ortalamasını düşürür.</p>

<p>${a(CAT.mont, 'Toptan çocuk mont')} stoğunuz güçlüyse, bot vitrinini mont renklerine göre kurun. Siyah–gri–lacivert omurga, vitrinde güven verir; bir–iki canlı renk dikkat çeker. Yanına ${a(CAT.aks, 'atkı bere eldiven')} koyduğunuzda kışlık görünüm tamamlanır.</p>

<h2>İade ve değişim riskini düşürmek</h2>
<p>Çocuk ayak numarası hızlı değişir; bu yüzden “bir numara büyük” talebi yaygındır. Personelin ölçü alma alışkanlığı yoksa değişim oranı artar. Basit bir numara tablosu ve deneme alanı, toptan aldığınız ürünün perakendede sağlıklı dönmesini sağlar.</p>

<p>Toptan partide kalıp tutarlılığı kritiktir. Aynı modelin farklı üretim lotlarında dar/geniş kalması, özellikle online tamamlayıcı satışlarda sorun çıkarır. Mümkünse ilk partiden sonra müşteri geri bildirimini toplayıp ikinci partiyi ona göre büyütün.</p>

<h2>Sipariş ritmi</h2>
<p>Sezon başında tüm numarayı kilitlemek yerine, hızlı dönecek orta bandı önden doldurun. Uç numaraları daha kontrollü alın. Eksilen numaraya hızlı ek sipariş açabileceğiniz bir tedarikçi, nakit ve depo yükünü azaltır.</p>

<p>${a(CM, 'toptan çocuk bot')} stoğunu kurarken model, numara ve mont uyumunu birlikte okuyun. Güncel seçenekler için ${a(CM, 'cocukmont.com.tr')} ve ${a(CAT.bot, 'çocuk bot')} kategorisine göz atabilirsiniz.</p>
`.trim(),
  },
  {
    id: 'cm-4',
    title: 'Atkı, bere ve eldiven setlerinde toptan sipariş mantığı',
    slug: 'toptan-atki-bere-eldiven-set-siparis',
    description:
      'Kış aksesuarında set satışı neden tek parçadan daha öngörülebilir? Toptan atkı bere eldiven alımında renk, yaş ve paketleme pratiği.',
    author: 'ValoCross Editör',
    category: 'Tedarik Rehberi',
    tags: tags(
      'toptan atkı bere eldiven',
      'toptan çocuk mont',
      'toptan çocuk bot',
      'toptan mont bot',
      'www.cocukmont.com.tr',
    ),
    views: 84,
    createdAt: '2026-08-06T13:00:00.000Z',
    content: `
<p>Kış aksesuarı küçük görünen ama yüksek devirli bir kategoridir. ${a(CM, 'toptan atkı bere eldiven')} setleri, tek tek satılan parçalara göre hem vitrinde daha net durur hem de kasa fişini büyütür. Ebeveyn üç ürünü ayrı ayrı aramak yerine hazır seti alır.</p>

<p>Set mantığının gücü, karar yorgunluğunu azaltmasıdır. Renkler uyumlu, beden aralığı net, paketleme temizse ürün rafta kendi kendini anlatır. ${a(CAT.aks, 'Atkı, bere ve eldiven')} kategorisinde kız ve erkek setlerini ayırmak, hediyelik ve okul sezonu satışlarını da kolaylaştırır.</p>

<h2>Mont stoğuyla renk köprüsü</h2>
<p>Aksesuarı monttan kopuk tutmayın. ${a(CAT.mont, 'Toptan çocuk mont')} renklerinizin yanına aynı tonlarda set koymak, tamamlayıcı satışı doğal hale getirir. Lacivert montun yanında lacivert–gri set; siyah montun yanında siyah set… Vitrin dili sadeleşir.</p>

<p>${a(CM, 'toptan mont bot')} planı yapan mağazalar için aksesuar üçüncü katmandır. Mont + bot alan müşteriye set önermek, “eksik kaldı” hissini kapatır. Bu satış zorlama değil, tamamlamadır.</p>

<h2>Malzeme ve kullanım ömrü</h2>
<p>Yumuşak dokunuş önemli olsa da boncuklanma ve çabuk şekil bozulması iade getirir. Okul çağında sık kullanılan bere ve eldivende dikiş kalitesi, lastik esnekliği ve yıkama talimatı belirleyicidir. Set içinde bir parça zayıfsa tüm setin algısı düşer.</p>

<p>${a(CM, 'www.cocukmont.com.tr')} üzerinden set içeriklerini (kaç parça, hangi yaş aralığı) net görmek, sipariş öncesi karışıklığı önler. “Set” yazıp içinde eksik çıkan ürün, toptan güveni zedeler.</p>

<h2>Paketleme ve vitrin</h2>
<p>Askılı veya şeffaf paket setler, self-servis raflarda daha hızlı döner. Dağınık atkı–bere yığını hem sayımı zorlaştırır hem de hijyen algısını bozar. Toptan alımda paket standardını sorun; perakende sahası buna göre kurulur.</p>

<p>Fiyatlandırmada seti parçaların toplamından bir miktar avantajlı sunmak, müşteriye net gerekçe verir. Aşırı indirim ise kalite şüphesi yaratır. Dengeli bir set fiyatı, sezon boyunca sürdürülebilir satış getirir.</p>

<h2>Bot ve mont ile ortak kampanya</h2>
<p>Kasım–Aralık döneminde “kışa tam hazırlık” teması çalışır. ${a(CM, 'toptan çocuk bot')} ve mont yanında aksesuar seti koymak, hem fotoğraf hem vitrin hem de online ürün önerisi için uygundur. Üçlü öneri, tekil ürüne göre daha yüksek ortalama sepet üretir.</p>

<p>${a(CM, 'toptan atkı bere eldiven')} stoğunu kurarken renkleri mont hattınıza bağlayın, paketlemeyi standart tutun ve set bütünlüğünü koruyun. Model seçimi için ${a(CM, 'cocukmont.com.tr')} ve ${a(CAT.aks, 'atkı bere eldiven')} kategorisini inceleyebilirsiniz.</p>
`.trim(),
  },
]

const DIJITALWEBSITE_POSTS: BlogPost[] = [
  {
    id: 'dw-1',
    title: 'Kurumsal markalar için web tasarımda ilk ekran ve mesaj dengesi',
    slug: 'kurumsal-web-tasarim-ilk-ekran-mesaj',
    description:
      'Web tasarımda hero, vaat ve CTA dengesi nasıl kurulur? Kurumsal sitelerde ilk ekranın dönüşüme etkisi ve uygulama notları.',
    author: 'ValoCross Editör',
    category: 'Dijital Pazarlama',
    tags: tags(
      'web tasarım',
      'web tasarım seo',
      'e-ticaret yazılımı',
      'web seo',
      'www.dijitalwebsite.com',
    ),
    views: 142,
    createdAt: '2026-08-06T14:00:00.000Z',
    content: `
<p>Bir web sitesinin ilk birkaç saniyesi, ziyaretçinin kalıp kalmayacağını çoğu zaman belirler. ${a(DW, 'web tasarım')} işi yalnızca görsel düzenlemek değildir; markanın ne sunduğunu, kime hitap ettiğini ve sonraki adımın ne olduğunu aynı karede anlatmaktır.</p>

<p>Kurumsal karar verici hero alanında belirsiz slogan görmek istemez. Net vaat, tek birincil CTA ve sade bir görsel dil; bu üçlü oturduğunda sayfa “güzel” olmaktan çıkıp iş üreten bir arayüze döner. Bu yaklaşımı ${a(DWP.web, 'web tasarım')} ve ${a(DWP.kurumsal, 'kurumsal web tasarım')} süreçlerinde baştan planlamak gerekir.</p>

<h2>İlk ekranda ne durmalı?</h2>
<p>Marka adı, tek cümlelik fayda, birincil eylem butonu. Fazla rozet, yan kutu ve kayan metin dikkat dağıtır. İkincil bilgiyi aşağıya bırakın. Ziyaretçi önce “bu benim sorunumu çözüyor mu?” sorusuna cevap arar.</p>

<p>${a(DW, 'www.dijitalwebsite.com')} tarafında tasarım; SEO ve yazılımla aynı stratejide yürür. Sadece şık bir arayüz yayınlamak yetmez; hız, mobil düzen ve ölçülebilir formlar da aynı paketin parçasıdır.</p>

<h2>Mesaj hiyerarşisi</h2>
<p>Üstte vaat, ortada kanıt, altta süreç. Referans, proje ve kısa vaka anlatımı güven üretir. ${a(DWP.projeler, 'Proje portföyü')} bu kanıtın doğal yeridir. Abartılı “en iyiyiz” dili yerine somut çıktı yazın: teslim süresi, kapsam, ölçülen sonuç.</p>

<p>${a(DW, 'web tasarım seo')} bakışıyla başlıklar ve metinler arama niyetiyle uyumlu olmalıdır. Güzel ama indekslenmeyen sayfa, uzun vadede görünmez kalır. Tasarım kararları içerik iskeletinden sonra gelmeli; önce ne anlatılacağı, sonra nasıl görüneceği.</p>

<h2>CTA ve iletişim katmanı</h2>
<p>Teklif al, iletişime geç, demo iste… Bir sayfada bir ana eylem olsun. WhatsApp ve telefon, özellikle mobil trafikte formu tamamlar. ${a(DWP.iletisim, 'İletişim')} bilgilerinin görünür olması yerel ve kurumsal güven için kritiktir.</p>

<p>Formu şişirmeyin. Ad, telefon ve kısa ihtiyaç notu ilk temas için çoğu zaman yeterlidir. Uzun formlar sürtünme yaratır; sürtünme dönüşümü düşürür.</p>

<h2>Hız ve mobil gerçekliği</h2>
<p>Ağır slider, sıkıştırılmamış görsel ve gereksiz script’ler ilk ekranı bozar. ${a(DWP.teknik, 'Teknik SEO')} ve performans, tasarım kalitesinin görünür parçasıdır. Mobilde bozulan menü veya okunaksız metin, masaüstünde kusursuz görünen işi boşa çıkarır.</p>

<p>Sağlam bir ${a(DW, 'web tasarım')} çıktısı; net mesaj, sade hero, ölçülebilir CTA ve hızlı altyapı demektir. Hizmet detayı ve örnekler için ${a(DW, 'dijitalwebsite.com')} üzerinden ${a(DWP.web, 'web tasarım')} sayfasına bakabilirsiniz.</p>
`.trim(),
  },
  {
    id: 'dw-2',
    title: 'Web tasarım ile SEO’yu aynı brief’te birleştirmek',
    slug: 'web-tasarim-seo-ayni-brief',
    description:
      'Web tasarım seo uyumu için sayfa iskeleti, başlık düzeni ve iç linkleme nasıl kurulur? Tasarım bittikten sonra SEO yamayla uğraşmamak için pratik çerçeve.',
    author: 'ValoCross Editör',
    category: 'Dijital Pazarlama',
    tags: tags(
      'web tasarım seo',
      'web tasarım',
      'web seo',
      'e-ticaret yazılımı',
      'www.dijitalwebsite.com',
    ),
    views: 118,
    createdAt: '2026-08-06T15:00:00.000Z',
    content: `
<p>Önce tasarım, sonra SEO demek; boyası bitmiş duvara elektrik tesisatı döşemek gibidir. ${a(DW, 'web tasarım seo')} işi, wireframe aşamasında başlar: hangi sayfa hangi soruyu yanıtlayacak, H1 ne olacak, iç linkler nereye gidecek?</p>

<p>${a(DWP.web, 'Web tasarım')} ekibi görsel hiyerarşiyi kurarken ${a(DWP.seo, 'SEO hizmeti')} ekibi niyet ve kelime haritasını aynı tabloda tutmalıdır. Aksi halde güzel sayfalar indeks alır ama dönüşüm getirmez; ya da içerik güçlüdür ama kullanıcı deneyimi zayıftır.</p>

<h2>Sayfa iskeleti önce gelir</h2>
<p>Ana sayfa, hizmet sayfaları, proje/vaka, blog ve iletişim… Her birinin tek bir işi vardır. ${a(DW, 'web seo')} açısından URL’ler sade, başlıklar benzersiz, meta açıklamaları net olmalıdır. Aynı vaadi üç farklı URL’de tekrarlamak otoriteyi böler.</p>

<p>${a(DW, 'www.dijitalwebsite.com')} modelinde ${a(DWP.web, 'web tasarım')}, ${a(DWP.seo, 'SEO')} ve yazılım aynı çatı altında yürür. Bu, brief’in parçalanmasını engeller; tasarım kararı SEO’yu, SEO kararı da bileşen yapısını etkiler.</p>

<h2>Başlık, içerik ve tarama düzeni</h2>
<p>H1 tek olsun. H2’ler soru ve alt konuları taşısın. Paragraflar kısa, listeler yerinde kullanılsın. Görsellerde alt metin ve sıkıştırma unutulmasın. Bunlar “ekstra süs” değil; ${a(DW, 'web tasarım seo')} kalitesinin standart parçasıdır.</p>

<p>İç linkleme, ziyaretçiyi bir sonraki adıma taşır: blogdan hizmete, hizmetten projeye, projeden iletişime. ${a(DWP.teknik, 'Teknik SEO')} tarafında hız ve indeks engelleri temizlenmeden içerik üretmek verimsizdir.</p>

<h2>Yerel ve kurumsal sinyaller</h2>
<p>İstanbul / Kadıköy odaklı işletmeler için adres, telefon ve harita sinyalleri görünür olmalıdır. ${a(DWP.yerel, 'Yerel SEO')} ile marka aramaları güçlenir; kurumsal sitede gizlenen iletişim bilgisi hem güveni hem de yerel görünürlüğü zayıflatır.</p>

<p>${a(DW, 'web tasarım')} sürecinde footer ve iletişim bileşenlerini sona bırakmayın. Bunlar “detay” değil, güven katmanıdır.</p>

<h2>Ölçüm olmadan optimizasyon olmaz</h2>
<p>Yayın sonrası Search Console, analitik olayları ve form dönüşümleri izlenmelidir. Hangi sayfa trafik alıyor, hangisi form üretiyor? Bu veri olmadan ${a(DW, 'web seo')} çalışması tahminle yürür.</p>

<p>Tasarım ve SEO’yu aynı brief’te tutmak isteyenler için ${a(DW, 'dijitalwebsite.com')} üzerindeki ${a(DWP.seo, 'SEO hizmeti')} ve ${a(DWP.web, 'web tasarım')} sayfaları iyi bir başlangıç noktasıdır.</p>
`.trim(),
  },
  {
    id: 'dw-3',
    title: 'E-ticaret yazılımında ödeme, stok ve hız üçgeni',
    slug: 'e-ticaret-yazilimi-odeme-stok-hiz',
    description:
      'E-ticaret yazılımı seçerken ödeme altyapısı, stok senkronu ve sayfa hızı neden birlikte düşünülmeli? Mağaza kurulumunda dikkat edilecekler.',
    author: 'ValoCross Editör',
    category: 'Dijital Pazarlama',
    tags: tags(
      'e-ticaret yazılımı',
      'web tasarım',
      'web seo',
      'web tasarım seo',
      'www.dijitalwebsite.com',
    ),
    views: 105,
    createdAt: '2026-08-06T16:00:00.000Z',
    content: `
<p>Online mağaza kurmak; tema seçip ürün yüklemekten ibaret değildir. ${a(DW, 'e-ticaret yazılımı')} kararında ödeme akışı, stok doğruluğu ve sayfa hızı aynı masada olmalıdır. Bu üçünden biri aksarsa sepet terk oranı yükselir.</p>

<p>${a(DWP.eticaret, 'E-ticaret sitesi')} projesinde ürün kartı, kategori filtresi ve ödeme adımı kullanıcıya “güvenli ve hızlı” hissettirmelidir. Görsel şişkinlik, belirsiz kargo bilgisi veya kopuk stok, reklam bütçesini boşa harcatır.</p>

<h2>Ödeme ve checkout sadeleşmesi</h2>
<p>Checkout’ta gereksiz alan, zorunlu üyelik ve sürpriz maliyetler satış öldürür. Taksit, kapıda ödeme veya bilinen ödeme sağlayıcıları hedef kitleye göre seçilmelidir. Yazılımın ödeme eklentileriyle sağlam entegre olması, sonradan yama yapmaktan iyidir.</p>

<p>${a(DW, 'www.dijitalwebsite.com')} üzerinden ilerleyen ${a(DWP.eticaret, 'e-ticaret')} işlerinde tasarım, ${a(DW, 'web seo')} ve yazılım aynı sprintte planlanır. Mağaza “açıldı” demek yetmez; ölçülebilir satın alma hunisi kurulmalıdır.</p>

<h2>Stok ve operasyon</h2>
<p>Satılan ürünün stokta görünmesi, iade sürecinin net olması ve kargo entegrasyonunun çalışması operasyonel güvendir. ${a(DW, 'e-ticaret yazılımı')} seçerken yalnızca vitrin temasına bakmayın; panelin günlük kullanımını da test edin.</p>

<p>Kategori ve ürün URL yapısı ${a(DW, 'web tasarım seo')} için baştan doğru kurulmalıdır. Sonradan slug değiştirmek, yönlendirme ve indeks kaybı riski taşır.</p>

<h2>Hız = dönüşüm</h2>
<p>Mobilde yavaş açılan ürün sayfası, pahalı trafik kampanyasını çöpe atar. Görsel optimizasyonu, önbellek ve temiz kod ${a(DWP.teknik, 'teknik SEO')} kapsamındadır. ${a(DW, 'web tasarım')} ekibi “ağır efekt” isterken performans bütçesini bilmelidir.</p>

<p>Arama tarafında ürün ve kategori içerikleri boş şablon metin olmamalıdır. ${a(DW, 'web seo')} için benzersiz açıklama, doğru başlık ve iç linkler mağazanın organik trafiğini besler.</p>

<h2>Ölçek ve özel ihtiyaçlar</h2>
<p>Hazır paket yetmediğinde ${a(DWP.ozel, 'özel yazılım')} ile bayilik, toplu fiyat, B2B panel gibi ihtiyaçlar eklenir. Bu noktada e-ticaret çekirdeği ile özel modüllerin sınırını net çizmek gerekir.</p>

<p>${a(DW, 'e-ticaret yazılımı')} yatırımı yapmadan önce ödeme, stok ve hız üçgenini yazıya dökün. Uygulama örnekleri ve kurulum yaklaşımı için ${a(DW, 'dijitalwebsite.com')} ${a(DWP.eticaret, 'e-ticaret sitesi')} sayfasına göz atabilirsiniz.</p>
`.trim(),
  },
  {
    id: 'dw-4',
    title: 'Web SEO’da teknik temizlik ve içerik üretimi aynı tempoda',
    slug: 'web-seo-teknik-temizlik-icerik',
    description:
      'Web SEO çalışmalarında teknik borç birikmeden içerik nasıl büyütülür? Site hızı, indeks sağlığı ve hizmet sayfası stratejisi.',
    author: 'ValoCross Editör',
    category: 'Dijital Pazarlama',
    tags: tags(
      'web seo',
      'web tasarım seo',
      'web tasarım',
      'e-ticaret yazılımı',
      'www.dijitalwebsite.com',
    ),
    views: 97,
    createdAt: '2026-08-06T17:00:00.000Z',
    content: `
<p>${a(DW, 'web seo')} denince çoğu zaman yalnızca blog yazısı akla gelir. Oysa indeks hataları, yavaş sayfalar ve kopya başlıklar varken içerik üretmek kovaya su doldurmak gibidir. Teknik temizlik ile içerik tempoyu birlikte yürütmek gerekir.</p>

<p>${a(DWP.seo, 'SEO hizmeti')} kapsamı; tarama bütçesi, sitemap, kanonik yapı, hız ve içerik takvimini aynı plana bağlar. ${a(DW, 'web tasarım seo')} uyumu bozulduğunda yeni sayfalar yayınlansa bile hak ettiği sırayı bulamaz.</p>

<h2>Teknik taban</h2>
<p>404’ler, yönlendirme zincirleri, noindex kalıntıları ve duplicate title’lar önce temizlenir. ${a(DWP.teknik, 'Teknik SEO')} raporu olmadan “içerik artırıyoruz” demek yanıltıcıdır. Core Web Vitals ve mobil kullanılabilirlik, sıralama kadar dönüşümü de etkiler.</p>

<p>${a(DW, 'www.dijitalwebsite.com')} yaklaşımında ${a(DWP.web, 'web tasarım')} değişiklikleri SEO kontrol listesinden geçer. Yeni bileşen eklemek performans bütçesini bozmamalıdır.</p>

<h2>İçerik ve niyet</h2>
<p>Her yazı bir soruyu yanıtlamalı, her hizmet sayfası bir niyeti karşılamalıdır. ${a(DW, 'web seo')} için genel “biz iyiyiz” metinleri yetmez. Sorun–çözüm–kanıt–CTA akışı hem kullanıcıya hem arama motoruna net sinyal verir.</p>

<p>${a(DWP.yerel, 'Yerel SEO')} ihtiyaçlarında NAP tutarlılığı, Google işletme profili ve yerel içerik desteklenir. Kurumsal markalarda ise ${a(DWP.kurumsal, 'kurumsal web tasarım')} sayfaları otoriteyi toplar.</p>

<h2>E-ticaret ve yazılım sitelerinde fark</h2>
<p>Mağaza sitelerinde kategori/ürün ölçeği, hizmet sitelerinde ise brief ve portföy öne çıkar. ${a(DW, 'e-ticaret yazılımı')} kullanan yapılarda filtre URL’leri ve parametreler indeks stratejisine dahil edilmelidir. Aksi halde ince içerik patlaması yaşanır.</p>

<p>${a(DW, 'web tasarım')} ile SEO’nun ayrıştığı projelerde içerik ekibi metin yazar, tasarım ekibi düzeni bozar, teknik ekip sonradan yetişmeye çalışır. Tek tempoda ilerleyen ekipler daha az revizyon üretir.</p>

<h2>Raporlama ritmi</h2>
<p>Aylık olarak: indeks durumu, hız, öne çıkan sorgular, dönüşüm sayfaları. ${a(DW, 'web seo')} başarısı sadece sıralama ekran görüntüsü değildir; nitelikli trafik ve form/talep artışıdır.</p>

<p>Teknik temizlik ve içerik üretimini birlikte yürütmek isteyenler ${a(DW, 'dijitalwebsite.com')} üzerinden ${a(DWP.seo, 'SEO hizmeti')} ve ${a(DWP.teknik, 'teknik SEO')} sayfalarını inceleyebilir.</p>
`.trim(),
  },
]

const LYYILDIRIMLAR_POSTS: BlogPost[] = [
  {
    id: 'ly-1',
    title: 'Silivri tadilatında kapsamı baştan netleştirmek',
    slug: 'silivri-tadilat-kapsam-planlama',
    description:
      'Silivri tadilat işlerinde banyo, mutfak ve boya badana kapsamını nasıl ayırırsınız? Keşif, süre ve sürpriz maliyeti azaltan planlama notları.',
    author: 'ValoCross Editör',
    category: 'Yerel Hizmet',
    tags: tags(
      'silivri tadilat',
      'silivri tesisat',
      'silivri duşakabin',
      'www.lyyildirimlarinsaat.com',
    ),
    views: 88,
    createdAt: '2026-08-06T18:00:00.000Z',
    content: `
<p>Silivri’de tadilat talebi çoğu zaman “biraz yenileyelim” cümlesiyle başlar; sahada ise seramik, su yalıtımı ve elektrik hatları aynı anda konuşulur. ${a(LY, 'silivri tadilat')} işini sağlıklı yürütmenin yolu, kapsamı keşif gününde kalem kalem yazmaktır.</p>

<p>Komple banyo ile yalnızca boya badana aynı iş değildir. Bütçe ve süre bu ayrımda belirlenir. ${a(LYP.tadilat, 'Silivri tadilat')} sürecinde ücretsiz keşif ve yazılı teklif, sonradan çıkan “ek iş” tartışmasını azaltır.</p>

<h2>Hangi işler tadilat kapsamına girer?</h2>
<p>Mutfak–banyo yenileme, alçı, hafif yıkım, seramik, boya badana ve kapı–doğrama dokunuşları sık görülen kalemlerdir. Su kaçak şüphesi varsa iş ${a(LYP.tesisat, 'silivri tesisat')} tarafına bağlanır; duş alanı yenilenecekse ${a(LYP.dusakabin, 'silivri duşakabin')} ölçüsü aynı plana alınır.</p>

<p>Tek ekipte ilerlemek, özellikle komple banyoda avantajdır: seramik bitmeden kabin ölçüsü alınmaz, tesisat bitmeden seramik başlamaz. Bu sıra bozulursa hem süre hem maliyet şişer.</p>

<h2>Keşifte sorulması gerekenler</h2>
<p>Mevcut tesisat yaşı, ıslak hacim yalıtımı, kombi/radyatör durumu, istenen malzeme kalitesi ve teslim tarihi. Fotoğraf ve kısa video, teklifi hızlandırır ama yerinde ölçü yerini tutmaz. ${a(LY, 'www.lyyildirimlarinsaat.com')} üzerinden veya ${a(LYP.iletisim, 'iletişim')} hattından keşif randevusu almak bu yüzden kritiktir.</p>

<p>Yazılı teklifte işçilik, malzeme (kim alacak?), moloz, su kesimi ve temizlik kalemlerinin ayrı görünmesi gerekir. “Götürü” tek satır, Silivri gibi yoğun talep dönemlerinde sürpriz üretir.</p>

<h2>Süre ve yaşam alanı</h2>
<p>Oturulan evde tadilat, geçici mutfak/banyo planı ister. Islak hacim işlerinde kuruma süreleri atlanmamalıdır. Acele seramik, kısa sürede derz ve sızdırma problemi getirir.</p>

<p>${a(LY, 'silivri tadilat')} planını ${a(LYP.tesisat, 'tesisat')} ve ${a(LYP.dusakabin, 'duşakabin')} ile birlikte kurmak, tek seferde biten bir banyo yenilemesi demektir. Detaylı hizmet anlatımı için ${a(LY, 'lyyildirimlarinsaat.com')} ${a(LYP.tadilat, 'Silivri tadilat')} sayfasına bakabilirsiniz.</p>
`.trim(),
  },
  {
    id: 'ly-2',
    title: 'Silivri tesisatta kaçak ve acil müdahale düzeni',
    slug: 'silivri-tesisat-kacak-acil-mudahale',
    description:
      'Silivri tesisat kaçaklarında ilk adımlar, gereksiz kırımı azaltma ve kalıcı onarım için saha odaklı rehber.',
    author: 'ValoCross Editör',
    category: 'Yerel Hizmet',
    tags: tags(
      'silivri tesisat',
      'silivri tadilat',
      'silivri duşakabin',
      'www.lyyildirimlarinsaat.com',
    ),
    views: 76,
    createdAt: '2026-08-06T19:00:00.000Z',
    content: `
<p>Su kaçağı panik işidir; yanlış müdahale ise paniği büyütür. ${a(LY, 'silivri tesisat')} çağrılarında ilk hedef vanayı kapatmak, alanı kuru tutmak ve kaynağı doğru tespit etmektir. Rastgele kırım hem maliyeti hem de komşu daire riskini artırır.</p>

<p>${a(LYP.tesisat, 'Silivri tesisat')} hizmetinde su hattı, tıkanıklık, kombi bağlantısı ve doğalgaz hatlarına dair talepler sık gelir. Acil müdahale ile kalıcı çözüm aynı şey değildir; geçici stop’tan sonra asıl onarım planlanmalıdır.</p>

<h2>İlk 15 dakikada ne yapılır?</h2>
<p>Ana vanayı kapatın, elektrik riski varsa ilgili sigortayı düşünün, biriken suyu boşaltın. Fotoğraf çekmek, ekibe durumu anlatmayı kolaylaştırır. ${a(LYP.iletisim, 'İletişim')} hattından konum ve kat bilgisi net verilmelidir.</p>

<p>Tespit cihazı ve deneyim, gereksiz duvar kırımını azaltır. Kaçak seramik altındaysa veya kolon hattındaysa kapsam değişir; bu noktada iş bazen ${a(LYP.tadilat, 'silivri tadilat')} ile birleşir.</p>

<h2>Kalıcı onarımın şartları</h2>
<p>Doğru fitting, uygun boru tipi, basınç testi ve sızdırmazlık kontrolü. “Bantla idare” çözümler kısa süre sonra yeniden çağrı üretir. Özellikle banyo ve mutfakta yalıtım bozulmuşsa yalnızca boru değiştirmek yetmez.</p>

<p>Duşakabin çevresindeki sızıntılar bazen tesisat değil, montaj veya silikon kaynaklıdır. Bu ayrımı yapmak için ${a(LYP.dusakabin, 'silivri duşakabin')} montaj detayı da kontrol edilir.</p>

<h2>Isıtma ve kombi hattı</h2>
<p>Radyatör kaçakları, kombi bağlantısı ve basınç düşümü kışın daha kritiktir. Periyodik kontrol, acil çağrı sayısını düşürür. ${a(LY, 'www.lyyildirimlarinsaat.com')} ekibi Silivri merkez ve çevresinde saha desteği verir.</p>

<p>${a(LY, 'silivri tesisat')} işinde hızlı müdahale + kalıcı onarım ikilisi aranmalıdır. Kapsam ve acil destek için ${a(LY, 'lyyildirimlarinsaat.com')} ${a(LYP.tesisat, 'Silivri tesisat')} sayfasını inceleyebilirsiniz.</p>
`.trim(),
  },
  {
    id: 'ly-3',
    title: 'Silivri duşakabin ölçüsü ve montajda sızdırmazlık',
    slug: 'silivri-dusakabin-olcu-montaj',
    description:
      'Silivri duşakabin seçiminde ölçü, cam kalınlığı, profil ve montaj sırası. Sızdırmazlık ve uzun ömür için dikkat edilecekler.',
    author: 'ValoCross Editör',
    category: 'Yerel Hizmet',
    tags: tags(
      'silivri duşakabin',
      'silivri tadilat',
      'silivri tesisat',
      'www.lyyildirimlarinsaat.com',
    ),
    views: 71,
    createdAt: '2026-08-06T20:00:00.000Z',
    content: `
<p>Duşakabin “cam takmak” gibi görünür; aslında ölçü, duvar dikliği, gider kotu ve mentşe kalitesi bir arada çalışır. ${a(LY, 'silivri duşakabin')} alımında hazır ürünle özel ölçü arasındaki fark, montaj günü ortaya çıkar.</p>

<p>${a(LYP.dusakabin, 'Silivri duşakabin')} sürecinde doğru ölçü, cam kalınlığı ve profil seçimi sızdırmazlığın temelidir. Eğri duvar veya yanlış gider konumu, en pahalı camı bile sorunlu hale getirir.</p>

<h2>Ölçü ne zaman alınır?</h2>
<p>Seramik ve tesisat bitmeden nihai ölçü almak risklidir. Komple yenilemede önce ${a(LYP.tesisat, 'silivri tesisat')} ve ${a(LYP.tadilat, 'silivri tadilat')} kalemleri oturur; kabin ölçüsü buna göre kesinleşir. Tek elden koordinasyon, “cam geldi duvar bitmedi” senaryosunu engeller.</p>

<p>${a(LY, 'www.lyyildirimlarinsaat.com')} üzerinden keşif talep ederek yerinde ölçü aldırmak, online standart ölçüye göre daha güvenlidir.</p>

<h2>Cam, profil ve aksesuar</h2>
<p>Cam kalınlığı kullanım yoğunluğuna göre seçilir. Profil kalitesi ve menteşe/bearing ömrü, ucuz üründe erken arıza noktasıdır. Şeffaf, fumé veya buzlu cam tercihi mekanın ışığına göre yapılır; asıl kritik olan sızdırmazlık detayıdır.</p>

<p>Silikon kalitesi ve doğru derz boşluğu, suyun dışarı taşmasını engeller. Montaj sonrası su testi yapılmadan iş teslim sayılmamalıdır.</p>

<h2>Bakım ve uzun ömür</h2>
<p>Kireçli su bölgelerinde düzenli temizlik, ray ve conta ömrünü uzatır. Sert aşındırıcılar cam yüzeyini matlaştırır. Küçük bir conta değişimi, erken kabin yenilemesinden ucuzdur.</p>

<p>${a(LY, 'silivri duşakabin')} işini tadilat ve tesisattan kopuk düşünmeyin. Ölçü, montaj ve garanti için ${a(LY, 'lyyildirimlarinsaat.com')} ${a(LYP.dusakabin, 'Silivri duşakabin')} sayfası ve ${a(LYP.iletisim, 'iletişim')} kanalları kullanılabilir.</p>
`.trim(),
  },
]

export const LOCAL_BLOG_POSTS: BlogPost[] = [
  ...COCUKMONT_POSTS,
  ...DIJITALWEBSITE_POSTS,
  ...LYYILDIRIMLAR_POSTS,
]

export function listLocalBlogPosts(limit = 50, featured = false): BlogPost[] {
  const rows = [...LOCAL_BLOG_POSTS].sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt),
  )
  const sliced = rows.slice(0, limit)
  if (!featured) return sliced
  return sliced.slice(0, Math.min(3, sliced.length))
}

export function getLocalBlogPost(slug: string): BlogPost | null {
  return LOCAL_BLOG_POSTS.find((p) => p.slug === slug) ?? null
}

export function listLocalBlogSummaries(limit = 50, featured = false) {
  return listLocalBlogPosts(limit, featured).map(
    ({ content: _content, ...rest }) => rest,
  )
}

import type { Metadata } from 'next'

export const SITE_URL = 'https://www.valocross.com'
export const SITE_NAME = 'ValoCross'

/** layout title.template: "%s | ValoCross" */
export function seoPage(
  title: string,
  description: string,
  canonical?: string,
): Metadata {
  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      locale: 'tr_TR',
      type: 'website',
      url: canonical ? `${SITE_URL}${canonical}` : SITE_URL,
      siteName: SITE_NAME,
    },
  }
}

export const SEO = {
  home: {
    title: 'Valorant Crosshair Kodları - Nişangah Ayarları ve Hazır Profiller',
    description:
      'Valorant nişangah kodları, crosshair ayarları ve hazır profiller. Pro oyuncu nişangahları, nişangah galerisi, blog rehberleri ve Dijital Crosshair Windows uygulaması. ValoCross.',
    keywords: [
      'valorant crosshair kodları',
      'valorant nişangah',
      'nişangah kodu',
      'crosshair ayarları',
      'pro oyuncu crosshair',
      'valocross',
      'dijital crosshair',
    ],
  },
  crosshairs: {
    title: 'Valorant Nişangah Kodları - Hazır Profil Listesi',
    description:
      'Valorant nişangah kodlarını incele, kopyala ve oyuna aktar. Onlarca hazır nişangah profili, görsel önizleme ve paylaşım kodu. ValoCross nişangah galerisi.',
    keywords: [
      'valorant nişangah kodları',
      'nişangah kodu kopyala',
      'hazır valorant nişangah',
      'nişangah galerisi',
      'valorant crosshair kodu',
    ],
  },
  blog: {
    title: 'Valorant Nişangah Blogu - Rehberler ve İpuçları',
    description:
      'Valorant crosshair rehberleri, aim geliştirme yazıları, pro oyuncu nişangah ayarları ve nişangah kullanım kılavuzları. ValoCross blog.',
    keywords: [
      'valorant blog',
      'crosshair rehberi',
      'nişangah rehberi',
      'aim geliştirme',
      'valocross blog',
    ],
  },
  download: {
    title: 'Dijital Crosshair İndir - Windows Nişangah Uygulaması',
    description:
      'Dijital Crosshair Windows uygulamasını ücretsiz indir. Valorant ve CS2 için nişangah overlay, hazır profiller ve canlı özelleştirme. Windows 10/11.',
    keywords: [
      'dijital crosshair indir',
      'valorant nişangah uygulaması',
      'windows crosshair overlay',
      'valocross indir',
    ],
  },
  agents: {
    title: 'Valorant Ajanları - Yetenekler, Rol ve Rehber',
    description:
      'Valorant ajanlarını keşfet. Yetenekler, biyografi, oyun stili ve taktik bilgileri. Takımına en uygun ajanı seç.',
    keywords: [
      'valorant ajanları',
      'valorant agent',
      'ajan yetenekleri',
      'valorant karakter rehberi',
    ],
  },
  weapons: {
    title: 'Valorant Silahları - Hasar, Skin ve Silah Rehberi',
    description:
      'Valorant silahlarını incele. Hasar değerleri, skinler, ateş modları ve silah karşılaştırmaları. ValoCross silah rehberi.',
    keywords: [
      'valorant silahları',
      'valorant silah hasarı',
      'valorant skin',
      'silah rehberi',
    ],
  },
  maps: {
    title: 'Valorant Haritaları - Harita Rehberi ve Bilgiler',
    description:
      'Valorant haritalarını incele. Bind, Haven, Ascent ve tüm aktif haritalar hakkında görsel rehber ve temel bilgiler.',
    keywords: [
      'valorant haritaları',
      'valorant map',
      'harita rehberi',
      'bind haven ascent',
    ],
  },
  notFound: {
    title: 'Sayfa Bulunamadı - 404',
    description:
      'Aradığınız ValoCross sayfası bulunamadı. Ana sayfaya dönerek nişangah kodlarına ve blog yazılarına ulaşabilirsiniz.',
  },
} as const

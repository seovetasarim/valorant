'use client'

import { useEffect, useState } from 'react'

const STATS_URL = 'https://indir.valocross.com/stats.php'

function formatCount(n: number) {
  return new Intl.NumberFormat('tr-TR').format(n)
}

export default function DownloadCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        const res = await fetch(STATS_URL, { cache: 'no-store' })
        if (!res.ok) return
        const data = (await res.json()) as { downloads?: number }
        if (alive && typeof data.downloads === 'number') {
          setCount(data.downloads)
        }
      } catch {
        /* stats henüz yoksa sessiz geç */
      }
    }
    load()
    const id = window.setInterval(load, 20000)
    return () => {
      alive = false
      window.clearInterval(id)
    }
  }, [])

  if (count === null) {
    return (
      <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-primary-800">
        İndirme sayacı yükleniyor…
      </p>
    )
  }

  return (
    <p
      className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-primary-800"
      aria-live="polite"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
        Toplam indirme
      </span>
      <span className="text-lg font-bold tabular-nums text-white md:text-xl">
        {formatCount(count)}
      </span>
      <span className="text-[10px] uppercase tracking-[0.12em]">kişi</span>
    </p>
  )
}

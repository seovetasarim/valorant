'use client'

import { useEffect, useState } from 'react'

function formatCount(n: number) {
  return new Intl.NumberFormat('tr-TR').format(n)
}

export default function DownloadCount() {
  const [count, setCount] = useState<number | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        const res = await fetch('/api/downloads')
        if (!res.ok) return
        const data = (await res.json()) as { downloads?: number | null }
        if (alive && typeof data.downloads === 'number') {
          setCount(data.downloads)
        }
      } catch {
        /* GitHub sayacı yoksa gösterme */
      } finally {
        if (alive) setReady(true)
      }
    }
    load()
    const id = window.setInterval(load, 60000)
    return () => {
      alive = false
      window.clearInterval(id)
    }
  }, [])

  if (!ready || count === null) {
    return null
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

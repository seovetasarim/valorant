'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CrosshairPreset } from '@/types/crosshair'
import CrosshairPreview from './CrosshairPreview'
import { copyToClipboard } from '@/lib/clipboard'
import { AiOutlineCheck, AiOutlineCopy } from 'react-icons/ai'

interface CrosshairCardProps {
  preset: CrosshairPreset
}

const CrosshairCard = ({ preset }: CrosshairCardProps) => {
  const [copied, setCopied] = useState(false)
  const [imageError, setImageError] = useState(false)

  const backgroundImageUrl = '/bg-card.png'
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const showImage =
    !!preset.imageUrl && preset.imageUrl.startsWith('/') && !imageError

  const tierLabel =
    preset.category === 'pro'
      ? 'Pro'
      : preset.category === 'community'
        ? 'Topluluk'
        : 'Klasik'

  const handleCopy = async (e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    if (await copyToClipboard(preset.code)) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section
      onClick={handleCopy}
      className="bg-gradient-card animate__fadeIn animate__animated relative mx-2 my-6 flex h-52 w-36 cursor-pointer flex-col border-2 border-primary-700 bg-opacity-50 p-[2px] transition-all hover:border-white md:h-56 md:w-40"
    >
      <div style={sectionStyle} className="absolute inset-0 opacity-20" />

      <section className="relative z-10 flex h-full w-full flex-col border-2 border-primary-900">
        <div className="flex items-center justify-between px-1.5 pt-1.5">
          <span className="text-[9px] font-semibold uppercase text-white/70">
            {tierLabel}
          </span>
          <span className="text-[9px] tabular-nums text-white/50">
            {preset.likes.toLocaleString('tr-TR')}
          </span>
        </div>

        <figure className="relative flex flex-1 items-center justify-center">
          {showImage ? (
            <Image
              src={preset.imageUrl!}
              alt={preset.name}
              width={100}
              height={100}
              className="h-16 w-16 object-contain md:h-[4.5rem] md:w-[4.5rem]"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <CrosshairPreview
              settings={preset.settings}
              size={72}
              showBackground={false}
            />
          )}
          {copied && (
            <span className="absolute bottom-0 flex items-center gap-0.5 bg-primary-700 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-white">
              <AiOutlineCheck className="h-2.5 w-2.5" />
              Tamam
            </span>
          )}
        </figure>

        <article className="flex w-full flex-col items-center gap-1 px-1.5 pb-1.5">
          <h1 className="w-full truncate text-center text-xs font-semibold uppercase text-white drop-shadow-lg md:text-sm">
            {preset.name}
          </h1>
          <p
            className="w-full truncate text-center font-mono text-[7px] text-white/40"
            title={preset.code}
          >
            {preset.code}
          </p>
          <button
            type="button"
            onClick={handleCopy}
            className="flex w-full items-center justify-center gap-1 border border-white/30 bg-primary-700 py-1.5 text-[9px] font-bold uppercase text-white transition-all hover:border-white"
          >
            {copied ? (
              <>
                <AiOutlineCheck className="h-3 w-3" />
                Panoda
              </>
            ) : (
              <>
                <AiOutlineCopy className="h-3 w-3" />
                Kopyala
              </>
            )}
          </button>
        </article>
      </section>
    </section>
  )
}

export default CrosshairCard

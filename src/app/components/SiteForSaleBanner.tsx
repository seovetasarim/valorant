const SALE_PHONE_DISPLAY = '0532 166 76 97'
const SALE_PHONE_TEL = '+905321667697'

export default function SiteForSaleBanner() {
  return (
    <div className="relative z-[60] w-full border-b border-primary-700/40 bg-primary-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-3 py-1.5 text-center sm:justify-between sm:px-4 sm:text-left md:px-6">
        <p className="text-[11px] font-semibold leading-snug tracking-wide sm:text-[12px]">
          <span className="mr-1.5 inline-block rounded bg-primary-700 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:text-[11px]">
            Satılık
          </span>
          <span className="font-bold text-primary-700">valocross.com</span>
          <span className="text-white/85 font-medium">
            {' '}
            — Domain ve hazır Valorant nişangah sitesi satılıktır
          </span>
        </p>
        <a
          href={`tel:${SALE_PHONE_TEL}`}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary-700 underline-offset-2 transition hover:underline sm:text-[12px]"
        >
          Teklif için: {SALE_PHONE_DISPLAY}
        </a>
      </div>
    </div>
  )
}

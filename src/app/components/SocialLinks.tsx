import Link from 'next/link'

const SocialLinks = () => {
  return (
    <section className="flex items-center justify-center gap-5 md:hidden">
      <Link
        className="mx-1 flex items-center justify-center text-xs font-semibold text-primary-800 transition-all ease-in hover:text-white"
        href={'https://www.dijitalwebsite.com'}
        target="_blank"
        rel="noopener noreferrer"
      >
        dijitalwebsite
      </Link>
    </section>
  )
}
export default SocialLinks

import { ViewContentProps } from '@/@types'

const ViewContent = ({ children, className }: ViewContentProps) => {
  return (
    <section
      className={`mb-20 flex h-full w-full items-start justify-center md:m-0 ${
        className ?? 'overflow-auto'
      }`}
    >
      {children}
    </section>
  )
}

export default ViewContent

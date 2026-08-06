import { ViewContainerProps } from '@/@types'

const ViewContainer = ({ children }: ViewContainerProps) => {
  return (
    <section className="flex h-full w-full flex-col items-end justify-center p-2 pb-14 md:h-[82%] md:items-start md:pb-0">
      {children}
    </section>
  )
}

export default ViewContainer

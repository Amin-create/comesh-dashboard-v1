import React, { ReactNode } from 'react'
import { containerMaxW } from '../../config'

type Props = {
  children: ReactNode
}

export default function SectionMain({ children }: Props) {
  return <section className={`main-body px-6 py-6 lg:px-10 lg:py-6 xl:px-6 xl:py-6 ${containerMaxW}`}>{children}</section>
}

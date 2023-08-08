import { cn } from '@/utils'
import { ReactNode } from 'react'

export default function CustomFrag({ children, className }: propTypes) {
  return (
    <main className={cn(`mx-auto max-w-5xl w-full`, className)}>
      {children}
    </main>
  )
}

type propTypes = {
  children: ReactNode
  className?: string
}

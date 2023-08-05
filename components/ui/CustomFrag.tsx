import { ReactNode } from 'react'

export default function CustomFrag({ children }: propTypes) {
  return <main className={`mx-auto max-w-5xl w-full`}>{children}</main>
}

type propTypes = {
  children: ReactNode
}

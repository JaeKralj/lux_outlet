'use client'
import { cn } from '@/utils'
import { useSearchParams } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'

function WrappedTab({
  children,
  variant,
  active,
}: {
  children: ReactNode
  variant: 'capsule' | 'squircle'
  active: boolean
}) {
  const [state, setState] = useState(false)
  const styles = getTabStyle(variant, state)
  useEffect(() => {
    active ? setState(true) : setState(false)
  }, [active])
  return (
    <Tab
      className={cn('cursor-pointer', styles)}
      selectedClassName={cn('cursor-pointer', styles)}
    >
      {children}
    </Tab>
  )
}

export default function CustomTabs({ tabs, variant, group }: propTypes) {
  const searchParams = useSearchParams()
  const query = searchParams.get(group)
  const activeTabIndex = query
    ? tabs.findIndex(({ slug }) => slug === query)
    : 0
  return (
    <Tabs defaultIndex={activeTabIndex}>
      <TabList className='flex items-center gap-3'>
        {tabs.map(({ content }, i) => (
          <WrappedTab variant={variant} active={activeTabIndex === i} key={i}>
            {content}
          </WrappedTab>
        ))}
      </TabList>
    </Tabs>
  )
}

const getTabStyle = (variant: 'squircle' | 'capsule', state: boolean) => {
  let styles: string
  switch (variant) {
    case 'capsule':
      styles =
        'px-3 py-1 text-xs md:text-base rounded-[1.875rem] flex justify-center items-center'
      return cn(
        styles,
        state ? 'bg-background-300 text-white' : 'bg-white text-primary-400'
      )
      break
    case 'squircle':
      styles =
        'h-14 aspect-square p-2 rounded-md justify-center items-center flex border'
      return cn(styles, state ? 'border-background-300' : 'border-primary-300')
    default:
      break
  }
}

interface propTypes {
  tabs: { title: string; content: ReactNode; slug: string }[]
  variant: 'capsule' | 'squircle'
  group: string
}

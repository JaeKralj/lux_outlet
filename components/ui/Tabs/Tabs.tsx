'use client'
import { cn } from '@/utils'
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
  }, [])
  return (
    <Tab
      className={cn('cursor-pointer', styles)}
      selectedClassName={cn('cursor-pointer', styles)}
    >
      {children}
    </Tab>
  )
}

export default function CustomTabs({ tabs, variant }: propTypes) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <Tabs
      selectedIndex={activeTabIndex}
      onSelect={index => setActiveTabIndex(index)}
    >
      <TabList>
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
        'h-12 aspect-square rounded-md justify-center items-center flex border p-2'
      return cn(styles, state ? 'border-background-300' : 'border-primary-300')
    default:
      break
  }
}

interface propTypes {
  tabs: { title: string; content: ReactNode }[]
  variant: 'capsule' | 'squircle'
}

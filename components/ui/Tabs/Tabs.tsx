'use client'
import { cn } from '@/utils'
import { useSearchParams } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'

export default function CustomTabs({
  tabs,
  variant,
  group,
  handleSelect,
}: propTypes) {
  const searchParams = useSearchParams()
  const query = searchParams.get(group)
  const [activeTabIndex, setActiveTabIndex] = useState(
    query ? tabs.findIndex(({ slug }) => slug === query) : 0
  )

  /**
   * todo: Return the active tab to parent with a setstate function prop
   */
  return (
    <Tabs
      onSelect={i => {
        handleSelect && handleSelect(tabs[i])
        return setActiveTabIndex(i)
      }}
      selectedIndex={activeTabIndex}
    >
      <TabList className='flex items-center gap-3'>
        {tabs.map(({ content }, i) => (
          <Tab
            className={cn('cursor-pointer', getTabStyle(variant, false))}
            selectedClassName={cn(
              'cursor-pointer',
              getTabStyle(variant, activeTabIndex === i)
            )}
          >
            {content}
          </Tab>
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
        'px-3 py-1 text-xs md:text-base rounded-[1.875rem] flex justify-center items-center border-none outline-none'
      return cn(
        styles,
        state ? '!bg-background-300 text-white' : 'bg-white text-primary-400'
      )
      break
    case 'squircle':
      styles =
        'h-14 aspect-square p-2 rounded-md justify-center items-center flex border'
      return cn(styles, state ? '!border-background-300' : 'border-primary-300')
    default:
      break
  }
}

interface propTypes {
  tabs: { title: string; content: ReactNode; slug: string }[]
  variant: 'capsule' | 'squircle'
  group: string
  handleSelect?: (tab: any) => void
}

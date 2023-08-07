export default function Tabs({ children, title, state }: propTypes) {
  return (
    <button
      type='button'
      title={title}
      className={`px-3 py-1 text-xs md:text-base rounded-[1.875rem] cursor-pointer ${
        state === 'active'
          ? 'bg-background-300 text-white'
          : 'bg-white text-primary-400'
      }`}
    >
      {children}
    </button>
  )
}

type propTypes = {
  children: React.ReactNode
  title: string
  state: 'active' | 'inactive'
}

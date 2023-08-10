import Header from '@/components/Headers/Header'
import HomeHeader from '@/components/Headers/HomeHeader'
import Saved from './saved'

export default function Page({}: propTypes) {
  return (
    <>
      <Header>
        <HomeHeader />
      </Header>
      <Saved />
    </>
  )
}

type propTypes = {}

import React from 'react'

import Header from '../../components/webtoon/header'
import RecentlyWebtoons from '../../components/webtoon/home/recently-webtoons'
import Genre from '../../contents/genre'
import Menu from '../../contents/menu'

function HomePage() {
  return (
    <div>
      <div>
        <Header tab="home" />
        <RecentlyWebtoons />
        <Menu />
        <Genre />
      </div>
    </div>
  )
}

export default HomePage

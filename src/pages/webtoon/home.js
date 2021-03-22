import React from 'react'
import Header from '../../components/webtoon/header'
import RecentlyWebtoons from '../../components/webtoon/home/recently-webtoons'

function HomePage() {
  return (
    <div>
      <div>
        <Header tab="home" />
        <RecentlyWebtoons />
      </div>
    </div>
  )
}

export default HomePage

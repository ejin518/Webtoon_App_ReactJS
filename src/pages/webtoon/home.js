import React from 'react'
import Header from '../../components/webtoon/header'
import RecentlyWebtoons from '../../components/webtoon/home/recently-webtoons'
import BestWebtoon from '../../components/webtoon/new-webtoon/today-webtoon'
import Visual from '../../components/webtoon/visual/visual'
import styled from 'styled-components'
import NewWebtoon from '../../components/webtoon/new-webtoon/new-webtoons'
import Popular from '../../components/webtoon/popular/popular-webtoon'
import Footer from '../../components/webtoon/footer'

const Wrap = styled.div`
  width: 100%;
`

function HomePage() {
  return (
    <Wrap>
      <Header tab="home" />
      <Visual />
      <BestWebtoon />
      <RecentlyWebtoons />
      <NewWebtoon />
      <Popular />
      <Footer />
    </Wrap>
  )
}

export default HomePage

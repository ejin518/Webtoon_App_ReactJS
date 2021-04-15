import React from 'react'
import Header from '../../components/webtoon/header'
import NewWebtoon from '../../components/webtoon/weekday/new-webtoon'
import styled from 'styled-components'
import Footer from '../../components/webtoon/footer'

const Wrap = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`
function WeekdayPage() {
  return (
    <Wrap>
      <Header tab="weekday" />
      <NewWebtoon />
      <Footer />
    </Wrap>
  )
}

export default WeekdayPage

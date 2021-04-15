import React from 'react'
import Header from '../../components/webtoon/header'
import Finish from '../../components/webtoon/finished-webtoon/finished-webtoon'
import Footer from '../../components/webtoon/footer'
import styled from 'styled-components'

const Wrap = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

function FinishPage() {
  return (
    <Wrap>
      <Header tab="finish" />
      <Finish />
      <Footer />
    </Wrap>
  )
}

export default FinishPage

import React from 'react'
import Header from '../../components/webtoon-maker/index'
import Upload from '../../components/webtoon/header'
import Footer from '../../components/webtoon/footer'
import styled from 'styled-components'

const Wrap = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`
function GenrePage() {
  return (
    <Wrap>
      <Header tab="genre" />
      <Upload />
      <Footer />
    </Wrap>
  )
}

export default GenrePage

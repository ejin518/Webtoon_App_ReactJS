import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../constants'

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  margin-top: 10px;
  padding: 0 5px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

const Container = styled(Link)`
  display: block;
  position: relative;
  line-height: 0;
`

const Image = styled.img`
  width: 100%;
  border-radius: 2px;
`

const Info = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
  padding: 10px 5px;
  border-top: 5px solid #00dc64;
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  height: 1.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  word-break: keep-all;
`

const Author = styled.p`
  font-size: 12px;
  font-weight: bold;
  height: 1.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  word-break: keep-all;
`
const Fav = styled.span`
  display: block;
  text-align: right;
  font-size: 12px;
  font-weight: bold;
  color: #00dc64;
  margin-top: 10px;
  line-height: 1.5;
  @media (max-width: 786px) {
    display: none;
  }
`

function Webtoon({ webtoon }) {
  const { id, imageUrl, title, author, favcount } = webtoon

  return (
    <Wrapper>
      <Container to={`${ROUTES.WEBTOON.HOME}/${id}`}>
        <Image src={imageUrl} />
        <Info>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Fav>{favcount}</Fav>
        </Info>
      </Container>
    </Wrapper>
  )
}

export default Webtoon

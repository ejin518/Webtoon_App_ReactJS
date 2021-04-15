import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../constants'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const Container = styled(Link)``

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
`

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  box-sizing: border-box;
  display: block;
  width: 100%;
`

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  color: #fff;
`
const Author = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`

function Webtoon({ webtoon }) {
  const { id, imageUrl, title, author, description } = webtoon

  return (
    <Wrapper>
      <Container to={`${ROUTES.WEBTOON.HOME}/${id}`}>
        <Image src={imageUrl} />
        <Info>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </Info>
      </Container>
    </Wrapper>
  )
}

export default Webtoon

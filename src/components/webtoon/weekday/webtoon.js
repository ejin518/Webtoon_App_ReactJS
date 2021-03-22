import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../constants'

const Wrapper = styled.div`
  height: 111px;
  padding: 0px 16px;
  overflow: hidden;
  box-sizing: border-box;
  display: inline-block;
  width: 85%;
`

const Container = styled(Link)`
  position: relative;
`

const Image = styled.img`
  position: absolute;
  overflow: hidden;
  width: 111px;
  height: 111px;
  border-radius: 2px;
`

const Info = styled.div`
  overflow: hidden;
  display: block;
  height: 111px;
  padding: 11px 23px 0 129px;
  box-sizing: border-box;
`

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 16px;
  line-height: 20px;
`
const Author = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 16px;
  line-height: 20px;
`

function Webtoon({ webtoon }) {
  const { id, imageUrl, title, author } = webtoon

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
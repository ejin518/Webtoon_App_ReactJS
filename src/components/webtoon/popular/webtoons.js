import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../constants'
const Wrapper = styled.li`
  float: left;
  width: calc(100% / 4);
  padding: 5px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 50%;
  }
`
const Container = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #eaeaea;
  line-height: 0;
`

const Image = styled.img`
  width: 100%;
`
const Discript = styled.div`
  padding: 10px 20px;
  height: 100px;
  border-top: 5px solid #00dc64;
`

const Title = styled.h2`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  line-height: 1.5;
`
const Info = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5;
`
const Fav = styled.span`
  display: block;
  margin-top: 20px;
  font-size: 16px;
  color: #00dc64;
  font-weight: bold;
`

function Webtoon({ webtoon }) {
  const {
    id,
    title,
    author,
    description,
    favcount,
    isUpdate,
    imageUrl,
  } = webtoon

  return (
    <Wrapper>
      <Container to={`${ROUTES.WEBTOON.HOME}/${id}`}>
        <Image src={imageUrl} />
        <Discript>
          <Title>{title}</Title>
          <Info>{author}</Info>
          <Fav>{favcount}</Fav>
        </Discript>
      </Container>
    </Wrapper>
  )
}

export default Webtoon

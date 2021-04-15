import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../constants'

const Wrapper = styled.li`
  float: left;
  width: calc(100% / 4);
  height: 250px;
  padding: 0px 10px;
  overflow: hidden;
  box-sizing: border-box;
  display: inline-block;

  @media (max-width: 1110px) {
    height: 22.52vw;
  }
  @media (max-width: 768px) {
    width: calc(100% / 2);
    margin-bottom: 10px;
    height: 32.55vw;
  }
`
const Container = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`

const ImgWrap = styled.span`
  display: block;
  width: 100%;
  height: calc(100% - 3px);
  position: relative;
  border: 1px solid #eaeaea;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }
`
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Discript = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 10;
`
const Title = styled.h2`
  font-size: 20px;
  color: #fff;
`
const Author = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  margin-top: 5px;
`

function Webtoon({ webtoon }) {
  const { id, title, author, description, favcount, imageUrl } = webtoon

  return (
    <Wrapper>
      <Container to={`${ROUTES.WEBTOON.HOME}/${id}`}>
        <ImgWrap>
          <Image src={imageUrl} />
        </ImgWrap>
        <Discript>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </Discript>
      </Container>
    </Wrapper>
  )
}

export default Webtoon

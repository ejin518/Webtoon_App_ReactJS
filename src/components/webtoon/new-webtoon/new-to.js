import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../constants'
const Wrapper = styled.li`
  float: left;
  width: calc(100% / 3);
  padding: 5px;
  box-sizing: border-box;
  height: 300px;
  @media (max-width: 550px) {
    width: 100%;
  }
`
const Container = styled(Link)`
  position: relative;
  display: block;
  height: 100%;
  background: #f4f4f4;
  border: 1px solid #eaeaea;
  &:hover {
    background: rgb(235, 206, 25);
  }
`

const Discript = styled.div`
  position: absolute;
  top: 20px;
  left: 15px;
  width: 80%;
`
const Title = styled.h2`
  font-size: 20px;
  color: #000;
`
const Author = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  color: #000;
`
const Info = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 13px;
  height: 4.2em;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  word-break: keep-all;
  @media (max-width: 768px) {
    margin-top: 10px;
    -webkit-line-clamp: 2;
    height: 2.8em;
  }
`

const Bg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`
const View = styled.span`
  position: absolute;
  bottom: 20px;
  left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #7519eb;
`

function Webtoon({ webtoon }) {
  const { id, title, author, description, bg } = webtoon

  return (
    <Wrapper>
      <Container to={`${ROUTES.WEBTOON.HOME}/${id}`}>
        <Discript>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Info>{description}</Info>
        </Discript>
        <Bg src={bg}></Bg>
        <View>VIEW</View>
      </Container>
    </Wrapper>
  )
}

export default Webtoon

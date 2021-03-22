import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.li`
  float: left;
  width: calc(100% / 3);
  padding: 5px;
  box-sizing: border-box;
`
const ImgWrap = styled.span`
  display: block;
  width: 100%;
`

const Image = styled.img`
  margin-top: 15px;
  width: 100%;
  border-radius: 3px;
`
const Discript = styled.div`
  padding: 10px 0;
  height: 100px;
`

const Title = styled.h2`
  font-size: 23px;
  color: #000;
`
const Info = styled.p`
  font-size: 20px;
  color: #555;
  margin-top: 5px;
`
const Update = styled.em`
  display: none;
  ${({ on }) =>
    on &&
    `
display:inline-block;
background-color: #00d564;
font-size:16px;
font-weight:bold;
color:#fff;
border-radius:20px;
padding: 3px 10px;
margin-top:5px;
`}
`

function Webtoon({ webtoon }) {
  const { title, author, description, favcount, isUpdate, imageUrl } = webtoon

  return (
    <Wrapper>
      <a href="##">
        <ImgWrap>
          <Image src={imageUrl} />
        </ImgWrap>
        <Discript>
          <Title>{title}</Title>
          <Info>{author}</Info>
          <Info>{favcount}</Info>
          <Update on={isUpdate === true}>UP</Update>
        </Discript>
      </a>
    </Wrapper>
  )
}

export default Webtoon

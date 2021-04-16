import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  border: 1px solid #ebebeb;
  background-color: #f9f9fc;
  display: inline-block;
  margin: 50px 10px;
`
const Image = styled.img`
  margin-top: 15px;
  width: 100%;
`
const Tit01 = styled.h3`
  color: #000;
  margin: 0;
`
const SpanG = styled.span`
  color: #19ce60;
`
const DescriptDiv = styled.div`
  margin: 20px 0;
`
const H4 = styled.h4`
  color: #000;
  margin: 0;
`
const EM = styled.em`
  color: #414141;
  font-size: 12px;
  font-weight: bold;
  float: right;
  font-style: normal;
`
const P = styled.p`
  color: #414141;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
`
function Webtoon({ webtoon }) {
  const { title, author, imageUrl, description } = webtoon
  return (
    <Container>
      <Tit01>
        New <SpanG>Webtoon</SpanG>
      </Tit01>
      <Image src={imageUrl} />
      <DescriptDiv>
        <H4>
          {title}
          <EM>{author}</EM>
        </H4>
        <P>{description}</P>
      </DescriptDiv>
    </Container>
  )
}

export default Webtoon

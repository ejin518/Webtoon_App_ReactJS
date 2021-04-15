import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-right: 5px;
  overflow: hidden;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
`

const Image = styled.img`
  width: 78px;
  height: 55px;
  border-radius: 2px;
`

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 74px;
  padding-top: 6px;
  font-size: 12px;
  letter-spacing: -0.3px;
`

function Webtoon({ webtoon, onClick }) {
  const { imageUrl, title } = webtoon

  return (
    <Container onClick={() => onClick(webtoon)}>
      <Image src={imageUrl} />
      <Title>{title}</Title>
    </Container>
  )
}

export default Webtoon

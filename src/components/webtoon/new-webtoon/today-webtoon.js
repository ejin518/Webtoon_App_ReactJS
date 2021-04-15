import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Webtoon from './webtoon'

const Wrapper = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
`

const ScrollContainer = styled.div`
  float: left;
  width: 80%;
  height: 400px;
  @media (max-width: 1110px) {
    height: 41.6vw;
  }
`
const Wrap = styled.div`
  overflow: hidden;
  width: 100%;
  border: 1px solid #eaeaea;
`
const WrapTitle = styled.div`
  float: left;
  width: 20%;
  height: 400px;
  @media (max-width: 1110px) {
    height: 41.6vw;
  }
`
const Title = styled.h2`
  font-size: 25px;
  color: #000;
  line-height: 1.3;
  font-weight: bold;
  padding-left: 20px;
  padding-top: 20px;
  @media (max-width: 1110px) {
    font-size: 2.6vw;
    padding-left: 2.08vw;
    padding-top: 2.08vw;
  }
`
const Color = styled.span`
  color: #00d564;
  font-weight: bold;
`

function NewWebtoon() {
  const [webtoons, setWebtoons] = useState([])

  useEffect(() => {
    // 1. new data 를 가져온다.
    // 2. 가져온 데이터를 state 로 set 한다.
    const fetchNewWebtoons = async () => {
      const response = await fetch('http://localhost:3000/best') // 10초
      const data = await response.json()

      setWebtoons(data)
    }

    fetchNewWebtoons()
  }, [])

  return (
    <Wrapper>
      <Container>
        <Wrap>
          <WrapTitle>
            <Title>
              WEEKLY <br />
              <Color>HOT</Color>
            </Title>
          </WrapTitle>
          <ScrollContainer>
            {webtoons.map((webtoon) => {
              return <Webtoon webtoon={webtoon} key={webtoon.id} />
            })}
          </ScrollContainer>
        </Wrap>
      </Container>
    </Wrapper>
  )
}

export default NewWebtoon

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Webtoon from './webtoons'
import FinishedWebtoon from './webtoonList'

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 45px;
`

const Title = styled.h3`
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
`
const TitleList = styled.h3`
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
  border-bottom: 1px solid #eaeaea;
`

const ScrollContainer = styled.div`
  overflow: hidden;
  margin-left: -10px;
  margin-right: -10px;
`
const Color = styled.span`
  color: #00dc64;
  font-weight: bold;
`
const Wrap = styled.div`
  margin-top: 50px;
`
const WebtoonList = styled.ul`
  margin-left: -5px;
  margin-right: -5px;
  overflow: hidden;
`
function NewWebtoon() {
  const [webtoons, setWebtoons] = useState([])

  useEffect(() => {
    // 1. new data 를 가져온다.
    // 2. 가져온 데이터를 state 로 set 한다.
    //http://localhost:3000/new
    const fetchNewWebtoons = async () => {
      const response = await fetch('http://localhost:3000/popular') // 10초
      const data = await response.json()

      setWebtoons(data)
    }

    fetchNewWebtoons()
  }, [])

  const [finished, setFinished] = useState([])

  useEffect(() => {
    const fetchFinished = async () => {
      const response = await fetch('http://localhost:3000/webtoons') // 10초
      const data = await response.json()

      setFinished(data)
    }

    fetchFinished()
  }, [])

  return (
    <Container>
      <Title>
        MOST <Color>POPULAR</Color>
      </Title>
      <ScrollContainer>
        {webtoons.map((webtoon) => {
          return <Webtoon webtoon={webtoon} key={webtoon.id} />
        })}
      </ScrollContainer>
      <Wrap>
        <TitleList>
          COMPLETED <Color>WEBTOONS</Color>
        </TitleList>
        <WebtoonList>
          {finished.map((webtoon) => {
            return <FinishedWebtoon webtoon={webtoon} key={webtoon.id} />
          })}
        </WebtoonList>
      </Wrap>
    </Container>
  )
}

export default NewWebtoon

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Webtoon from './webtoon'

const Container = styled.ul`
  padding: 20px;
  width: 100%;
  margin-left: -5px;
  margin-right: -5px;
  overflow: hidden;
`

function WebtoonList() {
  const [webtoons, setWebtoons] = useState([])

  useEffect(() => {
    const fetchWebtoonList = async () => {
      const response = await fetch('http://localhost:3000/webtoons')
      const data = await response.json()

      setWebtoons(data)
    }

    fetchWebtoonList()
  }, [])

  return (
    <Container>
      {webtoons.map((webtoon) => {
        return <Webtoon webtoon={webtoon} key={webtoon.id} />
      })}
    </Container>
  )
}

export default WebtoonList

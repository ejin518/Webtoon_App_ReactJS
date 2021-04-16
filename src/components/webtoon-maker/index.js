import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './form'
import Webtoon from './webtoon'

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 45px;
`

function WebtoonMaker() {
  const [webtoons, setWebtoons] = useState([
    {
      title: 'Webtoon 1',
      author: 'Author',
      imageUrl:
        'https://image-comic.pstatic.net/webtoon/662774/thumbnail/thumbnail_IMAG19_8d97e971-103f-4c59-8cfc-5394dcda9256.jpg',
      description: 'Descript',
    },
    {
      title: 'Webtoon 2',
      author: 'Author',
      imageUrl:
        'https://image-comic.pstatic.net/webtoon/662774/thumbnail/thumbnail_IMAG19_8d97e971-103f-4c59-8cfc-5394dcda9256.jpg',
      description: 'Descript',
    },
  ])

  const handleAddWebtoon = (webtoon) => {
    setWebtoons([...webtoons, webtoon])
  }
  return (
    <Container>
      <Form onAddWebtoon={handleAddWebtoon} />

      {webtoons.map((webtoon, index) => {
        return <Webtoon key={index} webtoon={webtoon} /> //props
      })}
    </Container>
  )
}

export default WebtoonMaker

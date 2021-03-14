import React, { useState } from 'react'
import Form from './form'
import Webtoon from './webtoon'

function WebtoonMaker() {
  const [webtoons, setWebtoons] = useState([
    {
      title: '웹툰 1',
      author: '웹툰 1 작가',
      imageUrl:
        'https://image-comic.pstatic.net/webtoon/662774/thumbnail/thumbnail_IMAG19_8d97e971-103f-4c59-8cfc-5394dcda9256.jpg',
      description: '웹툰 1 설명',
    },
    {
      title: '웹툰 2',
      author: '웹툰 2 작가',
      imageUrl:
        'https://image-comic.pstatic.net/webtoon/662774/thumbnail/thumbnail_IMAG19_8d97e971-103f-4c59-8cfc-5394dcda9256.jpg',
      description: '웹툰 2 설명',
    },
  ])

  const handleAddWebtoon = (webtoon) => {
    setWebtoons([...webtoons, webtoon])
  }
  return (
    <div>
      <Form onAddWebtoon={handleAddWebtoon} />

      {webtoons.map((webtoon, index) => {
        return <Webtoon key={index} webtoon={webtoon} /> //props
      })}
    </div>
  )
}

export default WebtoonMaker

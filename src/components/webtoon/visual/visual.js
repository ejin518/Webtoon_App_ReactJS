import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Banner from './image'

const Wrap = styled.div`
  width: 100%;
  margin-top: 45px;
`
const Visual = styled.div`
  width: 100%;
  height: 578px;
  background: url(http://ejin518.cafe24.com/img/webtoon/banner_bg.jpg) center
    center no-repeat;
  background-size: cover;
  @media (max-width: 1110px) {
    width: 100%;
    height: 51vw;
  }
`

function VisualBanner() {
  const [image, setImage] = useState([])

  useEffect(() => {
    // 1. new data 를 가져온다.
    // 2. 가져온 데이터를 state 로 set 한다.
    const fetchImage = async () => {
      const response = await fetch('http://localhost:3000/image') // 10초
      const data = await response.json()

      setImage(data)
    }

    fetchImage()
  }, [])

  return (
    <Wrap>
      <Visual>
        {image.map((bannerimage) => {
          return <Banner image={bannerimage} key={bannerimage.id} />
        })}
      </Visual>
    </Wrap>
  )
}

export default VisualBanner

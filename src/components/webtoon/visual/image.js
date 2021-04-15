import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../../constants'

const Wrap = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`

const A = styled(Link)``

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

function Banner({ image }) {
  const { id, imageUrl } = image

  return (
    <Wrap>
      <A to={`${ROUTES.WEBTOON.HOME}/${id}`}>
        <Image src={imageUrl} />
      </A>
    </Wrap>
  )
}

export default Banner

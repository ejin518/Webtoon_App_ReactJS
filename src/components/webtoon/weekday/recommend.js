import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../../constants'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const A = styled(Link)``
const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
`
const Title = styled.h3`
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 1.5;
`
const Color = styled.span`
  color: #00dc64;
`
const Subtitle = styled.h4`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
`
const Author = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 1.5;
`
function Recommend({ webtoon }) {
  const { id } = webtoon

  return (
    <Wrap>
      <A to={`${ROUTES.WEBTOON.HOME}/${id}`}>
        <Info>
          <Title>
            Recommended <Color>Webtoon</Color>
          </Title>
          <Subtitle>Taste of Illness</Subtitle>
          <Author>Ilkwon Ha</Author>
        </Info>
      </A>
    </Wrap>
  )
}

export default Recommend

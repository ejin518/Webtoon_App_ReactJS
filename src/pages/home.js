import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f9f9fc;
`

const Inner = styled.div`
  position: relative;
  max-width: 460px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
  transform: translateY(-50%);
`
const List = styled(Link)`
  display: block;
  width: 460px;
  height: 56px;
  background: #fff;
  border: 1px solid #dadada;
  margin-top: 5px;
  text-align: center;
  line-height: 54px;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    border: 1px solid #03c75a;
    background: #03c75a;
    color: #fff;
  }
`
const DAY_OF_WEEK = [
  'SUN',
  'MON',
  'TUES',
  'WENDS',
  'THURS',
  'FRI',
  'SATUR',
  'SUN',
]

function HomePage() {
  console.log(moment().day())
  console.log(moment().format('YYYY-MM-DD'))
  const weekdayLabel = `${DAY_OF_WEEK[moment().day()]}DAY WEBTOONS` //moment는 날짜와 관련된 api
  return (
    <Container>
      <Inner>
        <Wrap>
          <List to={ROUTES.WEBTOON.HOME}>HOME</List>
          <List to={ROUTES.WEBTOON.WEEKDAY}>{weekdayLabel}</List>
          <List to={ROUTES.WEBTOON.GENRE}>UPLOAD WEBTOON</List>
        </Wrap>
      </Inner>
    </Container>
  )
}

export default HomePage

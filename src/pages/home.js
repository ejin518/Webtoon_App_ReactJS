import React from 'react'
import moment from 'moment'

import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토', '일']

function HomePage() {
  console.log(moment().day())
  console.log(moment().format('YYYY-MM-DD'))
  const weekdayLabel = `${DAY_OF_WEEK[moment().day()]}요웹툰` //moment는 날짜와 관련된 api
  return (
    <div>
      <Link to={ROUTES.WEBTOON.HOME}>웹툰홈</Link>
      <Link to={ROUTES.WEBTOON.WEEKDAY}>{weekdayLabel}</Link>
      <Link to={ROUTES.WEBTOON.GENRE}>베스트도전</Link>
    </div>
  )
}

export default HomePage

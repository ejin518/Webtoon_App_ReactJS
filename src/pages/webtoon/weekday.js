import React from 'react'

import Header from '../../components/webtoon/header'
import NewWebtoon from '../../components/webtoon/weekday/new-webtoon'

function WeekdayPage() {
  return (
    <div>
      <Header tab="weekday" />
      <NewWebtoon />
    </div>
  )
}

export default WeekdayPage
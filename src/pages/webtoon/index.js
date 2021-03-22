import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ROUTES } from '../../constants'

import HomePage from './home'
import WeekdayPage from './weekday'
import GenrePage from './genre'
import FinishPage from './finish'
import DetailPage from './detail'

function WebtoonPage() {
  return (
    <Switch>
      <Route exact path={ROUTES.WEBTOON.HOME}>
        <HomePage />
      </Route>
      <Route path={ROUTES.WEBTOON.WEEKDAY}>
        <WeekdayPage />
      </Route>
      <Route path={ROUTES.WEBTOON.GENRE}>
        <GenrePage />
      </Route>
      <Route path={ROUTES.WEBTOON.FINISH}>
        <FinishPage />
      </Route>
      <Route path={`${ROUTES.WEBTOON.HOME}/:id`}>
        <DetailPage />
      </Route>
    </Switch>
  )
}

export default WebtoonPage

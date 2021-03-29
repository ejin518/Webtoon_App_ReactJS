import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Comedy from './comedy'

import { MENU_ROUTES } from '../../menuRoutes'

function WebtoonPage() {
  return (
    <Switch>
      <Route exact path={MENU_ROUTES.GENRE.COMEDY}>
        <Comedy />
      </Route>
    </Switch>
  )
}

export default WebtoonPage

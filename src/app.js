import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import ResetCSS from './components/reset-css'
import { ROUTES } from './constants'

import HomePage from './pages/home'
import WebtoonPage from './pages/webtoon'

import { UserContextProvider } from './contexts/user-context'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <Container>
      <ResetCSS />
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomePage />
            </Route>
            <Route path={ROUTES.WEBTOON}>
              <WebtoonPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </Container>
  )
}

export default App

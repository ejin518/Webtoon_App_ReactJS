import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ROUTES } from '../../constants'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const Menu = styled(Link)`
  display: block;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 51px;
  white-space: nowrap;
  ${({ on }) =>
    on &&
    `
    color: #00d564;
    border-bottom: 2px solid #00d564;
  `}
`

function Header({ tab }) {
  return (
    <Container>
      <Menu to={ROUTES.WEBTOON.HOME} on={tab === 'home'}>
        홈
      </Menu>
      <Menu to={ROUTES.WEBTOON.WEEKDAY} on={tab === 'weekday'}>
        요일
      </Menu>
      <Menu to={ROUTES.WEBTOON.FINISH} on={tab === 'finish'}>
        완결
      </Menu>
      <Menu to={ROUTES.WEBTOON.GENRE} on={tab === 'genre'}>
        베스트도전
      </Menu>
    </Container>
  )
}

export default Header

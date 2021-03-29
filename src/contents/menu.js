import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { MENU_ROUTES } from '../menuRoutes'

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

function GenreList({ tab }) {
  return (
    <Container>
      <Menu to={MENU_ROUTES.GENRE.COMEDY} on={tab === 'home'}>
        개그
      </Menu>
    </Container>
  )
}

export default GenreList

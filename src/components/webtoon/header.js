import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ROUTES } from '../../constants'

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
`
const Wrap = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  &:before {
    content: '';
    border-bottom: 1px solid #e5e5e5;
    position: absolute;
    bottom: -1px;
    left: -100%;
    width: 100%;
  }
  &:after {
    content: '';
    border-bottom: 1px solid #e5e5e5;
    position: absolute;
    bottom: -1px;
    right: -100%;
    width: 100%;
  }
`

const Menu = styled(Link)`
  display: block;
  height: 42px;
  font-size: 15px;
  font-weight: bold;
  color: #000;
  line-height: 51px;
  white-space: nowrap;
  &:hover {
    color: #000;
  }
  ${({ on }) =>
    on &&
    `
    color: #00d564;
    border-bottom: 2px solid #00d564;
    &:hover {
      color: #00d564;
    }
  `}
`

function Header({ tab }) {
  return (
    <Fixed>
      <Wrap>
        <Container>
          <Menu to={ROUTES.WEBTOON.HOME} on={tab === 'home'}>
            HOME
          </Menu>
          <Menu to={ROUTES.WEBTOON.WEEKDAY} on={tab === 'weekday'}>
            ONGOING
          </Menu>
          <Menu to={ROUTES.WEBTOON.FINISH} on={tab === 'finish'}>
            COMPLETED
          </Menu>
          <Menu to={ROUTES.WEBTOON.GENRE} on={tab === 'genre'}>
            UPLOAD
          </Menu>
        </Container>
      </Wrap>
    </Fixed>
  )
}

export default Header

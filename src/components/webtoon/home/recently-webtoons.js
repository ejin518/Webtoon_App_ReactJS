import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useUserContext } from '../../../contexts/user-context'
import Webtoon from './webtoon'
import { ROUTES } from '../../../constants'

const Wrap = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

const Container = styled.div`
  padding: 20px 17px;
`

const ScrollContainer = styled.div`
  white-space: nowrap;
  overflow-x: auto;
`

const Title = styled.h3`
  margin: 12px 0;
  font-weight: bold;
`
const Color = styled.span`
  font-size: 16px;
  color: #00dc64;
  font-weight: bold;
`

function RecentlyWebtoons() {
  const {
    state: { recentlyWebtoons, user },
  } = useUserContext()
  const history = useHistory()

  if (!recentlyWebtoons.length) {
    return null
  }

  const moveToDetail = (webtoon) => {
    history.push(`${ROUTES.WEBTOON.HOME}/${webtoon.id}`)
  }

  return (
    <Wrap>
      <Container>
        <Title>
          Hello <Color>{user.name}!</Color> Your Browsing History.
        </Title>
        <ScrollContainer>
          {recentlyWebtoons.map((webtoon) => {
            return (
              <Webtoon
                webtoon={webtoon}
                onClick={moveToDetail} //onclick은 실제 이벤트를 실행하는 것이 아니고 전달해주는 역할
                key={webtoon.id}
              />
            )
          })}
        </ScrollContainer>
      </Container>
    </Wrap>
  )
}

export default RecentlyWebtoons

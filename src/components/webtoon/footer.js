import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 50px auto 0;
  padding: 30px 20px;
  border-top: 1px solid #eaeaea;
`
const H4 = styled.h4`
  font-size: 16px;
  color: #999;
`
function Footer() {
  return (
    <Wrap>
      <H4>Webtoon2021 by Hyein</H4>
    </Wrap>
  )
}

export default Footer

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from '../../contexts/user-context'
import Header from '../../components/webtoon/header'
import Footer from '../../components/webtoon/footer'
import styled from 'styled-components'

const Wrap = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 45px auto 0;
`
const UL = styled.ul`
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: 50px;
`
const LI1 = styled.li`
  float: left;
  width: 20%;
  @media (max-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 786px) {
    width: 45%;
  }
  @media (max-width: 640px) {
    float: none;
    width: 100%;
  }
`
const LI2 = styled.li`
  float: left;
  width: calc(80% - 30px);
  padding-left: 30px;
  @media (max-width: 1024px) {
    width: calc(60% - 30px);
  }
  @media (max-width: 786px) {
    width: calc(55% - 30px);
  }
  @media (max-width: 640px) {
    float: none;
    width: 100%;
    padding-left: 0;
    margin-top: 20px;
  }
`
const IMG = styled.img`
  width: 100%;
`

const IMG2 = styled.img`
  height: 100px;
`
const Title = styled.h3`
  display: inline-block;
  font-size: 30px;
  color: #000;
`

const Author = styled.h4`
  font-size: 18px;
  color: #000;
  line-height: 2;
`

const Descript = styled.p`
  font-size: 16px;
  color: #000;
  line-height: 1.3;
`

const Fav = styled.span`
  display: inline-block;
  margin-top: 20px;
  font-weight: bold;
  color: #00d564;
`

const Up = styled.em`
  display: none;
  ${({ on }) =>
    on &&
    `
display:inline-block;
background-color: #00d564;
font-size:16px;
font-weight:bold;
color:#fff;
border-radius:20px;
padding: 3px 10px;
margin-top:5px;
margin-left: 10px;
vertical-align: bottom;
`}
`
const DL = styled.dl`
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  display: table;
  width: 100%;
  height: 100px;
  margin-top: -1px;
  cursor: pointer;
`
const Dt = styled.dt`
  display: table-cell;
  width: 20%;
`
const Dd = styled.dd`
  display: table-cell;
  width: calc(80% - 50px);
  padding-left: 50px;
  vertical-align: middle;
`
const Span = styled.span`
  float: right;
  font-size: 15px;
  color: #b1b1b1;
  padding-right: 10px;
`

function DetailPage() {
  const { id } = useParams()
  const [webtoon, setWebtoon] = useState(null) //null 초기상태
  const {
    action: { setRecentlyWebtoon },
  } = useUserContext()

  useEffect(() => {
    const fetchWebtoon = async () => {
      try {
        const response = await fetch(`http://localhost:3000/webtoons/${id}`)
        const data = await response.json()
        console.log(data)
        setWebtoon(data)
      } catch (e) {
        setWebtoon({})
        console.error(e)
      }
    }
    fetchWebtoon()
  }, [id])

  useEffect(() => {
    if (webtoon && Object.keys(webtoon).length > 0) {
      setRecentlyWebtoon(webtoon)
    }
  }, [webtoon])

  if (!webtoon) {
    return null
  }

  if (!Object.keys(webtoon).length) {
    return <div>No results found</div>
  }

  const { title, author, description, favcount, isUpdate, imageUrl } = webtoon

  return (
    <Wrap>
      <Header />
      <UL>
        <LI1>
          <IMG src={imageUrl} />
        </LI1>
        <LI2>
          <Title>{title}</Title>
          <Up on={isUpdate === true}>UP</Up>
          <Author>{author}</Author>
          <Descript>{description}</Descript>
          <Fav>{favcount}</Fav>
        </LI2>
      </UL>
      <DL>
        <Dt>
          <IMG2 src={imageUrl} />
        </Dt>
        <Dd>
          Episode 03<Span>Apr 15, 2021</Span>
        </Dd>
      </DL>
      <DL>
        <Dt>
          <IMG2 src={imageUrl} />
        </Dt>
        <Dd>
          Episode 02<Span>Apr 15, 2021</Span>
        </Dd>
      </DL>
      <DL>
        <Dt>
          <IMG2 src={imageUrl} />
        </Dt>
        <Dd>
          Episode 01<Span>Apr 15, 2021</Span>
        </Dd>
      </DL>
      <Footer />
    </Wrap>
  )
}

export default DetailPage

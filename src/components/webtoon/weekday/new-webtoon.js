import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Webtoon from './webtoon'
import DayToon from './daytoon'
import WeekdayToons from './weekday-toons'
import Recommend from './recommend'

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 45px;
`
const NewToons = styled.div``

const NewTitle = styled.h3`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  padding-bottom: 15px;
`
const Title = styled.h3`
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
  border-bottom: 1px solid #eaeaea;
`
const Color = styled.span`
  color: #00dc64;
  font-weight: bold;
`
const ScrollContainer = styled.div`
  overflow: hidden;
  margin-left: -5px;
  margin-right: -5px;
`
const RecommendBanner = styled.div`
  width: 100%;
  height: 240px;
  margin-top: 30px;
  background: url(http://ejin518.cafe24.com/img/webtoon/recommend01.jpg) center
    center no-repeat;
  background-size: cover;
  @media (max-width: 1110px) {
    height: 25vw;
  }
`

const Wrapper = styled.ul`
  overflow: hidden;
`
const WeekdayList = styled.li`
  float: left;
  width: calc(14.2857%);
  padding: 10px 0;
`

const DayList = styled.li`
  float: left;
  width: calc(14.2857%);
  background: #222;
  padding: 10px 0;
`

const WeekTitle = styled.span`
  display: block;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`
const DayTitle = styled.span`
  display: block;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #ebce19;
  margin-bottom: 10px;
`

function NewWebtoon() {
  const [webtoons, setWebtoons] = useState([])

  useEffect(() => {
    // 1. new data 를 가져온다.
    // 2. 가져온 데이터를 state 로 set 한다.
    //http://localhost:3000/new
    const fetchNewWebtoons = async () => {
      const response = await fetch('http://localhost:3000/new') // 10초
      const data = await response.json()

      setWebtoons(data)
    }

    fetchNewWebtoons()
  }, [])

  const [monday, setMonday] = useState([])

  useEffect(() => {
    const fetchWeekToons = async () => {
      const response = await fetch('http://localhost:3000/mon') // 10초
      const data = await response.json()

      setMonday(data)
    }

    fetchWeekToons()
  }, [])

  const [tuesday, setTuesday] = useState([])

  useEffect(() => {
    const fetchWeekToons = async () => {
      const response = await fetch('http://localhost:3000/tues') // 10초
      const data = await response.json()

      setTuesday(data)
    }

    fetchWeekToons()
  }, [])

  const [wendsday, setWendsday] = useState([])

  useEffect(() => {
    const fetchWeekToons = async () => {
      const response = await fetch('http://localhost:3000/wends') // 10초
      const data = await response.json()

      setWendsday(data)
    }

    fetchWeekToons()
  }, [])

  const [thirsday, setThirsday] = useState([])

  useEffect(() => {
    const fetchWeekToons = async () => {
      const response = await fetch('http://localhost:3000/thirs') // 10초
      const data = await response.json()

      setThirsday(data)
    }

    fetchWeekToons()
  }, [])

  const [friday, setFriday] = useState([])

  useEffect(() => {
    const fetchWeekToons = async () => {
      const response = await fetch('http://localhost:3000/fri') // 10초
      const data = await response.json()

      setFriday(data)
    }

    fetchWeekToons()
  }, [])

  const [satday, setSatday] = useState([])

  useEffect(() => {
    const fetchWeekToons = async () => {
      const response = await fetch('http://localhost:3000/sat') // 10초
      const data = await response.json()

      setSatday(data)
    }

    fetchWeekToons()
  }, [])

  const [sunday, setSunday] = useState([])

  useEffect(() => {
    const fetchWeekToons = async () => {
      const response = await fetch('http://localhost:3000/sun') // 10초
      const data = await response.json()

      setSunday(data)
    }

    fetchWeekToons()
  }, [])

  const [recommend, setRecommend] = useState([])

  useEffect(() => {
    const fetchRecommend = async () => {
      const response = await fetch('http://localhost:3000/recommend') // 10초
      const data = await response.json()

      setRecommend(data)
    }

    fetchRecommend()
  }, [])

  const DAY_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  const DAY = moment().day()

  return (
    <Container>
      <NewToons>
        <NewTitle>
          NEW <Color>WEBTOON</Color>
        </NewTitle>
        <ScrollContainer>
          {webtoons.map((webtoon) => {
            return <Webtoon webtoon={webtoon} key={webtoon.id} />
          })}
        </ScrollContainer>
      </NewToons>
      <RecommendBanner>
        {recommend.map((webtoon) => {
          return <Recommend webtoon={webtoon} key={webtoon.id} />
        })}
      </RecommendBanner>
      <Title>
        ONGOING <Color>SERIES</Color>
      </Title>
      <Wrapper>
        {DAY_OF_WEEK[DAY] === 'MON' ? (
          <DayList>
            <DayTitle>{DAY_OF_WEEK[1]}</DayTitle>
            {monday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'MON') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </DayList>
        ) : (
          <WeekdayList>
            <WeekTitle>{DAY_OF_WEEK[1]}</WeekTitle>
            {monday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'MON') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </WeekdayList>
        )}
        {DAY_OF_WEEK[DAY] === 'TUE' ? (
          <DayList>
            <DayTitle>{DAY_OF_WEEK[2]}</DayTitle>
            {tuesday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'TUE') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </DayList>
        ) : (
          <WeekdayList>
            <WeekTitle>{DAY_OF_WEEK[2]}</WeekTitle>
            {tuesday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'TUE') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </WeekdayList>
        )}
        {DAY_OF_WEEK[DAY] === 'WED' ? (
          <DayList>
            <DayTitle>{DAY_OF_WEEK[3]}</DayTitle>
            {wendsday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'WED') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </DayList>
        ) : (
          <WeekdayList>
            <WeekTitle>{DAY_OF_WEEK[3]}</WeekTitle>
            {wendsday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'WED') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </WeekdayList>
        )}
        {DAY_OF_WEEK[DAY] === 'THU' ? (
          <DayList>
            <DayTitle>{DAY_OF_WEEK[4]}</DayTitle>
            {thirsday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'THU') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </DayList>
        ) : (
          <WeekdayList>
            <WeekTitle>{DAY_OF_WEEK[4]}</WeekTitle>
            {thirsday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'THU') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </WeekdayList>
        )}

        {DAY_OF_WEEK[DAY] === 'FRI' ? (
          <DayList>
            <DayTitle>{DAY_OF_WEEK[5]}</DayTitle>
            {friday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'FRI') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </DayList>
        ) : (
          <WeekdayList>
            <WeekTitle>{DAY_OF_WEEK[5]}</WeekTitle>
            {friday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'FRI') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </WeekdayList>
        )}
        {DAY_OF_WEEK[DAY] === 'SAT' ? (
          <DayList>
            <DayTitle>{DAY_OF_WEEK[6]}</DayTitle>
            {satday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'SAT') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </DayList>
        ) : (
          <WeekdayList>
            <WeekTitle>{DAY_OF_WEEK[6]}</WeekTitle>
            {satday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'SAT') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </WeekdayList>
        )}
        {DAY_OF_WEEK[DAY] === 'SUN' ? (
          <DayList>
            <DayTitle>{DAY_OF_WEEK[7]}</DayTitle>
            {sunday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'SUN') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </DayList>
        ) : (
          <WeekdayList>
            <WeekTitle>{DAY_OF_WEEK[7]}</WeekTitle>
            {sunday.map((webtoon) => {
              if (DAY_OF_WEEK[DAY] === 'SUN') {
                return <DayToon webtoon={webtoon} key={webtoon.id} />
              } else {
                return <WeekdayToons webtoon={webtoon} key={webtoon.id} />
              }
            })}
          </WeekdayList>
        )}
      </Wrapper>
    </Container>
  )
}

export default NewWebtoon

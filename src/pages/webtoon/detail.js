import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useUserContext } from '../../contexts/user-context'

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
      console.log('최근 본 웹툰으로 저장')
      setRecentlyWebtoon(webtoon)
    }
  }, [webtoon])

  if (!webtoon) {
    return null
  }

  if (!Object.keys(webtoon).length) {
    return <div>웹툰 정보를 찾을 수 없습니다.</div>
  }

  const { title, imageUrl } = webtoon

  return (
    <div>
      <img src={imageUrl} />
      <h2>{title}</h2>
    </div>
  )
}

export default DetailPage

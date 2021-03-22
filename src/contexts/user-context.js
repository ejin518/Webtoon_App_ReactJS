import React, { createContext, useContext, useEffect, useReducer } from 'react'

const Context = createContext()

// 액션 타입
const SET_USER = 'SET_USER'
const SET_RECENTLY_WEBTOON = 'SET_RECENTLY_WEBTOON'
const RECENTLY_WEBTOONS = 'RECENTLY_WEBTOONS'

function reducer(state, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }
    case SET_RECENTLY_WEBTOON: {
      if (state.recentlyWebtoons.find(({ id }) => id === action.payload.id)) {
        return state
      }

      return {
        ...state,
        recentlyWebtoons: [action.payload, ...state.recentlyWebtoons],
      }
    }
    default: {
      return state
    }
  }
}

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      name: '올라프',
    },
    recentlyWebtoons: JSON.parse(
      localStorage.getItem(RECENTLY_WEBTOONS) || '[]',
    ),
  })

  useEffect(() => {
    localStorage.setItem(
      RECENTLY_WEBTOONS,
      JSON.stringify(state.recentlyWebtoons),
    )
  }, [state.recentlyWebtoons])

  const action = {
    setUser: (user) => {
      dispatch({ type: SET_USER, payload: user })
    },
    setRecentlyWebtoon: (webtoon) => {
      dispatch({ type: SET_RECENTLY_WEBTOON, payload: webtoon })
    },
  }

  console.log(state)

  return (
    <Context.Provider value={{ state, action }}>{children}</Context.Provider> //context API
  )
}

export function useUserContext() {
  return useContext(Context)
}

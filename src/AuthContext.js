import React, { useReducer, createContext, useEffect, useContext } from 'react'
import Loader from './components/Loader'

export const AuthStateContext = createContext({})

const initialState = {
  status: 'pending',
  error: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        status: 'success',
        error: null,
        token: action.payload
      }

    case 'LOGIN':
      return {
        status: 'success',
        error: null,
        token: action.payload.token
      }

    case 'LOGOUT':
      return {
        status: 'success',
        error: null,
        token: null
      }

    default:
      return initialState
  }
}

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    getUser()
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState)
  const isPending = state.status === 'pending'

  async function getUser() {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch({ type: 'SET_USER', payload: null })
    } else {
      dispatch({ type: 'SET_USER', payload: token })
    }
  }

  return (
    <AuthStateContext.Provider value={[state, dispatch]}>{isPending ? <Loader /> : children}</AuthStateContext.Provider>
  )
}

export const useAuth = () => useContext(AuthStateContext)
import React, { createContext, useReducer } from 'react'

const initialState = {
  getTwitterUser: {
    endpoint: 'get-twitter-user',
    isExpanded: true,
  },
  makeStripePayment: {
    endpoint: 'make-stripe-payment',
    isExpanded: false,
  },
  getGithubUser: {
    endpoint: 'get-github-user',
    isExpanded: false,
  },
  getGithubEvents: {
    endpoint: 'get-github-events',
    isExpanded: false,
  },
}

const reducer = (state, actions) => {
  const { type, id, isExpanded } = actions

  switch (type) {
    case 'setExpanded':
      return {
        ...state,
        [id]: {
          ...state[id],
          isExpanded: isExpanded,
        },
      }

    default:
      return
  }
}

export const AppContext = createContext(initialState)

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider

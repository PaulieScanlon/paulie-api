import React from 'react'

import ContextProvider from '../context/app-context'

const RootElement = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>
}

export default RootElement

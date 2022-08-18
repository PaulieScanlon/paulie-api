import React, { Fragment } from 'react'

import Seo from './seo'
import Header from './header'

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <Header />
      <main>{children}</main>
    </Fragment>
  )
}

export default RootElement

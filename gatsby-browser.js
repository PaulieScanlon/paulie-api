import React from 'react'
import PageElement from './src/components/page-element'

const anchorScroll = (location) => {
  const anchor = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
  if (location && location.hash && anchor) {
    const item = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
      .offsetTop
    const mainNavHeight = document.querySelector(`header`).offsetHeight - 32

    setTimeout(() => {
      window.scrollTo({
        top: item - mainNavHeight,
        behavior: 'smooth',
      })
    }, 50)
  }
}

export const onRouteUpdate = ({ location }) => {
  anchorScroll(location)
  return true
}

export const wrapPageElement = ({ element }) => {
  return <PageElement>{element}</PageElement>
}

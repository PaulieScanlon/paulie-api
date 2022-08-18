import React from 'react'
import RootElement from './src/components/root-element'

const anchorScroll = (location) => {
  const anchor = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
  if (location && location.hash && anchor) {
    const item = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
      .offsetTop
    const mainNavHeight = document.querySelector(`header`).offsetHeight + 32

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

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

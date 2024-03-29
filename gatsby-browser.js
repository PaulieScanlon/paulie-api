import React from 'react';

import PageElement from './src/components/page-element';

import './src/styles/global.css';

export const onRouteUpdate = ({ location }) => {
  const element = document.getElementById(location.hash.split('#')[1]?.toLowerCase());

  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      left: 0
    });
  }
};

export const wrapPageElement = ({ element, props }) => {
  return <PageElement {...props}>{element}</PageElement>;
};

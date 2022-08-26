import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import PrismSyntaxHighlight from './prism-syntax-highlight.js';
import RunInBrowser from './run-in-browser';
import RequestResponseExpand from './request-response-expand';

import GetLatestTweets from '../components/get-latest-tweets';
import GetTwitterUser from '../components/get-twitter-user';
import MakeStripePayment from '../components/make-stripe-payment';
import GetGitHubUser from '../components/get-github-user';
import GetGitHubRepo from '../components/get-github-repo';
import GetGitHubUserEvents from '../components/get-github-user-events';
import GetGitHubRepoEvents from '../components/get-github-repo-events';

import { stripLeadingSlash } from '../utils/strip-leading-slash';

const components = {
  a: ({ href, children }) => {
    // If it's an external url, use <a> and target _blank
    if (href.match(/^(http|https|mailto):/g)) {
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    // if it's a jumplink #, use Link which will fires an anchorScroll in gatsby-browser
    if (href.match(/#/gi)) {
      return <a href={stripLeadingSlash(href)}>{children}</a>;
    }
    // if it's anything else, use Link
    return <Link to={href}>{children}</Link>;
  },
  code: ({ children, className }) => {
    return className ? (
      <PrismSyntaxHighlight className={className}>{children}</PrismSyntaxHighlight>
    ) : (
      <code>{children}</code>
    );
  },
  GatsbyImage: (props) => <GatsbyImage alt={props.alt} image={getImage(props.image)} />,
  RunInBrowser,
  RequestResponseExpand,
  GetLatestTweets,
  GetTwitterUser,
  MakeStripePayment,
  GetGitHubUser,
  GetGitHubRepo,
  GetGitHubUserEvents,
  GetGitHubRepoEvents
};

const MdxParser = ({ children, images }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer images={images}>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MdxParser;

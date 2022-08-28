import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import PrismSyntaxHighlight from './prism-syntax-highlight.js';
import RunInBrowser from './run-in-browser';
import RequestResponseExpand from './request-response-expand';

import Endpoint from '../components/endpoint';

import TwitterUser from '../components/twitter/user';
import TwitterTweets from '../components/twitter/tweets';

import StripePayment from '../components/stripe/payment';

import GitHubUser from './github/user';
import GitHubRepo from './github/repo';
import GitHubUserEvents from './github/user/events';
import GitHubRepoEvents from './github/repo/events';

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
  table: ({ children }) => {
    return (
      <div className="overflow-auto">
        <table>{children}</table>
      </div>
    );
  },
  GatsbyImage: (props) => <GatsbyImage alt={props.alt} image={getImage(props.image)} className="my-8" />,
  Endpoint,
  RunInBrowser,
  RequestResponseExpand,
  TwitterTweets,
  TwitterUser,
  StripePayment,
  GitHubUser,
  GitHubRepo,
  GitHubUserEvents,
  GitHubRepoEvents
};

const MdxParser = ({ children, images }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer images={images}>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MdxParser;

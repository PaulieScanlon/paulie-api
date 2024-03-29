import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';

import Logo from './logo';
import MenuIcon from '../components/menu-icon';
import NavigationIcon from '../components/navigation-icon';
import Footer from './footer';

import { useNavigation } from '../hooks/use-navigation';

const PageElement = ({ children, location: { pathname } }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navigation = useNavigation();

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Fragment>
      <div className="sticky top-0 z-40 w-full backdrop-blur border-b border-b-outline flex-none bg-background lg:bg-transparent">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 mx-4 lg:px-8 lg:mx-0">
            <div className="relative flex items-center">
              <Link className="flex items-center" to="/">
                <span className="sr-only">Paul Scanlon's Blog</span>
                <div className="relative">
                  <span className="absolute leading-none right-[-8px] top-0 bg-tertiary rounded px-1 pb-0.5 font-bold text-xs text-white">
                    v2
                  </span>
                  <Logo />
                </div>
              </Link>
              <div className="relative flex lg:hidden items-center ml-auto">
                <button className="ml-auto flex items-center justify-center" onClick={handleNav}>
                  <span className="sr-only">Navigation</span>
                  <MenuIcon isNavOpen={isNavOpen} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          aria-label="lightbox"
          tabIndex="0"
          role="button"
          onClick={handleNav}
          onKeyDown={handleNav}
          className={`site-lightbox z-20 top-0 w-screen h-screen bg-black opacity-80 ${
            isNavOpen ? 'fixed lg:hidden' : 'hidden'
          }`}
        />

        <div className="site-container max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div
            className={`site-nav lg:block fixed z-30 inset-0 top-[3.8125rem] transition-all duration-300
          ${isNavOpen ? 'left-[max(0px,calc(50%-45rem))]' : 'left-[-240px] lg:left-[max(0px,calc(50%-45rem))]'} 
          right-auto w-[15.5rem] pb-10 px-6 overflow-y-auto border-r border-r-outline bg-background`}
          >
            <nav className="relative pt-8">
              <ul>
                {navigation.pages.map((page, index) => {
                  const {
                    fields: { slug },
                    frontmatter: { title, icon }
                  } = page;

                  const isIndex = slug === '/' && pathname !== '/' ? true : false;

                  return (
                    <li key={index} className="text-lg mb-2">
                      <Link
                        onClick={handleNav}
                        to={slug}
                        activeClassName={isIndex ? '' : '!text-primary'}
                        partiallyActive={true}
                        className="main-navigation text-text"
                      >
                        <NavigationIcon icon={icon} />
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <hr className="border border-outline my-8" />
              <ul>
                {navigation.endpoints.map((link, index) => {
                  const { hash, title, icon, children } = link;

                  return (
                    <li key={index} className="mb-2">
                      <a
                        key={index}
                        onClick={handleNav}
                        href={hash}
                        className="sub-navigation text-lg font-bold text-tertiary"
                      >
                        <NavigationIcon icon={icon} />
                        {title}
                      </a>
                      {children ? (
                        <ul>
                          {children.map((child, index) => {
                            const { hash, title } = child;

                            return (
                              <li key={index} className="ml-4">
                                <a
                                  key={index}
                                  onClick={handleNav}
                                  href={hash}
                                  className="child-navigation text-sm text-text"
                                >
                                  {title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="site-body lg:pl-[15.5rem]">
            <div className="mx-auto pt-6 max-w-none xl:ml-0">
              <article className="prose prose-lg max-w-5xl min-h-[calc(100vh-19rem)]">{children}</article>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageElement;

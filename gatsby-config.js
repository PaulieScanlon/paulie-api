require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'production'}`
});

const wrapESMPlugin = (name) =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name);
      const plugin = mod.default(opts);
      return plugin(...args);
    };
  };

module.exports = {
  siteMetadata: {
    name: 'Paulie API',
    description: 'The documentation for Paulie API',
    keywords: ['Gatsby', 'Gatsby Serverless Functions'],
    siteUrl: 'https://paulieapi.gatsbyjs.io',
    defaultImage: 'https://paulieapi.gatsbyjs.io/images/paulie-api-og-image.jpg'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        rehypePlugins: [wrapESMPlugin('rehype-slug'), [wrapESMPlugin('rehype-autolink-headings'), { behavior: 'wrap' }]]
      }
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 100,
          formats: ['auto', 'webp'],
          placeholder: 'blurred'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`
      }
    }
  ]
};

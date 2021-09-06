require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    url: `https://paulieapi.gatsbyjs.io`,
    title: `Paulie API`,
    image: `paulie-api-og-image.jpg`,
    description: `The documentation for Paulie API`,
    language: `en-gb`,
    keywords: [`gatsby`, `gatsby-functions`],
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/pages-content/`,
      },
    },
  ],
}

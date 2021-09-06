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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
  ],
}

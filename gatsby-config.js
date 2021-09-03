require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    url: `https://paulieapi.gatsbyjs.io`,
    title: `Paulie API`,
    image: `paulie-api-og-image.jpg`,
    description: `An API for all my things`,
    language: `en-gb`,
    keywords: [`gatsby`, `gatsby-functions`],
  },
}

const Twitter = require('twitter-v2')
const { Octokit } = require('@octokit/rest')

module.exports = {
  twitter: new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_KEY_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  }),
  octokit: new Octokit({
    auth: 'fc1a60706c3d8556d421d08a899225bdfdcedac0',
    userAgent: 'Awesome-Octocat-App',
  }),
}

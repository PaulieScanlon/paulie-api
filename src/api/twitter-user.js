const { twitter } = require('../clients')

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    const { data } = await twitter.get(`users/by/username/${process.env.GATSBY_TWITTER_USERNAME}`, {
      user: {
        fields:
          'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld',
      },
    })
    res.status(200).json({
      user: data,
    })
  } catch {
    res.status(500).json({
      error: 'Ooops server error',
    })
  }
}

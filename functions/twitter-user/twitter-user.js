const { twitter } = require('../clients')

exports.handler = async (event, context, callback) => {
  const { data } = await twitter.get(`users/by/username/${process.env.GATSBY_TWITTER_USERNAME}`, {
    user: {
      fields:
        'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld',
    },
  })

  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({ user: data }),
  })
}

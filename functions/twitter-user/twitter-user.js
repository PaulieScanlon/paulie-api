const { client } = require('../client')

exports.handler = async (event, context, callback) => {
  console.log('process.env.TWITTER_USERNAME: ', process.env.TWITTER_USERNAME)
  const { data } = await client.get(`users/by/username/${process.env.TWITTER_USERNAME}`, {
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

const { twitter } = require('../../../clients');

export default async function handler(req, res) {
  const {
    query: { username }
  } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (!username) {
      res.status(400).json({ error: 'Bad Request', status: 400, message: '⚠️ Missing username' });
    }

    const { data } = await twitter.get(`users/by/username/${username}`, {
      user: {
        fields:
          'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld'
      }
    });

    res.status(200).json({
      message: '🕺 Twitter request ok',
      user: data ? data : '🦜 Username not found'
    });
  } catch (error) {
    res.status(500).json({ error: error, message: '🚫 Twitter error' });
  }
}

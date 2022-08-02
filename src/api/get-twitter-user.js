const { twitter } = require('../clients')

export default async function handler(req, res) {
  const { username } =
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body

  res.setHeader('Access-Control-Allow-Origin', '*') // YOLO

  try {
    if (!username) {
      res.status(400).json({ message: '⚠️ Missing required body params' })
    }

    const { data } = await twitter.get(`users/by/username/${username}`, {
      user: {
        fields:
          'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld',
      },
    })

    res.status(200).json({
      message: '🕺 Twitter request ok',
      user: data ? data : '🦜 Username not found',
    })
  } catch {
    res.status(500).json({ error: '🚫 Twitter error' })
  }
}

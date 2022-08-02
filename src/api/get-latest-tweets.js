const { twitter } = require('../clients')

export default async function handler(req, res) {
  const { id } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

  res.setHeader('Access-Control-Allow-Origin', '*') // YOLO

  try {
    if (!id) {
      res.status(400).json({ message: '⚠️ Missing required body params' })
    }

    const { data } = await twitter.get(`users/${id}/tweets`, {
      tweet: {
        fields: 'created_at,author_id,entities',
      },
    })

    res.status(200).json({
      message: '🕺 Twitter request ok',
      tweets: data ? data : '🦜 Id not found',
    })
  } catch {
    res.status(500).json({ error: '🚫 Twitter error' })
  }
}

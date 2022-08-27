const { twitter } = require('../../../clients');

export default async function handler(req, res) {
  const {
    query: { id }
  } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (!id) {
      res.status(400).json({ error: 'Bad Request', status: 400, message: '⚠️ Missing id' });
    }

    const { data } = await twitter.get(`users/${id}/tweets`, {
      tweet: {
        fields: 'created_at,author_id,entities'
      }
    });

    res.status(200).json({
      message: '🕺 Twitter request ok',
      tweets: data ? data : '🦜 Id not found'
    });
  } catch (error) {
    res.status(500).json({ error: error, message: '🚫 Twitter error' });
  }
}

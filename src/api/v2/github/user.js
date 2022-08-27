const { octokit } = require('../../../clients');

export default async function handler(req, res) {
  const {
    query: { username }
  } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (!username) {
      res.status(400).json({ error: 'Bad Request', status: 400, message: '⚠️ Missing username' });
    }

    const { data } = await octokit.request(`GET /users/{username}`, {
      username: username
    });

    res.status(200).json({
      message: '🕺 GitHub request ok',
      user: data ? data : '🦜 Username not found'
    });
  } catch (error) {
    res.status(500).json({ error: error, message: '🚫 GitHub error' });
  }
}

const { octokit } = require('../../../../clients');

export default async function handler(req, res) {
  const {
    headers: { authorization },
    query: { username, results = 5 }
  } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (!username) {
      res.status(400).json({ error: 'Bad Request', status: 400, message: '⚠️ Missing username' });
    }

    // https://docs.github.com/en/rest/reference/activity#list-public-events-received-by-a-user
    const { data } = await octokit.request('GET /users/{username}/events', {
      username: username,
      per_page: results
    });

    res.status(200).json({
      message: '🕺 GitHub request ok',
      events: data.length ? data : '🦜 Events not found'
    });
  } catch (error) {
    res.status(500).json({ error: error, message: '🚫 GitHub error' });
  }
}

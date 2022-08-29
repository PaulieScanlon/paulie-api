const { octokit } = require('../../../../clients');

export default async function handler(req, res) {
  const {
    headers: { authorization },
    query: { owner, repository, results = 5 }
  } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (
      !authorization ||
      authorization.split(' ')[1] + process.env.PAULIE_API_SECRET !== process.env.PAULIE_API_VALIDATOR
    ) {
      throw new Error('Request failed authorization');
    }

    if (!owner || !repository) {
      res.status(400).json({ error: 'Bad Request', status: 400, message: '⚠️ Missing owner or repository' });
    }

    // https://docs.github.com/en/rest/reference/activity#list-repository-events
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/events', {
      owner: owner,
      repo: repository,
      per_page: results
    });

    res.status(200).json({
      message: '🕺 GitHub request ok',
      events: data.length ? data : '🦜 Events not found'
    });
  } catch (error) {
    res.status(500).json({ error: error.message ? error.message : error, message: '🚫 GitHub error' });
  }
}

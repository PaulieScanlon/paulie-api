const { octokit } = require('../../../clients');

export default async function handler(req, res) {
  const {
    query: { owner, repository }
  } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (!owner || !repository) {
      res.status(400).json({ error: 'Bad Request', status: 400, message: '⚠️ Missing owner or repo' });
    }

    // https://docs.github.com/en/rest/reference/repos#get-a-repository
    const { data } = await octokit.request(`GET /repos/{owner}/{repo}`, {
      owner: owner,
      repo: repository
    });

    res.status(200).json({
      message: '🕺 GitHub request ok',
      repo: data ? data : '🦜 Repository not found'
    });
  } catch (error) {
    res.status(500).json({ error: error, message: '🚫 GitHub error' });
  }
}

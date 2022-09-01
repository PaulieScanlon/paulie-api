const { octokit } = require('../../../../../clients');
const { formatDatestamp } = require('../../../../../utils/format-date-stamp');

const format = (data) => {
  return data.map((item) => {
    const { total, week, days } = item;

    return {
      total,
      week,
      date_string: formatDatestamp(new Date(week * 1000)),
      days
    };
  });
};

export default async function handler(req, res) {
  const {
    headers: { authorization },
    query: { owner, repository }
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

    // https://docs.github.com/en/rest/metrics/statistics#get-the-last-year-of-commit-activity
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/stats/commit_activity', {
      owner: owner,
      repo: repository
    });

    res.status(200).json({
      message: '🕺 GitHub request ok',
      commits: data.length ? format(data) : '🦜 Events not found'
    });
  } catch (error) {
    res.status(500).json({ error: error.message ? error.message : error, message: '🚫 GitHub error' });
  }
}

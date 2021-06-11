const { octokit } = require('../clients')

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    const user = await octokit.request('GET /user', {
      name: process.env.GATSBY_GITHUB_USERNAME,
    })

    const repos = await octokit.request('GET /user/repos', {
      name: process.env.GATSBY_GITHUB_USERNAME,
    })

    res.status(200).json({
      user: user.data,
      repos: repos.data,
    })
  } catch {
    res.status(500).json({
      error: 'Ooops server error',
    })
  }
}

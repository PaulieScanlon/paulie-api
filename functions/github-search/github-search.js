const { octokit } = require('../clients')

exports.handler = async (event, context, callback) => {
  const { data } = await octokit.request('GET /search/repositories', {
    q: 'bums in:name,description',
  })

  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({ search: { data } }),
  })
}

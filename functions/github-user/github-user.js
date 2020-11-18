const { octokit } = require('../clients')
//docs
// https://docs.github.com/en/free-pro-team@latest/rest
exports.handler = async (event, context, callback) => {
  // works
  //   const user = await octokit.request('GET /user', {
  //     name: 'pauliescanlon',
  //   })

  //   console.log(user)

  // works
  //   const userRepos = await octokit.request('GET /user/repos', {
  //     name: 'PaulieScanlon',
  //   })

  //   console.log(userRepos)

  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({ search: { search } }),
  })
}

const { octokit } = require('../clients')
// import Cors from 'cors'

// const allowedOrigins = [
//   // undefined allows the GitHub pages build request to succeed
//   undefined,
//   'https://pauliescanlon.github.io',
//   'https://paulieapi.gatsbyjs.io',
// ]

// const cors = Cors({
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error())
//     }
//   },
// })

// const runCorsMiddleware = (req, res) => {
//   return new Promise((resolve, reject) => {
//     cors(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }
//       return resolve(result)
//     })
//   })
// }

export default async function handler(req, res) {
  const { username, results = 5 } =
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body

  res.setHeader('Access-Control-Allow-Origin', '*') // YOLO

  try {
    // https://docs.github.com/en/rest/reference/activity#list-public-events-received-by-a-user
    const { data } = await octokit.request('GET /users/{username}/events', {
      username: username,
      per_page: results,
    })

    res.status(200).json({
      message: '🕺 GitHub request ok',
      events: data.length ? data : '🦜 Events not found',
    })
  } catch {
    res.status(500).json({ error: '🚫 GitHub error' })
  }

  // try {
  //   if (process.env.NODE_ENV === 'production') {
  //     await runCorsMiddleware(req, res)
  //   }

  //   try {
  //     // https://docs.github.com/en/rest/reference/activity#list-public-events-received-by-a-user
  //     const { data } = await octokit.request('GET /users/{username}/events', {
  //       username: username,
  //       per_page: results,
  //     })

  //     res.status(200).json({
  //       message: '🕺 GitHub request ok',
  //       events: data.length ? data : '🦜 Events not found',
  //     })
  //   } catch {
  //     res.status(500).json({ error: '🚫 GitHub error' })
  //   }
  // } catch (error) {
  //   res.status(403).json({ message: '🚫 Request blocked by CORS' })
  // }
}

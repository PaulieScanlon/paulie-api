const { twitter } = require('../clients')
import Cors from 'cors'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const allowedOrigins = [
  'https://paulieapi.gatsbyjs.io',
  'https://paulie.dev',
  'https://www.pauliescanlon.io',
]

const cors = Cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  },
})

const runCorsMiddleware = (req, res) => {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

const convertToMarkdown = async (string) => {
  const response = await remark().use(remarkHtml).process(string)

  return String(response)
}

export default async function handler(req, res) {
  const { username } =
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body

  try {
    if (process.env.NODE_ENV === 'production') {
      await runCorsMiddleware(req, res)
    }
    try {
      if (!username) {
        res.status(400).json({ message: '⚠️ Missing required body params' })
      }

      const { data } = await twitter.get(`users/by/username/${username}`, {
        user: {
          fields:
            'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld',
        },
      })

      const markdown = await convertToMarkdown(data.description)

      res.status(200).json({
        message: '🕺 Twitter request ok',
        user: data ? data : '🦜 Username not found',
        markdown: markdown,
      })
    } catch {
      res.status(500).json({ error: '🚫 Twitter error' })
    }
  } catch (error) {
    res.status(403).json({ message: '🚫 Request blocked by CORS' })
  }
}

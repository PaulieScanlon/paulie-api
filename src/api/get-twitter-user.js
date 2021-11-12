const { twitter } = require('../clients')
import Cors from 'cors'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const convertToMarkdown = async (string) => {
  const response = await remark().use(remarkHtml).process(string)

  return String(response)
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { username } =
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body

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
}

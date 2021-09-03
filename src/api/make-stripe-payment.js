const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import Cors from 'cors'

const allowedOrigins = ['https://www.mdx-embed.com']

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

export default async function handler(req, res) {
  const { success_url, cancel_url, amount, product } = req.body

  try {
    await runCorsMiddleware(req, res)

    const session = await stripe.checkout.sessions.create({
      success_url: success_url,
      cancel_url: cancel_url,
      payment_method_types: ['card'],
      line_items: [
        {
          quantity: 1,
          price_data: {
            unit_amount: amount * 100,
            currency: 'usd',
            product: product,
          },
        },
      ],
      mode: 'payment',
    })

    res.status(200).json({ response: 'Ok', url: session.url })
  } catch (error) {
    res.status(500).json({ response: 'Error', error: error })
  }
}

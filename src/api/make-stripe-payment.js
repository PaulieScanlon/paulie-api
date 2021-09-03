const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import Cors from 'cors'
import { middleware } from '../middleware'

const allowedOrigins = ['https://www.mdx-embed.com']

const runCorsMiddleware = middleware(
  Cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error())
      }
    },
  }),
)

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

    res.status(200).json({ message: 'A ok!', url: session.url })
  } catch (error) {
    res.status(500).json({ message: 'Stripe Error', error: error })
  }
}

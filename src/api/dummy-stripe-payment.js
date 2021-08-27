const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import Cors from 'cors'

const cors = Cors({
  origin: false,
  preflightContinue: true,
  optionsSuccessStatus: 200,
})

const runCorsMiddleware = async (req, res) => {
  await new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        reject(result)
      }
      resolve(result)
    })
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'req.method should be POST' })
  }

  res.setHeader('Access-Control-Allow-Origin', '*')

  const { amount, success_url, cancel_url, product } = req.body

  if (!amount) {
    res.status(400).json({ message: 'No amount', error: 'amount not found on body' })
  }

  if (!success_url) {
    res.status(400).json({ message: 'No success_url', error: 'success_url not found on body' })
  }

  if (!cancel_url) {
    res.status(400).json({ message: 'No cancel_url', error: 'cancel_url not found on body' })
  }

  if (!product) {
    res.status(400).json({ message: 'No product', error: 'product not found on body' })
  }

  try {
    await runCorsMiddleware(req, res)
  } catch (error) {
    res.status(500).json({ message: 'Coors Error', error: error })
  }

  try {
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

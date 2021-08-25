const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'req.method should be POST' })
  }

  const { amount, success_url, cancel_url } = req.body

  if (!amount) {
    res.status(400).json({ message: 'No amount', error: 'amount not found on body' })
  }

  if (!success_url) {
    res.status(400).json({ message: 'No success_url', error: 'success_url not found on body' })
  }

  if (!cancel_url) {
    res.status(400).json({ message: 'No cancel_url', error: 'cancel_url not found on body' })
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
            product: 'prod_K6dGWR54oYDK1q',
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

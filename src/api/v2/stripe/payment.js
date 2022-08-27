const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { success_url, cancel_url, amount, product } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (!success_url || !cancel_url || !amount || !product) {
      res
        .status(400)
        .json({ error: 'Bad Request', status: 400, message: '⚠️ Missing success_url, cancel_url, amount or product' });
    }

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
            product: product
          }
        }
      ],
      mode: 'payment'
    });

    res.status(200).json({ message: '🕺 Stripe checkout created ok', url: session.url });
  } catch (error) {
    res.status(500).json({ error: error, message: '🚫 Stripe checkout error' });
  }
}

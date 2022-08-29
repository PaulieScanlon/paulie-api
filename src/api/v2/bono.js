// Usage
// api/v2/bono?q=Bird

// Response
// {
//   "message": "Bird shirts ok!"
// }

export default async function handler(req, res) {
  const {
    headers: { authorization },
    query: { q }
  } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (
      !authorization ||
      authorization.split(' ')[1] + process.env.PAULIE_API_SECRET !== process.env.PAULIE_API_VALIDATOR
    ) {
      throw new Error('Request failed authorization');
    }

    if (!q) {
      res.status(400).json({ error: 'Bad Request', status: 400, message: '⚠️ Missing q' });
    }
    res.status(200).json({
      message: `${q} shirts ok!`
    });
  } catch (error) {
    res.status(500).json({ error: error.message ? error.message : error, message: '🚫 Bono error' });
  }
}

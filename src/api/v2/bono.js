// Usage
// api/v2/bono?q=Bird

// Response
// {
//   "message": "Bird shirts ok!"
// }

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const {
    query: { q }
  } = req;

  console.log(req.query.q);

  res.status(200).json({
    message: `${q} shirts ok!`
  });
}

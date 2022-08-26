export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.status(200).json({
    message: 'Bird shirts ok! '
  });
}

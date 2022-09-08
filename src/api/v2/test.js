const { formatDatestamp } = require('../../utils/format-date-stamp');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    // throw new Error('throw new Error');
    res.status(200).json({
      message: 'Test request ok!',
      test: {
        foo: 'bar',
        date: formatDatestamp(new Date())
      }
    });
  } catch (error) {
    res.status(500).json({ message: '🚫 Test error', error: error.message ? error.message : error });
  }
}

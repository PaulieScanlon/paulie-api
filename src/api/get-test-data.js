export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  res.status(200).json({
    message: 'A ok! ',
    data: {
      name: 'Paul Scanlon',
      job_title: 'Senior Software Engineer',
      company: 'Gatsby',
    },
  })
}

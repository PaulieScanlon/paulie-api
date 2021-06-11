require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    FUNCTONS: true,
  },
}

const { join } = require('path')

/** @type {import('prettier').Config} */
module.exports = {
  ...require('prettier-config'),
  tailwindConfig: join(__dirname, 'tailwind.config.js')
}

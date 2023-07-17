const { join } = require('path')

module.exports = {
  root: true,
  extends: ['custom'],
  settings: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js')
    },
    next: {
      rootDir: true
    }
  }
}

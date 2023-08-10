/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  experimental: {
    serverActions: true
  },
  webpack: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          handlebars: 'handlebars/dist/handlebars.js'
        }
      }
    }
  }
}

export default config

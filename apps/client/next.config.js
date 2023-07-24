/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  experimental: {
    serverActions: true
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/friends/all',
        permanent: true
      }
    ]
  }
}

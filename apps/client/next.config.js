/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
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

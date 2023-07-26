/** @type {import('next').NextConfig} */
const config = {
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
      },
      {
        source: '/settings',
        destination: '/settings/profile',
        permanent: true
      }
    ]
  }
}

export default config

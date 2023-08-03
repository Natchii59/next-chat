/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  experimental: {
    serverActions: true
  }
}

export default config

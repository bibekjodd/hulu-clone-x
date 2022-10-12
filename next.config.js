/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com','image.tmdb.org']
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig

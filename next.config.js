/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'www.probuilder.com.au',
      'www.bestinteriordesigners.eu',
      'ts-c.com.sa',
    ],
  },
}

module.exports = nextConfig

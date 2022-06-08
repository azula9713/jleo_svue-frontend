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
      'www.ultimatebali.com',
      'static.dezeen.com',
      'nhs-dynamic.secure.footprint.net',
      'images.unsplash.com',
    ],
  },
}

module.exports = nextConfig

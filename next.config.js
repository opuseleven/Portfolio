/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ACCESSTOKEN: process.env.ACCESSTOKEN,
  },
}

module.exports = nextConfig

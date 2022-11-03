/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ACCESSTOKEN: process.env.ACCESSTOKEN,
    API_KEY: process.env.API_KEY,
    TOKEN: process.env.TOKEN
  },
}

module.exports = nextConfig

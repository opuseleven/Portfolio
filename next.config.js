/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ACCESSTOKEN: process.env.ACCESSTOKEN,
    WEATHERAPP_API_KEY: process.env.WEATHERAPP_API_KEY,
    TOKEN: process.env.TOKEN
  },
}

module.exports = nextConfig

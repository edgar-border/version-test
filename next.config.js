/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GREETING: "Hello World",
    REACT_APP_VERSION: process.env.REACT_APP_VERSION,
  },
};

module.exports = nextConfig;

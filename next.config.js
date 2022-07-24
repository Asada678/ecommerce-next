const { withFrameworkConfig } = require("./framework/common/config")

/** @type {import('next').NextConfig} */
const nextConfig = {
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  }
}
console.log('nextConfig:', nextConfig)

module.exports = withFrameworkConfig(nextConfig)
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // turbopack: {
  //   rules: {
  //     "*.svg": {
  //       loaders: ["@svgr/webpack"],
  //       as: "*.jsx",
  //     },
  //   },
  // },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   })
  //   return config
  // },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig

require("dotenv");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/nip/:path*",
        destination: "https://nip.ogn-review.net/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

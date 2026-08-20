const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],

  images: {
    qualities: [25, 50, 75, 80, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        port: "",
        // pathname: '/',
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        // pathname: '/',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
    ];
  },
};

module.exports = withMDX(nextConfig);

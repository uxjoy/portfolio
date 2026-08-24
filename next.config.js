const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],

  images: {
    qualities: [25, 50, 75, 80, 100],
  },
};

module.exports = withMDX(nextConfig);

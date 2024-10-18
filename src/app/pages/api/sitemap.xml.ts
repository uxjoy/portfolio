// pages/api/sitemap.xml.ts

import { NextApiRequest, NextApiResponse } from "next";
// import { getAllBlogPosts } from "../../lib/blog"; // Assume you have this function to fetch all blog posts

const Sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  // const blogPosts = await getAllBlogPosts();

  const baseUrl = "https://www.example.com";
  const staticPages = [
    "/",
    // "/about",
    // "/contact",
    // "/blog",
    // Add more static pages here
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((url, i) => {
        return `
          <url key=${i}>
            <loc>${baseUrl}${url}</loc>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.send(sitemap);
  // res.end();
};

export default Sitemap;

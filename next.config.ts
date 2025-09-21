import type { NextConfig } from "next";

const repoName = 'Fylo'

const nextConfig: NextConfig = {
    output: 'export', // 👈 Outputs a static site
  basePath: `/${repoName}`, // 👈 Sets the project's base path
  assetPrefix: `/${repoName}/`, // 👈 Sets the asset prefix
  images: {
    unoptimized: true, // 👈 Disables Next.js's default image optimization
  },
};

export default nextConfig;

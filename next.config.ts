import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio";

const nextConfig: NextConfig = {
  output: "export",           // generate static HTML in out/
  trailingSlash: true,        // /route -> /route/index.html (works with Pages)
  images: { unoptimized: true }, // no on-the-fly optimizer on GH Pages
  // Needed when hosting at <username>.github.io/portfolio/
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;

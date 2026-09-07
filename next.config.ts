import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES_DEPLOY === 'true';

const nextConfig: NextConfig = {
  basePath: isGitHubPages ? '/marinox' : '',
  assetPrefix: isGitHubPages ? '/marinox' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

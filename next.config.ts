import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES_DEPLOY === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: 'export' as const } : {}),
  assetPrefix: isGitHubPages ? '/marinox' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

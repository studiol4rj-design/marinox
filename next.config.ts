import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES_DEPLOY === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: 'export' as const } : {}),
  basePath: isGitHubPages ? '/marinox' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

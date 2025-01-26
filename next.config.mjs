import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (
    config,
  ) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'app', 'styles')],
    prependData: `@import "helpers";`,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: true,
                titleProp: true,
              },
            }/*, "@svgr/webpack"*/, 'url-loader']
    });

    return config;
  },
  reactStrictMode: true,
}

module.exports = nextConfig

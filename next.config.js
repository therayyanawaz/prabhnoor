/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',

  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      // Pages redirects
      { source: '/about', destination: '/page-about', permanent: true },
      { source: '/services', destination: '/page-services', permanent: true },
      { source: '/services-details', destination: '/page-services-details', permanent: true },
      { source: '/team', destination: '/page-team', permanent: true },
      { source: '/team-details', destination: '/page-team-details', permanent: true },
      { source: '/contact', destination: '/page-contact', permanent: true },
      { source: '/faq', destination: '/page-FAQ', permanent: true },
      { source: '/404', destination: '/page-404', permanent: true },
      
      // Portfolio redirects
      { source: '/gallery', destination: '/portfolio-gallery', permanent: true },
      { source: '/creative', destination: '/portfolio-creative', permanent: true },
      { source: '/creative-carousel', destination: '/portfolio-creative-carousel', permanent: true },
      { source: '/grid', destination: '/portfolio-grid', permanent: true },
      { source: '/masonry', destination: '/portfolio-masonry', permanent: true },
      { source: '/project', destination: '/project-details', permanent: true },
    ];
  },
};

module.exports = nextConfig;

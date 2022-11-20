const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
    scrollRestoration: true,
  },
  async headers() {
    const cacheHeaders = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];
    return [
      { source: "/_next/static/:static*", headers: cacheHeaders },
      { source: "/fonts/:font*", headers: cacheHeaders },
    ];
  },
};

module.exports = withPlugins(
  [
    withBundleAnalyzer,
  ].filter(Boolean),
  nextConfig
);

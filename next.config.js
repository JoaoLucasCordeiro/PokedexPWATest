const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  images: {
    domains: ["raw.githubusercontent.com"],
  }
});
module.exports = nextConfig;

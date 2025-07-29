module.exports = {
  rewrites: async () => [
    {
      destination: "/home",
      source: "/",
    },
    {
      destination: "/admin/index.html",
      source: "/admin",
    },
  ],
  webpack: (config) => {
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

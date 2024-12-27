module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'note.com'], 
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack(config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }, { dev, isServer }: any) {
    if (!dev && !isServer) {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });
    }
    return config;
  },
};
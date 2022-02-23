const webpack = require("webpack");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    url: require.resolve("url"),
    fs: require.resolve("fs"),
    buffer: require.resolve("buffer"),
    assert: require.resolve("assert"),
    crypto: require.resolve("crypto-browserify"),
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    stream: require.resolve("stream-browserify"),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};

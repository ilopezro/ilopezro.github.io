import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

module.exports = {
  resolve: {
    plugins: [new TsconfigPathsPlugin({})],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

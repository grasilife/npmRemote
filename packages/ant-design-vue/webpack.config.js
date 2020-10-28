const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./src/index",
  output: {
    publicPath: "http://localhost:3002/", // New
    pathinfo: true,
  },
  devtool: mode === "production" ? "none" : "source-map",
  optimization: {
    minimize: mode === "production",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
          // cacheDirectory：
          // 默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。
          // 之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)
          cacheDirectory: false,
        },
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name: "application_b",
      library: { type: "var", name: "application_b" },
      filename: "remoteEntry.js",
      exposes: {
        "./SayHelloFromB": "./src/app",
      },
      remotes: {
        application_a: "application_a",
      },
      shared: {
        react: {
          import: "react", // the "react" package will be used a provided and fallback module
          shareKey: "react", // under this name the shared module will be placed in the share scope
          shareScope: "default", // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        "react-dom": {
          singleton: true, // only a single version of the shared module is allowed
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "react-sync": "./src/react-sync-demo.js",
    "react-async": "./src/react-async-demo.js",
    didact: "./src/didact-demo.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: ".",
    open: true,
    openPage: "didact.html"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([{ from: "solar-system.css" }]),
    new HtmlWebpackPlugin({
      title: "Incremental Rendering - React Sync",
      filename: "react-sync.html",
      template: "index.ejs",
      hash: true,
      chunks: ["react-sync"]
    }),
    new HtmlWebpackPlugin({
      title: "Incremental Rendering - React Async",
      filename: "react-async.html",
      template: "index.ejs",
      hash: true,
      chunks: ["react-async"]
    }),
    new HtmlWebpackPlugin({
      title: "Incremental Rendering - Didact Fiber",
      filename: "didact.html",
      template: "index.ejs",
      hash: true,
      chunks: ["didact"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["env", { exclude: ["transform-es2015-classes"] }],
              "react"
            ]
          }
        }
      }
    ]
  }
};

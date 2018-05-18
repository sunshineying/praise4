const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Manifest = require("webpack-manifest");
// 开发版本不压缩

module.exports = {
  entry: {
    index: [path.join(__dirname, "../src/public/js/PraiseButton.es6")],
    tag: [
      path.join(__dirname, "../src/public/js/tag.es6"),
      path.join(__dirname, "../src/public/js/star.es6")
    ]
  },
  output: {
    // path: path.join(__dirname, "../build/public/js/"),  // 两种写法都可以
    // filename: '[name]-[hash:5].js'
    path: path.join(__dirname, "../build/"),
    filename: "public/js/[name]-[hash:5].js"
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(["build/public/*"], {
      root: path.resolve(__dirname, "../")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "dev"
      }
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new ExtractTextPlugin("public/css/[name]-[hash:5].css"), // build文件夹里
    // 提取公共代码块
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "public/js/common/vendor-[hash:5].min.js"
    }),
    new HtmlWebpackPlugin({
      filename: "./views/layout.html",
      template: "src/widget/layout.html",
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "./views/index.html",
      template: "src/views/index.js",
      chunks: ["vendor", "index", "tag"],
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "./widget/index.html",
      template: "src/widget/index.html",
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "./views/star.html",
      template: "src/views/star.js",
      chunks: ["vendor", "index", "tag"],
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "./widget/star.html",
      template: "src/widget/star.html",
      inject: false
    })
    // new Manifest({
    //   cache: [
    //     "./public/css/vendor-[hash:5].css" // 注意这里的写法
    //   ],
    //   //Add time in comments.
    //   timestamp: true,
    //   // 生成的文件名字，选填
    //   // The generated file name, optional.
    //   filename: "cache.manifest",
    //   // 注意*星号前面用空格隔开
    //   network: [" *"],
    //   // manifest 文件中添加注释
    //   // Add notes to manifest file.
    //   headcomment: "praise4",
    //   master: ["./views/layout.html"]
    // })
  ]
};

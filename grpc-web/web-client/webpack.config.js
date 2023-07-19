const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/client.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, '../public'),
      }
    ],
    compress: true,
    port: 8088,
    hot: true,
    open: true,
    liveReload: false,
    watchFiles: ['src/**/*', 'public/**/*'],
  }
};

const common = require('./webpack.config');
const merge = require('webpack-merge');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge.strategy({ plugin: 'append' })(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new FaviconsWebpackPlugin('./assets/bee.png')],
});

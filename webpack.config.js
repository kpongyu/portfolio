const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');

module.exports = {
  plugins: [
    new UglifyJsPlugin()
  ]
}
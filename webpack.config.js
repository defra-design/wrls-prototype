const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const NODE_ENV = 'production'

module.exports = {
  mode: NODE_ENV  === 'development' ? 'development' : 'production',
  entry: './app/assets/javascripts/map/map.js',
  output: {
    path: __dirname,
    filename: './app/assets/javascripts/map/bundle/map.js'
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new webpack.DefinePlugin({
      'NODE_ENV ': {
        OS_API_KEY: JSON.stringify(process.env.OS_API_KEY)
      }
    }),
  ],
};



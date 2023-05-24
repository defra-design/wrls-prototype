const webpack = require('webpack');

const Dotenv = require('dotenv-webpack');


module.exports = {
  
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        OS_API_KEY: JSON.stringify(process.env.OS_API_KEY)
      }
    }),
  ],
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './app/assets/javascripts/map/main.js',
  output: {
    path: __dirname,
    filename: './app/assets/javascripts/map/bundle.js'
  },
};



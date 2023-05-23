const webpack = require('webpack');

const Dotenv = require('dotenv-webpack');


module.exports = {
  
  plugins: [
    new Dotenv()
  ],
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './app/assets/javascripts/map/main.js',
  output: {
    path: __dirname,
    filename: './app/assets/javascripts/map/bundle.js'
  },
};



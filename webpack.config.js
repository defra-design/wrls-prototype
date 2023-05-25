const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv')



dotenv.config({ path: './.env' })
const nodeEnv = process.env.NODE_ENV

module.exports = {
  mode: nodeEnv === 'development' ? 'development' : 'production',
  entry: './app/assets/javascripts/map/map.js',
  output: {
    path: __dirname,
    filename: './app/assets/javascripts/map/bundle.js'
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'nodeEnv': {
        OS_API_KEY: JSON.stringify(process.env.OS_API_KEY)
      }
    }),
  ],
};



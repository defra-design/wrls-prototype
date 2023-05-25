const webpack = require('webpack');
const path = require('path')
const dotenv = require('dotenv')


dotenv.config({ path: './.env' })
const nodeEnv = process.env.NODE_ENV


module.exports = {
  mode: nodeEnv === 'development' ? 'development' : 'production',
//  devtool: !inDev ? false : 'source-map',
 
  //mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './app/assets/javascripts/map/map.js',
  output: {
    path: __dirname,
    filename: './.tmp/public/javascripts/application.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        OS_API_KEY: JSON.stringify(process.env.OS_API_KEY)
      }
    }),
  ],
};



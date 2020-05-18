/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    enforceExtension: false,
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loaders: ['cache-loader', 'ts-loader'] },
      { test: /\.graphql|gql?$/, loader: ['cache-loader', 'graphql-tag/loader'] },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.build'),
    filename: '[name].js',
  },
}

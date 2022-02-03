const path = require('path')

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.ts', '.tsx']
        },
        use: [{
          loader: 'ts-loader'
        }]
      }
    ]
  }
}

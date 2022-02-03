const path = require('path')

// js loader
exports.jsLoader = () => ({
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
})

exports.devServer = () => ({
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000
  }
})

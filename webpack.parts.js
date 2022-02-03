const path = require('path')
const tailwindcss = require('tailwindcss')()
const autoprefixer = require('autoprefixer')()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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

// tailwind
exports.tailwind = () => ({
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [tailwindcss]
    }
  }
})

// extractCss
exports.extractCSS = ({ options = {}, loaders = [] } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options
          },
          'css-loader'
        ].concat(loaders),
        sideEffects: true
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
})

// auto prefixing
exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [autoprefixer]
    }
  }
})

// webpack-dev-server
exports.devServer = () => ({
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000
  }
})

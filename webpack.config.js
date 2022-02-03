const { merge } = require('webpack-merge')
const path = require('path')
const parts = require('./webpack.parts')

const cssLoaders = [parts.autoprefix(), parts.tailwind()]

const commonConfig = merge([
  { entry: ['./src/index.tsx'] },
  {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js'
    }
  },
  parts.jsLoader(),
  parts.extractCSS({ loaders: cssLoaders })
])

const developmentConfig = parts.devServer()

const getConfig = (mode) => {
  switch (mode) {
    case 'development':
      return merge(commonConfig, developmentConfig, { mode })
    case 'production':
      return merge(commonConfig, { mode })
    default:
      throw new Error(`Trying to use an unkown mode: ${mode}`)
  }
}

module.exports = (env, argv) => getConfig(argv.mode)

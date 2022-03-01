const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  devServer: {
    https: true
  },
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // Work around for Buffer is undefined:
      // https://github.com/webpack/changelog-v5/issues/10
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      })
      // new webpack.ProvidePlugin({
      //   process: 'process/browser'
      // })
    ]
  }
})

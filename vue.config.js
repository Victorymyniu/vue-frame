// All configuration item explanations can be find in https://cli.vuejs.org/config/
'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Template' // page title

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false, //eslint关闭
  productionSourceMap: false,
  devServer: {
    port: '8080',
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: `http://111.99.91.38:8080`,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}

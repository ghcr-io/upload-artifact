const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 3000,
    proxy: 'http://localhost:4000'
  }
})

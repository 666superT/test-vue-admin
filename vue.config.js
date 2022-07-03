const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  devServer:{
    open:true,
    https:false,
    host:'localhost',
    port:8080,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_BASE_URL,
        changeOrigin:true,
        pathRewrite:{
          ['^'+process.env.VUE_APP_BASE_API]:''
        }
      }
    }
  }
})

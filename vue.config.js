const title = '朱田丽'
const port = 8989
const path = require('path')

// 将相对路径转换成绝对路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/best-vue',
  outputDir: '/best-vue/',
  devServer: {
    port,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'https://www.easy-mock.com/mock/5d391aa5ef0cd27fc034db6d/example_copy',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: {
    name: title
  },
  chainWebpack (config) {
    // 设置svg规则排除icons目录中svg文件处理
    config.module.rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
      // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({symbolId: 'icon-[name]'})  // 使用图标名称
      .end()
  }
}
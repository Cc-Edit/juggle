const path = require('path');
//构建工具类
const buildUtil = require('./src/assets/js/buildUtil');

const serveApi = require('./src/assets/js/serveApi');

//html 插入文件插件
const InsertHtmlPlugin = require('./src/assets/js/insertHtmlPlugin');

// 接口mock地址
const mockPath = "http://rap.d.renrenauto.com/";

//资源打包后的引用地址
const publicPath = process.env.NODE_ENV === 'production'
  ? '' // ? 'https://s.domain.com/ '
  : '/';

//请求转发配置
const proxyOptions = {
  '/auth': {
    target: mockPath,
    pathRewrite: {'^/api': ''},
    changeOrigin: true,
    secure: false
  },
  '/api': {
    target: mockPath,
    changeOrigin: true,
    secure: false
  }
};

module.exports = {
  pages: buildUtil.getEntry(),
  productionSourceMap: false,
  crossorigin: 'anonymous',
  publicPath: publicPath,  //CDN节点地址
  configureWebpack: {
    plugins: [
      new InsertHtmlPlugin()
    ]
  },
  devServer: {
    overlay: {    //显示编译错误和警告
      warnings: true,
      errors: true
    },
    watchOptions: {
      ignored: [/node_modules/, /public/]
    },
    before: serveApi.before,
    contentBase: path.join(__dirname, 'public'),
    open: false, //不自动打开浏览器
    compress: true, //启用Gzip
    proxy: proxyOptions
  }
};
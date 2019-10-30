const insertHtml = {
  //百度统计
  baidu: `var _hmt = _hmt || [];(function() { var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();`,
  //lib-flexible : https://github.com/amfe/lib-flexible/blob/2.0/index.js
  remjs: `!function(e,t){function n(){t.body?t.body.style.fontSize=12*o+"px":t.addEventListener("DOMContentLoaded",n)}function d(){var e=i.clientWidth/10;i.style.fontSize=e+"px"}var i=t.documentElement,o=e.devicePixelRatio||1;if(n(),d(),e.addEventListener("resize",d),e.addEventListener("pageshow",function(e){e.persisted&&d()}),o>=2){var a=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",a.appendChild(s),i.appendChild(a),1===s.offsetHeight&&i.classList.add("hairlines"),i.removeChild(a)}}(window,document);`
};

function InsertHtmlPlugin(options) {
  // Configure your plugin with options...
  this.options = options;
}

InsertHtmlPlugin.prototype.apply = function (compiler) {
  compiler.hooks.compilation.tap('InsertHtmlPlugin', function(compilation){
    compilation.hooks['htmlWebpackPluginBeforeHtmlProcessing'].tapAsync('InsertHtmlPlugin', (data, callback) => {
      data.html =  data.html.replace('</head>', `<script>
      ${insertHtml.baidu}
      ${insertHtml.remjs}</script></head>`);
      callback(null, data);
    });
  })
};

module.exports = InsertHtmlPlugin;
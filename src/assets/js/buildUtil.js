/**
 * node 编译辅助
 * */
const path = require('path');
const glob = require('glob');

exports.getEntry = function (fileName){
  var globPath = `./src/htmls/template/${fileName ? fileName : '*'}.html`,
    entries = {},
    basename;

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    entries[basename] = {
      // page 的入口
      entry: `src/htmls/main/${basename}.js`,
      // 模板来源
      template: `src/htmls/template/${basename}.html`,              //'src/htmls/template/index.html',
      // 在 dist/index.html 的输出
      filename: path.basename(entry),  //'index.html'
    };
  });
  return entries;
};


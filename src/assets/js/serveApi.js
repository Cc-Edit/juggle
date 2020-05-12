/**
 * node 服务端接口
 * */
const fs         = require('fs');
const bodyParser = require('body-parser');

var eagleConfig  = {
  logPath    : '/Users/xiaoqiang/Documents/gitHub/juggle/public/pageConfig/'
};

exports.before = function(app) {
  app.post('/api/save',  bodyParser.urlencoded({extended: false}), function(req, res) {
    var data = req.body;
    for(let key in data){
      data = key;
      break;
    }
    if(!data){
      console.log("请求异常...");
      res.status(200).json({ status: 200, isOk:false, msg:"请求方式异常" });
      return;
    }
    try{
      data = JSON.parse(data);
    }catch(e){
      console.log("格式异常...");
      res.status(200).json({ status: 200, isOk:false, msg:"格式异常" });
      return;
    }
    var logFilePath = eagleConfig.logPath +  'config-local-' + data.pageCode + '.js';
    let fd = fs.openSync(logFilePath, 'w');
    fs.writeFileSync(fd, 'var __pageConfig__ = ' + JSON.stringify(data.pageData, null, 2));
    fs.closeSync(fd);
    res.status(200).json({ status: 200, isOk:true, msg:"" });
  });
};


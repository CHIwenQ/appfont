const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const JSON5 = require('json5');

function getJsonFile(fileAddress){
  //读取json文件
  var json = fs.readFileSync(path.join(__dirname,fileAddress),'utf-8')
//解释并返回
  var obj = JSON5.parse(json);
  return obj
}
//返回一个函数
module.exports = function (app) {
  if (process.env.MOCK == 'true'){
    //监听http请求
    app.get('/device/deviceInfo/solo',function (rep,res) {
      //每次响应请求时读取mock data的 json文件
      //getJsonFile方法 定义了如何读取json文件并解析成数据对象
      var json = getJsonFile('./deviceInfo/deviceInfoSolo.json5')
      //将json传入Mock.mock方法中，生成的数据返回给浏览器
      res.json(Mock.mock(json));
    });
    app.get('/device/deviceInfo/multi',function (rep,res) {
      //每次响应请求时读取mock data的 json文件
      //getJsonFile方法 定义了如何读取json文件并解析成数据对象
      var json = getJsonFile('./deviceInfo/deviceInfoMulti.json5')
      //将json传入Mock.mock方法中，生成的数据返回给浏览器
      res.json(Mock.mock(json));
    });
  }
}

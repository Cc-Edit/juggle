import Vue from 'vue'
import axiosConfig from './axiosConfig'

/**
 * 公共样式、主题样式引入位置
 * */

import "@/assets/style/base.less"; //公用css类

/**
 * 公共点击
 * */
const FastClick = require('fastclick');
FastClick.attach(document.body);

/**
 * 公共函数、变量
 * */
const Util = {
  /**
   * 环境变量
   * */
  $isDev: process.env.NODE_ENV === 'development',
  /**
   * 为空判断
   * */
  $isNullOrEmpty(obj) {
    return (obj !== 0 || obj !== "0") && (obj === null || obj === undefined || obj === "" || obj === "null" || typeof obj === "undefined");
  },
  /**
   * 获取js文件
   * */
  $getJsFile(src, callback, error){
    var doc = window.document;
    var script = doc.createElement("script");
    script.src = src;
    script.async = true;

    script.onload = typeof callback == 'function' ? callback : null;
    script.onerror = function(){
      return typeof error === 'function' ? error() : null;
    };

    doc.head.appendChild(script);
    return script;
  },
  /**
   *  获取Url参数
   * */
  $urlParse() {
    let url = window.location.search;
    let _obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g; //匹配 ?或者&  +  非?或者&一个或多个 +  =  +  非?或者&一个或多个 + 全局
    let arr = url.match(reg); //切割为两个数组  ['?id=12345', '&a=b']
    if (arr) {
      arr.forEach(function(item) {
        let tempArr = item.substring(1).split("=");
        let key = decodeURIComponent(tempArr[0]);
        let val = decodeURIComponent(tempArr[1]);
        _obj[key] = val;
      });
    }
    return _obj;
  }
};


/**
 * 导入axios配置
 * */
Object.assign(Util, axiosConfig);

Object.assign(Vue.prototype, Util);
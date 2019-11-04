import Vue from 'vue'
import App from '../pages/report.vue'
import '../pwa/reportServiceWorker'
import store from '../store/report.js'
require("@/assets/js/common");
Vue.config.productionTip = false;
const { $getJsFile, $urlParse, $isDev } = Vue.prototype;
const pageCode = $urlParse().pageCode || '0000'; //页面编码

//页面配置文件地址
let configUrl = ($isDev ? `/pageConfig/config-${pageCode}.js` : `/pageConfig/config-${pageCode}.js`);

$getJsFile(`${configUrl}`,() => {
  let pageData =  window.__embedconfig__;
  new Vue({
    store,
    propsData: pageData,
    components: { App },
    // router: router(Vue),
  }).$mount("#app");
},() =>{
  new Vue({
    store,
    propsData: { emptyPage: true, BodyConfig: {}, pageConfig: {} },
    components: { App },
    // router: router(Vue),
  }).$mount("#app");
});

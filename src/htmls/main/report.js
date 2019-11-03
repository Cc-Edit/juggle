import Vue from 'vue'
import App from '../pages/report.vue'
import '../pwa/reportServiceWorker'
import store from '../store/report.js'
require("@/assets/js/common");

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

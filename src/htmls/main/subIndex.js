import Vue from 'vue'
import App from '../pages/subIndex.vue'
import '../pwa/registerServiceWorker'
import router from '../router/subIndex.js'
import store from '../store/subIndex.js'
require("@/assets/js/common");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

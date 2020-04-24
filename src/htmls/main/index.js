import Vue from 'vue'
import App from '../pages/index.vue'
import '../pwa/registerServiceWorker'
import router from '../router/index.js'
import ViewUI from 'view-design';
import store from '../store/index.js'
import 'view-design/dist/styles/iview.css';
require("@/assets/js/common");
Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

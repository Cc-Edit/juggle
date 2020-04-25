import Vue from 'vue'
import App from '../pages/index.vue'
import '../pwa/registerServiceWorker'
import router from '../router/index.js'
import ViewUI from 'view-design';
import store from '../store/index.js'
import 'view-design/dist/styles/iview.css';

import BlockImg from "@/components/block/BlockImg.vue";
import BlockSwiper from "@/components/block/BlockSwiper.vue";
import BlockImgCard from "@/components/block/BlockImgCard.vue";
import ContainerFlexBox from "@/components/container/ContainerFlexBox.vue";
import ContainerTab from "@/components/container/ContainerTab.vue";
import ContainerList from "@/components/container/ContainerList.vue";
import PublicBubble from "@/components/public/PublicBubble.vue";
import PublicDraw from "@/components/public/PublicDraw.vue";

const components = {
  BlockImg,
  BlockImgCard,
  BlockSwiper,
  ContainerFlexBox,
  ContainerTab,
  ContainerList,
  PublicBubble,
  PublicDraw
};

Vue.mixin({
  components: components
});

require("@/assets/js/common");
Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

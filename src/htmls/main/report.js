import Vue from 'vue'
import App from '../pages/report.vue'
import '../pwa/reportServiceWorker'
import store from '../store/report.js'
import { Lazyload } from 'vant';


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
Vue.use(Lazyload, {});
Vue.config.productionTip = false;

const { $getJsFile, $urlParse, $isDev } = Vue.prototype;
const pageCode = $urlParse().pageCode || ''; //页面编码

//页面配置文件地址
let configUrl = ($isDev ? `/pageConfig/config-local-${pageCode}.js` : `pageConfig/config-${pageCode}.js`);

$getJsFile(`${configUrl}`,() => {
  let pageData =  window.__pageConfig__ || { emptyPage: true, pageConfig: {} };
  new Vue({
    store,
    propsData: pageData,
    components: { App },
    render: h => h(App),
  }).$mount("#app");
},() =>{
  new Vue({
    store,
    propsData: { emptyPage: true, pageConfig: {} },
    components: { App },
    render: h => h(App),
  }).$mount("#app");
});
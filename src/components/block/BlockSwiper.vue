<template>
  <div class="bl-sw-body" :style="styleOptions">
    <van-swipe :autoplay="autoplay"
               :duration="duration"
               :initial-swipe="initialSwipe"
               :loop="loop"
               indicator-color="white">
      <van-swipe-item v-for="(image, index) in bannerData" :key="index">
        <img v-lazy="image" >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Swipe, SwipeItem } from 'vant';

  const components = {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  };

  export default {
    name: 'BlockSwiper',
    components: components,
    props: {
      prop: {
        default: () => {
          return {};
        }
      },
      childItem: {
        default: () => {
          return [];
        }
      },
      baseData: {
        default: () => {
          return {};
        }
      }
    },
    data() {
      let {
        autoplay = 1000,
        duration = 500,
        initialSwipe = 0,
        loop = true,
        dataKeyChain = "",
        styleOptions = {}
      } = this.prop;
      return {
        autoplay: autoplay,
        duration: duration,
        initialSwipe: initialSwipe,
        loop: loop,
        dataKeyChain: dataKeyChain,
        styleOptions: styleOptions
      };
    },
    computed: {
      bannerData(){
        return this.$getChainData(this.baseData, this.dataKeyChain);
      }
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {}
  };
</script>
<style lang="less">
  .bl-sw-body{
    .van-swipe-item{
      color: #fff;
      font-size: 20px;
      text-align: center;
      >img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

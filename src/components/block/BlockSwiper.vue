<template>
  <div class="bl-sw-body" :style="styleOptions">
    <van-swipe v-bind="swiperProp"
               indicator-color="white">
      <van-swipe-item v-for="(image, index) in bannerData" :key="index">
        <template v-if="swiperType === 'img'">
          <img v-lazy="image" >
        </template>
        <template v-else>
          {{image}}
        </template>
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
        swiperProp = {},
        dataKeyChain = "",
        swiperType = "img",
        styleOptions = {}
      } = this.prop;
      return {
        swiperProp,
        dataKeyChain,
        swiperType,
        styleOptions
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
      overflow: hidden;
      >img{
        width: 100%;
        height: 116px;
      }
    }
  }
</style>

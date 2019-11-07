<template>
  <div class="bl-sw-body">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Swipe, SwipeItem } from 'vant';

  const components = {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
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
          return [];
        }
      }
    },
    data() {},
    computed: {},
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
      line-height: 150px;
      color: #fff;
      font-size: 20px;
      text-align: center;
      background-color: #66c6f2;
    }
  }
</style>

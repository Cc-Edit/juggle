<template>
  <div class="public-bubble" :style="styleOptions">
    <img v-lazy="$getChainData(baseData, dataKeyChain)" >
    <span v-if="!$isNullOrEmpty(bubbleProp.showText)">{{bubbleProp.showText}}</span>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'ComponentName',
    components: {},
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
        bubbleProp = {},
        dataKeyChain = '',
        styleOptions = {}
      } = this.prop;
      return {
        bubbleProp,
        dataKeyChain,
        styleOptions,
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {}
  };
</script>
<style lang="less">
  .public-bubble{
    position: fixed;
    width: 60px;
    height: 60px;
    >img{
      width: 100%;
      height: auto;
    }
    >span{
      font-size: 12px;
      display: block;
      text-align: center;
      width: 100%;
      color: #333;
    }
  }
</style>

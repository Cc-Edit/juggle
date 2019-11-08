<template>
  <div>
    <div :class="styleOptions || 'col-item'">
      <img v-lazy="imgSrc" >
      <span v-if="!$isNullOrEmpty(text)">{{text}}</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'BlockImg',
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
        styleOptions = {},
        dataKeyChain = '',
        text = '',
      } = this.prop;

      return {
        text,
        dataKeyChain,
        styleOptions
      };
    },
    computed: {
      imgSrc(){
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
  .col-item{
    >img{
      width: 100%;
      height: 100px;
    }
  }
  .sm-img{
    >img{
      width: 61px;
      height: 48px;
    }
    >span{
      font-size: 11px;
      text-align: center;
      display: block;
      width: 100%;
      color: rgb(102, 102, 102);
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 14px;
    }
  }
</style>

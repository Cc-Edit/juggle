<template>
  <div :style="styleOptions">

    <van-row v-for="(rowItem, index) in flexOptions" v-bind="rowItem.rowProp" :key="index">
      <van-col v-for="(colItem, colInd) in rowItem.colData" :key="colInd" v-bind="colItem.colProp">
        <div>
          <img v-lazy="$getChainData(flexData, colItem.dataKeyChain)" >
          <span :style="colItem.styleOptions || {}">{{colItem.colName}}</span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Row, Col } from 'vant';

  const components = {
    [Row.name]: Row,
    [Col.name]: Col
  };

  export default {
    name: 'BlockFlexBox',
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
        flexOptions = {},
        dataKeyChain = "",
        styleOptions = {}
      } = this.prop;

      return {
        styleOptions: styleOptions,
        dataKeyChain: dataKeyChain,
        flexOptions: flexOptions
      }
    },
    computed: {
      flexData(){
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
<style lang="less"></style>

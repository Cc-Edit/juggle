<template>
  <div :style="styleOptions">
    <van-row v-for="(rowItem, index) in flexOptions" v-bind="rowItem.rowProp" :key="index">
      <van-col v-for="(colItem, colInd) in rowItem.childItem" :key="colInd" v-bind="rowItem.colProp || {}">
        <component :is="colItem.templateId"
                   :prop="colItem.prop"
                   :baseData="baseData"
                   :childItem="colItem.childItem"></component>
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
    name: 'ContainerFlexBox',
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
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {}
  };
</script>
<style lang="less"></style>

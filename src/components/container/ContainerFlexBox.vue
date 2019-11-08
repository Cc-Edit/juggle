<template>
  <div class="container-flex" :style="styleOptions">
    <div class="van-hairline--bottom" v-if="!$isNullOrEmpty(title)">
      <h4>{{title}}</h4>
      <span class="container-flex-subtitle">{{subTitle}}</span>
    </div>
    <van-row v-for="(rowItem, index) in flexOptions" v-bind="rowItem.rowProp" :key="index">
      <van-col v-for="(colItem, colInd) in rowItem.childItem" :key="colInd" v-bind="(rowItem.colProp || {})[colInd]">
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
        title = "",
        subTitle = "",
        styleOptions = {}
      } = this.prop;

      return {
        title,
        subTitle,
        styleOptions,
        dataKeyChain,
        flexOptions
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
  .container-flex{
    .van-row{
      background-color: #fff;
      padding-bottom: 10px;
    }
    h4{
      display: inline-block;
      overflow: hidden;
      font-size: 14px;
      height: auto;
      width: auto;
      color: rgb(51, 51, 51);
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 17px;
      margin-left: 12px;
    }
  }
  .container-flex-subtitle{
    display: inline-block;
    overflow: hidden;
    font-size: 12px;
    height: auto;
    width: auto;
    margin-left: 4px;
    color: rgb(153, 153, 153);
    place-self: flex-end center;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 15px;
  }
</style>

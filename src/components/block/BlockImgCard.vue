<template>
  <div>
    <div class="block-itemcard" :style="styleOptions">
      <van-card
          :num="baseData.num"
          :price="baseData.price"
          :desc="baseData.desc"
          :title="baseData.title"
          :thumb="baseData.thumb">
        <div slot="tags">
          <van-tag plain type="danger" v-for="(item, index) in baseData.tags || []" :key="index">{{item}}</van-tag>
        </div>
      </van-card>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Card, Tag } from 'vant';

  const components = {
    [Card.name]: Card,
    [Tag.name]: Tag
  };

  export default {
    name: 'BlockImgCard',
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
        styleOptions = {},
        dataKeyChain = '',
      } = this.prop;

      return {
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
  .block-itemcard{
    overflow: hidden;
    border-bottom: 1px solid #d9d9d9;
    >img{
      width: 100%;
      height: auto;
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

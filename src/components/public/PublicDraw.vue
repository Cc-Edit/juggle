<template>
  <div class="container-tab" :style="styleOptions">
    <van-popup
        v-model="shopPublicDraw"
        v-bind="drawProp"
        @closed="closeHandle"
        :style="drawStyle">


      <div v-if="showButton" class="container-tab-bottom">
        <van-row type="flex" justify="space-between">
          <van-col span="12" v-if="!$isNullOrEmpty(cancelButtonText)">
            <van-button type="default" size="small">{{cancelButtonText}}</van-button>
          </van-col>
          <van-col span="12" v-if="!$isNullOrEmpty(successButtonText)">
            <van-button type="info" size="small">{{successButtonText}}</van-button>
          </van-col>
        </van-row>
      </div>
    </van-popup>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Popup, Row, Col, Button } from 'vant';

  const components = {
    [Col.name]: Col,
    [Row.name]: Row,
    [Popup.name]: Popup,
    [Button.name]: Button
  };

  export default {
    name: 'ComponentName',
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
        drawProp = {},
        styleOptions = {},
        drawStyle = {},
        successButtonText = '',
        cancelButtonText = '',
        showButton = false,
      } = this.prop;

      return {
        drawProp,
        successButtonText,
        cancelButtonText,
        showButton,
        styleOptions,
        drawStyle,
      }
    },
    computed: {
      shopPublicDraw: {
        get: function () {
          return this.$store.state.shopPublicDraw;
        },
        set: function () {
          this.$store.commit('switchPublicDraw');
        }
      }
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      closeHandle(){}
    }
  };
</script>
<style lang="less">
  .container-tab-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    button{
      width: 100%;
    }
  }
</style>

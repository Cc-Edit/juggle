<template>
  <div class="container-tab" :style="styleOptions">
    <van-popup
        v-model="shopPublicDraw">内容</van-popup>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Popup } from 'vant';

  const components = {
    [Popup.name]: Popup
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
      } = this.prop;

      return {
        drawProp,
        styleOptions,
        drawStyle,
      }
    },
    computed: {
      shopPublicDraw () {
        return this.$store.state.shopPublicDraw;
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

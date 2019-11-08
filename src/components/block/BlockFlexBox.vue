<template>
  <div :style="styleOptions">
    <van-row type="flex">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
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
    props: {},
    data() {
      return {
        styleOptions:{}
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

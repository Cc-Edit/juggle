<template>
  <div >
    <div class="serve-overview">
      <iframe :src="`/report.html?pageCode=${pageCode}`"  frameborder="0" width="375px" height="667px" ></iframe>
    </div>
    <div class="serve-left">
      <Tabs>
        <TabPane label="基础设置" icon="md-cog">标签一的内容</TabPane>
        <TabPane label="页面搭建" icon="ios-expand">标签二的内容</TabPane>
        <TabPane label="构建" icon="md-construct">标签三的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'develop',
    data() {
      return {
        current: 0,
        pageCode:''
      }
    },
    components: {}
  }
</script>
<style lang="less">
  .serve-left{
    margin-left: 530px;
    padding-top: 20px;
  }
  .serve-overview{
    float: left;
    display: inline-block;
    padding: 108px 67px 121px 80px;
    background-image: url('~@/assets/images/iphone-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-sizing: content-box;
  }
</style>
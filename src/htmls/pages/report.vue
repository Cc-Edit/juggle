<template>
  <div id="app">
    <div class="juggle-noauth" v-if="noAuthPage">
      <img src="../../assets/images/noauth.png" alt="">
      <p>暂无权限</p>
    </div>
    <div class="juggle-noauth" v-else-if="emptyPage">
      <img src="../../assets/images/noauth.png" alt="">
      <p>{{emptyText}}</p>
    </div>
    <van-button type="default"> 默认按钮</van-button>
  </div>
</template>
<script >
  'use strict';
  import { Button } from 'vant';
  export default {
    components: { [Button.name]:Button },
    name: 'App',
    data() {
      let {baseConfig = {}, pageConfig = {}, emptyPage = false} = this.$root.$options.propsData;
      let pageData = {
        baseList: [],  //页面数据列表
        emptyText: "页面配置异常",  //列表为空时的提示文案
        emptyPage: emptyPage,  //是否展示异常页面
        noAuthPage: true,  //无权限页面
        isDrawer: false,  //侧边栏状态
        query: {},    //查询条件
        DrawerConfig: {},    //查询条件
      };
      pageData = Object.assign(pageData, baseConfig, pageConfig);
      return pageData
    }
  }
</script>
<style lang="less">
  .juggle-noauth{
    font-size: 0.3rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    height: 12rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-pack:center;/* IE 10 */
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-align:center;/* IE 10 */
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    >img{
      width: 2rem;
    }
    >p{
      margin: 0.1rem 0 0 0;
      color: #999;
      font-size: 0.28rem;
    }
  }
</style>

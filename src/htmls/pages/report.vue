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
    <div v-else :style="bodyStyle">
      <div v-for="(item, ind) in bodyConfig" :key="ind">
        <component :is="item.templateId"
                   :prop="item.prop"
                   :baseData="baseData"
                   :childItem="item.childItem"></component>
      </div>
    </div>
  </div>
</template>
<script >
  'use strict';
  export default {
    components: {},
    name: 'App',
    data() {
      let {pageConfig = {}, emptyPage = false, bodyStyle = {}} = this.$root.$options.propsData;
      let pageData = {
        emptyText: "页面配置异常",  //列表为空时的提示文案
        emptyPage: emptyPage,  //是否展示异常页面
        bodyStyle: bodyStyle,  //是否展示异常页面
        noAuthPage: false,  //无权限页面
        isDrawer: false,  //侧边栏状态
        query: {},    //查询条件
        DrawerConfig: {},    //查询条件
        baseData: {},    //页面数据
      };
      pageData = Object.assign(pageData, pageConfig);
      return pageData
    },
    computed: {},
    watch: {},
    created() {
      this.getNewList()
    },
    mounted() {},
    destroyed() {},
    methods: {
      /**
       * 获取报表数据
       * */
      getNewList(_query = {}){
        let {query, origin} = this.dataSource;
        if(this.$isNullOrEmpty(origin)){
          return;
        }

        let {originUrl, originMethod, dataKeyChain} = origin;
        let params = {params: Object.assign({},query, _query)};
        return this.$send({
          url: originUrl,
          method: originMethod,
          params
        })
          .then(res => {
            if(res.status === 200){
              this.baseData = this.$getChainData(res.data, dataKeyChain);
            }
          })
          // .catch(err => {
          //   console.log("系统异常，请稍后再试", err);
          // });
      }
    }
  }
</script>
<style lang="less">
  .juggle-noauth{
    font-size: 0.3rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    height: 375px;
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

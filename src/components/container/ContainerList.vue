<template>
  <div class="container-list" :style="styleOptions">
    <van-list v-model="loading" :finished="finished" v-bind="listProp" @load="onLoad">
        <div class="container-list-item" v-for="(listItem, index) in listData" :key="index">
          <component v-for="(child, cind) in childItem"
                     :key="cind"
                     :is="child.templateId"
                     :prop="child.prop"
                     :baseData="listItem"
                     :childItem="child.childItem"></component>
        </div>
    </van-list>
  </div>
</template>
<script type="text/ecmascript-6">
  import { List } from 'vant';

  const components = {
    [List.name]: List
  };

  export default {
    name: 'ContainerList',
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
        dataSource = null,
        listProp = {},
        dataKeyChain = ''
      } = this.prop;

      return {
        loading: false,
        finished: false,
        pageNum: 1,
        pageSize: 10,
        dataSource,
        dataKeyChain,
        styleOptions,
        listProp,
        listData: []
      }
    },
    computed: {},
    watch: {
      baseData(){
        if(this.$isNullOrEmpty(this.dataSource) && !this.$isNullOrEmpty(this.dataKeyChain)) {
          //不配置dataSource时直接使用传入的baseData
          this.loading = false;
          this.finished = true;
          this.$set(this.listProp, 'finished-text', '');
          this.$nextTick(() => {
            this.listData = this.$getChainData(this.baseData, this.dataKeyChain)
          });
        }
      }
    },
    created() {
      if(!this.$isNullOrEmpty(this.dataSource)){
        let query = {
          pageNum: 1,
          pageSize: 10
        };
        this.getListDta(query);
      }else if(!this.$isNullOrEmpty(this.dataKeyChain)){
        //不配置dataSource时直接使用传入的baseData
        this.loading = false;
        this.finished = true;
        this.$set(this.listProp, 'finished-text', '');
        this.listData = this.$getChainData(this.baseData, this.dataKeyChain)
      }else{
        this.loading = false;
        this.finished = true;
        this.$set(this.listProp, 'finished-text', '配置异常....');
      }
    },
    mounted() {},
    destroyed() {},
    methods: {
      getListDta(_query){
        const {query, origin} = this.dataSource;
        if(this.$isNullOrEmpty(origin)){
          this.loading = false;
          this.finished = true;
          this.$set(this.listProp, 'finished-text', '配置异常...');
          return
        }
        const {originUrl, originMethod, dataKeyChain} = origin;
        let params = {params: Object.assign({},query, _query)};
        return this.$send({
          url: originUrl,
          method: originMethod,
          params
        }).then(res => {
          if(res.status === 200){
            this.listData = [...this.listData, ...this.$getChainData(res.data, dataKeyChain)];
            this.loading = false;
          }
        })
      },
      onLoad(){
        this.loading = true;
        setTimeout(() => {
          this.getListDta();
        }, 1000);
      }
    }
  };
</script>
<style lang="less"></style>

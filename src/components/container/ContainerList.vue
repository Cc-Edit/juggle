<template>
  <div class="container-list" :style="styleOptions">
    <van-list v-model="loading" :finished="finished" v-bind="listProp" @load="onLoad">
        <div class="container-list-item" v-for="(listItem, index) in listData" :key="index">
          <component v-for="(child, cind) in childItem"
                     :key="cind"
                     :is="child.templateId"
                     :prop="child.prop"
                     :baseData="baseData"
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
        listProp = {}
      } = this.prop;

      return {
        loading: false,
        finished: false,
        styleOptions,
        listProp,
      }
    },
    computed: {
      listData(){
        return []
      }
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      onLoad(){

      }
    }
  };
</script>
<style lang="less"></style>

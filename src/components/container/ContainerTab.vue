<template>
  <div class="container-tab" :style="styleOptions">
    <van-tabs v-model="defaultActive" v-bind="tabsProp">
      <van-tab v-for="(tabItem, index) in tabsOptions" :key="index"
               :style="tabItem.styleOptions"
               :title="tabItem.tabTitle">
        <div class="container-tab-content" v-for="(child, cind) in tabItem.childItem" :key="cind">
          <component :is="child.templateId"
                     :prop="child.prop"
                     :baseData="baseData"
                     :childItem="child.childItem"></component>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Tab, Tabs } from 'vant';

  const components = {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  };

  export default {
    name: 'ContainerTab',
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
        tabsProp = {},
        tabsOptions = [],
        defaultActive = 0,
        styleOptions = {}
      } = this.prop;

      return {
        defaultActive,
        styleOptions,
        tabsOptions,
        tabsProp
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
  .container-tab-content{
    background-color: #fff;
    padding: 10px 0;
  }
</style>

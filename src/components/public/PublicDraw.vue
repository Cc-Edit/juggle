<template>
  <div class="container-draw" :style="styleOptions">
    <van-popup
        v-model="shopPublicDraw"
        v-bind="drawProp"
        @closed="closeHandle"
        :style="drawStyle">
      <div class="container-draw-item"
           v-for="(queryItem, inde) in queryOptions"
           :key="inde">
        <b>{{queryItem.name}}</b>
        <!--选择器-->
        <div class="container-draw-item-body" v-if="queryItem.queryType === 'select'">
              <div v-if="queryItem.type === 'radio'">
                <van-checkbox-group v-model="query[queryItem.key]">
                  <van-row justify="space-around">
                    <van-col :offset="1" :span="queryItem.span" v-for="(subItem, subI) in queryItem.subItem" :key="subI">
                      <van-checkbox :name="subItem.value" checked-color="#07c160">{{subItem.name}}</van-checkbox>
                    </van-col>
                  </van-row>
                </van-checkbox-group>
              </div>
              <div v-else-if="queryItem.type === 'checkbox'">
                <van-radio-group v-model="query[queryItem.key]">
                  <van-row justify="space-around">
                    <van-col :offset="1" :span="queryItem.span" v-for="(subItem) in queryItem.subItem" :key="subItem.value">
                      <van-radio :name="subItem.value" checked-color="#07c160">{{subItem.name}}</van-radio>
                    </van-col>
                  </van-row>
                </van-radio-group>
              </div>
        </div>
      </div>
      <!--childen-->
      <div class="container-draw-childen" v-for="(child) in childItem" :key="child.templateId">
        <component :is="child.templateId"
                   :prop="child.prop"
                   :baseData="baseData"
                   :childItem="child.childItem"></component>
      </div>

      <div v-if="showButton" class="container-draw-bottom">
        <van-row type="flex" justify="space-between">
          <van-col span="12" v-if="!$isNullOrEmpty(cancelButtonText)">
            <van-button @click="cancelHandle" type="default" size="small">{{cancelButtonText}}</van-button>
          </van-col>
          <van-col span="12" v-if="!$isNullOrEmpty(successButtonText)">
            <van-button @click="submitHandle" type="info" size="small">{{successButtonText}}</van-button>
          </van-col>
        </van-row>
      </div>
    </van-popup>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Popup, Row, Col, Button, RadioGroup, Radio, Checkbox, CheckboxGroup, DatetimePicker } from 'vant';

  const components = {
    [Col.name]: Col,
    [Row.name]: Row,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Popup.name]: Popup,
    [DatetimePicker.name]: DatetimePicker,
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
        queryOptions = [],
        successButtonText = '',
        cancelButtonText = '',
        showButton = false,
      } = this.prop;

      return {
        query: {},
        drawProp,
        successButtonText,
        queryOptions,
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
        set: function () {}
      }
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      closeHandle(){},
      cancelHandle(){
        this.$store.commit('switchPublicDraw');
      },
      submitHandle(){
        this.$store.commit('switchPublicDraw');
      }
    }
  };
</script>
<style lang="less">
  .container-draw-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    button{
      width: 100%;
    }
  }
  .container-draw-item{
    >b{
      color: #323232;
      font-size: 16px;
      font-weight: bold;
      display: block;
      width: 100%;
      padding-left: 10px;
      margin: 10px 0;
    }
    .van-radio{
      margin-bottom: 5px;
      padding-left: 10px;
      color: #fff;
      border: 1px solid #d8d8d8;
      height: 31px;
    }
    .van-checkbox{
      margin-bottom: 5px;
      padding-left: 10px;
      color: #fff;
      border: 1px solid #d8d8d8;
      height: 31px;
    }
    .van-checkbox__label{
      font-size: 15px;
    }
    .van-radio__label{
      font-size: 15px;
    }
  }
</style>

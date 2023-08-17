<template>
  <div >
    <div class="serve-overview">
      <div class="serve-over-menu">
        <p class="serve-over-menu-item">
          <Icon type="md-bulb" :color="configStatus.isOriginSuccess ? '#0cf52f': '#ec0c0c'"/>
          <span>接口状态</span>
        </p>
        <p class="serve-over-menu-item">
          <Icon type="md-bulb" :color="configStatus.isOriginDataSuccess ? '#0cf52f': '#ec0c0c'"/>
          <span>数据状态</span>
        </p>
        <p class="serve-over-menu-item">
          <Icon type="md-bulb" :color="configStatus.isValidJson ? '#0cf52f': '#ec0c0c'"/>
          <span>配置状态</span>
        </p>
        <p class="serve-over-menu-item">
          <Icon type="md-bulb" :color="configStatus.isComponentsSuccess ? '#0cf52f': '#ec0c0c'"/>
          <span>组件状态</span>
        </p>
        <p class="serve-over-menu-item" color="#547fd8" @click="reloadIframe">
          <Icon type="ios-refresh-circle-outline"></Icon>
          <span>刷新页面</span>
        </p>
      </div>
      <iframe ref="iframeView" :src="`/report.html?pageCode=${pageCode}`"  frameborder="0" width="375px" height="667px" ></iframe>
    </div>
    <div class="serve-left">
      <Tabs :value="tabName" name="parent">
        <TabPane label="基础设置" name="default" icon="md-cog">
          <Card>
            <p slot="title" style="text-align: left">页面信息</p>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" label-position="left">
              <Row :gutter="30">
                <Col span="12">
                  <FormItem label="页面编码：">
                    <Input v-model="pageCode" placeholder="请输入页面编码"/>
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="页面标题：" prop="pageTitle">
                    <Input v-model="formValidate.pageTitle" placeholder="请输入页面标题"/>
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="作者：" prop="author">
                    <Input v-model="formValidate.author" placeholder="请输入作者姓名"/>
                  </FormItem>
                </Col>
                <Col span="12" style="text-align: left">
                  <FormItem label="创建时间：" prop="createData">
                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.createData"></DatePicker>
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Card style="margin-top: 10px">
            <p slot="title" style="text-align: left">数据源信息</p>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="110" label-position="left">
              <Row :gutter="30">
                <Col span="12">
                  <FormItem label="数据源地址：" prop="originUrl">
                    <Input v-model="formValidate.originUrl" placeholder="请输入数据源地址"/>
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="请求方式：" prop="originMethod" style="text-align: left">
                    <Select v-model="formValidate.originMethod" style="width:200px">
                      <Option value="get" :key="1">GET</Option>
                      <Option value="post" :key="2">POST</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col span="12" style="text-align: left">
                  <FormItem label="数据键：" prop="pageTitle">
                    <Input v-model="formValidate.dataKeyChain" placeholder="请输入数据键"/>
                  </FormItem>
                </Col>
              </Row>
              <div class="serve-err" v-if="!$isNullOrEmpty(errorMsg.originMsg)">
                <Divider orientation="left">错误信息：</Divider>
                <p style="text-align: left">{{errorMsg.originMsg}}</p>
              </div>
            </Form>
          </Card>
          <div>
            <Divider orientation="left">提示：</Divider>
            <p style="text-align: left;font-size: 14px">数据会自动保存，操作过程中请勿刷新页面</p>
          </div>
        </TabPane>
        <TabPane label="页面搭建" name="pageBody" icon="ios-expand">
          <div class="serve-components">
            <Card style="width: 100%; height: 707px">
              <p slot="title">组件列表</p>
              <div>
                <Tabs type="card" name="child" >
                  <TabPane class="serve-list-group-booy" tab="child" label="容器组件">
                    <span v-if="ComponentsObj.container.length === 0" class="serve-empty">暂无数据</span>
                    <draggable class="serve-list-group" :list="ComponentsObj.container"
                               :group="{ name: 'people', pull: 'clone', put: false }">
                      <div class="serve-list-group-item"
                           v-for="(element) in ComponentsObj.container"
                          :key="element.name">
                        <h4 class="serve-list-group-item-title">{{element.name}}</h4>
                        <p class="serve-list-group-item-desc">简介：{{element.description}}</p>
                        <component :is="element.templateId"
                                   :prop="getDefaultProp(element.options)"
                                   :baseData="element.baseData"
                                   :childItem="element.childItem || []"></component>
                      </div>
                    </draggable>
                  </TabPane>
                  <TabPane class="serve-list-group-booy"  tab="child"  label="内容组件">
                    <span v-if="ComponentsObj.blockCom.length === 0" class="serve-empty">暂无数据</span>
                    <draggable class="serve-list-group"
                               :list="ComponentsObj.blockCom"
                               :group="{ name: 'people', pull: 'clone', put: false }">
                      <div class="serve-list-group-item"
                           v-for="(element) in ComponentsObj.blockCom"
                           :key="element.name">
                        <h4 class="serve-list-group-item-title">{{element.name}}</h4>
                        <p class="serve-list-group-item-desc">简介：{{element.description}}</p>
                        <component :is="element.templateId"
                                   :prop="getDefaultProp(element.options)"
                                   :baseData="element.baseData"
                                   :childItem="[]"></component>
                      </div>
                    </draggable>
                  </TabPane>
                  <TabPane class="serve-list-group-booy"  tab="child"  label="公共组件">
                    <span v-if="ComponentsObj.publicCom.length === 0" class="serve-empty">暂无数据</span>
                    <draggable class="serve-list-group"
                               :list="ComponentsObj.publicCom"
                               :group="{ name: 'people', pull: 'clone', put: false }">
                      <div class="serve-list-group-item"
                           v-for="(element, index) in ComponentsObj.publicCom"
                           :key="index+'**'">
                        <h4 class="serve-list-group-item-title">{{element.name}}</h4>
                        <p class="serve-list-group-item-desc">简介：{{element.description}}</p>
                        <component :is="element.templateId"
                                   :prop="getDefaultProp(element.options)"
                                   :baseData="element.baseData"
                                   :childItem="[]"></component>
                      </div>
                    </draggable>
                  </TabPane>
                  <TabPane class="serve-list-group-booy"  tab="child"  label="表单组件">
                    <span v-if="ComponentsObj.formCom.length === 0" class="serve-empty">暂无数据</span>
                    <draggable class="serve-list-group"
                               :list="ComponentsObj.formCom"
                               :group="{ name: 'people', pull: 'clone', put: false }">
                      <div class="serve-list-group-item"
                           v-for="(element, index) in ComponentsObj.formCom"
                           :key="index+'**'">
                        <h4 class="serve-list-group-item-title">{{element.name}}</h4>
                        <p class="serve-list-group-item-desc">简介：{{element.description}}</p>
                        <component :is="element.templateId"
                                   :prop="getDefaultProp(element.options)"
                                   :baseData="element.baseData"
                                   :childItem="[]"></component>
                      </div>
                    </draggable>
                  </TabPane>
                  <TabPane class="serve-list-group-booy"  tab="child"  label="操作组件">
                    <span v-if="ComponentsObj.actionCom.length === 0" class="serve-empty">暂无数据</span>
                    <draggable class="serve-list-group"
                               :list="ComponentsObj.actionCom"
                               :group="{ name: 'people', pull: 'clone', put: false }">
                      <div class="serve-list-group-item"
                           v-for="(element, index) in ComponentsObj.actionCom"
                           :key="index+'**'">
                        <h4 class="serve-list-group-item-title">{{element.name}}</h4>
                        <p class="serve-list-group-item-desc">简介：{{element.description}}</p>
                        <component :is="element.templateId"
                                   :prop="getDefaultProp(element.options)"
                                   :baseData="element.baseData"
                                   :childItem="[]"></component>
                      </div>
                    </draggable>
                  </TabPane>
                </Tabs>
              </div>
            </Card>
          </div>
          <div class="serve-pageBock">
            <Card style="width: 100%; height: 707px">
              <p slot="title">页面结构</p>
              <div class="serve-pagebody">
                <draggable class="serve-list-group" :list="bodyConfig" group="people">
                    <div :class="`serve-list-group-item ${activePageItem === `${element.templateId}-${index}` ? 'active' : ''}`"
                         v-for="(element, index) in bodyConfig"
                         @click="activePageItem = `${element.templateId}-${index}`"
                        :key="element.name">
                      <component :is="element.templateId"
                                 :prop="getDefaultProp(element.options)"
                                 :baseData="element.baseData"
                                 :childItem="[]"></component>
                    </div>
                </draggable>
                <span v-if="bodyConfig.length === 0" class="serve-empty">将组件拖拽到此列表进行搭建</span>
              </div>
            </Card>
          </div>
          <div class="serve-detail">
            <Card style="width: 100%; height: 707px">
              <p slot="title">详细设置</p>
              <div>

              </div>
            </Card>
          </div>
        </TabPane>
        <TabPane label="JSON预览" name="jsonText" icon="md-construct">
          <pre class="serve-pre">{{outerJson.pageConfigStr}}</pre>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import ComponentsObj from '../../assets/js/allComponentsConfig'

  export default {
    name: 'develop',
    components: {draggable},
    data() {
      return {
        list1: [
          { name: "John", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 }
        ],
        list2: [],
        ComponentsObj,
        drag: false,
        activePageItem:'',
        tabName:'pageBody',
        current: 0,
        pageCode:'test',
        errorMsg:{
          originMsg: ''
        },
        bodyConfig:[

        ],
        list: [
          {
            id: 1,
            label: "Item A1"
          },
          {
            id: 2,
            label: "Item A2"
          },
          {
            id: 2,
            label: "Item A2"
          },
          {
            id: 2,
            label: "Item A2"
          },
          {
            id: 2,
            label: "Item A2"
          },
        ],
        configStatus:{
          isValidJson: false,
          isOriginSuccess: false,
          isOriginDataSuccess: false,
          isComponentsSuccess: false
        },
        formValidate: {
          pageTitle: 'Juggle',
          author: 'isjs.cn',
          originUrl: '/mock/0001.json',
          originMethod: 'get',
          dataKeyChain: 'content',
          createData: '2020-04-24'
        },
        ruleValidate: {
          pageTitle: [
            { required: true, message: '页面标题不能为空', trigger: 'blur' }
          ],
          originUrl: [
            { required: true, message: '数据源不能为空', trigger: 'blur' }
          ],
          originMethod: [
            { required: true, message: '请求方式不能为空', trigger: 'blur' }
          ],
          dataKeyChain: [
            { required: true, message: '数据键不能为空', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '页面标题不能为空', trigger: 'blur' }
          ],
          createData: [
            { required: true, type: 'date', message: '页面标题不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          name: "description",
          disabled: false,
          pull: 'clone',
          emptyInsertThreshold: 40,
          put: false
        };
      },
      pageOptions() {
        return {
          animation: 200,
          name: "description",
          disabled: false,
          //
          // pull: 'clone',
          // put: false,
          // ghostClass: "serve-ghost"
        };
      },
      outerJson(){
        let dataSource = {
          "query": {
            "publishStatus":"3"
          },
          "origin": {
            "originUrl": this.formValidate.originUrl,
            "originMethod": this.formValidate.originMethod,
            "dataKeyChain": this.formValidate.dataKeyChain
          }
        }
        let bodyConfig = this.bodyConfig;
        let pageConfig = {
          "pageTitle": this.formValidate.pageTitle,
          "author": this.formValidate.author,
          "PM": "文强",
          "createData": this.formValidate.createData,
          "bodyStyle":{},
          "pageConfig": {
            "dataSource":dataSource,
            "bodyConfig": bodyConfig
          }
        }
        return {
          pageConfig,
          pageConfigStr: JSON.stringify(pageConfig, null, 2)
        }
      }
    },
    watch: {
      'formValidate.originUrl'(){
        this.checkOrigin();
      },
      'formValidate.originMethod'(){
        this.checkOrigin();
      },
      'formValidate.dataKeyChain'(){
        this.checkOrigin();
      },
    },
    created() {
      this.checkOrigin();
    },
    methods: {
      getDefaultProp(options){
        let resultObj = {};
        options.map((item) => {
          if( item.type === 'json'){
            resultObj[item.key] = JSON.parse(item.defaultValue);
          }else{
            resultObj[item.key] = item.defaultValue;
          }
        });
        return resultObj;
      },
      checkOrigin(){
        if(this.$isNullOrEmpty(this.formValidate.originUrl) ||
          this.$isNullOrEmpty(this.formValidate.originMethod) ||
          this.$isNullOrEmpty(this.formValidate.dataKeyChain)){
          this.configStatus.isOriginSuccess = false;
          this.configStatus.isOriginDataSuccess = false;
          this.configStatus.isComponentsSuccess = false;
          return;
        }

        this.$send({
          url: this.formValidate.originUrl,
          method: this.formValidate.originMethod,
          params: Object.assign({})
        })
        .then(res => {
          this.errorMsg.originMsg = '';
          this.configStatus.isOriginSuccess = true;
          if(res.status === 200){
            if(!this.$isNullOrEmpty(this.$getChainData(res.data, this.formValidate.dataKeyChain))){
              this.configStatus.isOriginDataSuccess = true;
              this.errorMsg.originMsg = '';
            }else{
              this.configStatus.isOriginDataSuccess = false;
              this.errorMsg.originMsg = '数据解析错误，请检查数据键配置';
            }
          }else{
            this.configStatus.isOriginSuccess = false;
            this.errorMsg.originMsg = `接口状态错误：${res.status}`;
          }
        })
        .catch(err => {
          this.configStatus.isOriginSuccess = false;
          this.errorMsg.originMsg = err;
          console.log("系统异常，请稍后再试", err);
        });
      },
      reloadIframe(){
        this.$send({
          url: '/api/save',
          method: 'post',
          params: JSON.stringify({pageData: this.outerJson.pageConfig, pageCode: this.pageCode})
        })
        .then(() => {
          this.$refs['iframeView'].contentWindow.location.reload(true);
        })
        .catch(err => {
          console.log("系统异常，请稍后再试", err);
          this.$refs['iframeView'].contentWindow.location.reload(true);
        });


      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .serve-ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .serve-list-group {
    min-height: 567px;
  }
  .serve-list-group-item {
    cursor: move;
    position: relative;
    display: block;
    padding: 10px 20px;
    background-color: rgba(172,172,172,0.1);
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 5px;
    margin-bottom: 10px;
    .serve-list-group-item-title{
      font-size: 15px;
      font-weight: bold;
      text-align: left;
      line-height: 20px;
      color: #666;
    }
    .serve-list-group-item-desc{
      font-size: 13px;
      text-align: left;
      line-height: 25px;
      color: #999;
    }
  }
  .serve-list-group-item.active{
    border: 1px solid #1e46e1;
    box-shadow: 0 0 10px -2px #1e46e1;
  }
  .serve-list-group-item i {
    cursor: pointer;
  }
  .serve-pageBock{
    width: 375px;
    height: 707px;
    float: left;
    display: inline-block;
    overflow: scroll;
    margin-right: 20px;
  }
  .serve-detail{
    width: 500px;
    height: 707px;
    float: left;
    display: inline-block;
    overflow: scroll;
  }
  .serve-components{
    width: 400px;
    height: 707px;
    display: inline-block;
    float: left;
    margin-right: 20px;
    overflow: scroll;
  }
  .serve-empty{
    font-size: 13px;
    line-height: 20px;
    height: 20px;
    padding: 10px;
    text-align: center;
    color:#999;
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
  }
  .serve-list-group-booy{
    height: 585px;
    overflow: scroll;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 200px;
  }
  .serve-pagebody{
    height: 650px;
    overflow: scroll;
  }
</style>
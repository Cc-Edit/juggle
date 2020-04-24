<template>
  <div >
    <div class="serve-overview">
      <div class="serve-over-menu">
        <p class="serve-over-menu-item">
          <Icon type="md-bulb" :color="configStatus.isOriginSuccess ? '#0cf52f': '#ec0c0c'"/>
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
      <Tabs>
        <TabPane label="基础设置" icon="md-cog">
          <Card>
            <p slot="title" style="text-align: left">页面信息</p>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" label-position="left">
              <Row :gutter="30">
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
            </Form>
          </Card>
          <div>
            <Divider orientation="left">提示：</Divider>
            <p style="text-align: left">数据会自动保存，操作过程中请勿刷新页面</p>
          </div>
        </TabPane>
        <TabPane label="页面搭建" icon="ios-expand">标签二的内容</TabPane>
        <TabPane label="JSON预览" icon="md-construct">
          <pre class="serve-pre">{{outerJson}}</pre>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'develop',
    components: {},
    data() {
      return {
        current: 0,
        pageCode:'',
        configStatus:{
          isValidJson: false,
          isOriginSuccess: false,
          isComponentsSuccess: false
        },
        formValidate: {
          pageTitle: 'Juggle',
          author: 'isjs.cn',
          originUrl: 'http://juggle.isjs.cn/mock/0001.json',
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
        let bodyConfig = [];
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

        return JSON.stringify(pageConfig, null, 2);
      }
    },
    methods: {
      reloadIframe(){
        this.$refs['iframeView'].contentWindow.location.reload(true);
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
<style lang="less">
  .serve-over-menu-item{
    padding: 10px 0;
    width: 100%;
    margin-bottom: 30px;
    >span{
      width: 100%;
      font-size: 13px;
      color: #666;
      text-align: center;
      display: inline-block;
    }
    .ivu-icon{
      font-size: 30px;
      margin-bottom: 5px;
    }
  }
  .serve-over-menu{
    width: 75px;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    top: 108px;
    right: -40px;
    bottom: 121px;
    border-radius: 10px;
  }
  .serve-left{
    margin-left: 550px;
    padding: 20px 20px 0 0;
    height: 898px;
    position: relative;
  }
  .serve-overview{
    position: relative;
    margin-left: -40px;
    float: left;
    display: inline-block;
    padding: 108px 67px 121px 80px;
    background-image: url('~@/assets/images/iphone-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-sizing: content-box;
  }
  .serve-pre{
    text-align: left;
    line-height: 20px;
    font-size: 13px;
  }
</style>
<template>
  <div id="app" class="serve-layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="serve-layout-logo">
            Juggle
          </div>
          <div class="serve-layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              控制台
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-power" />
              退出
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                容器组件
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                键值对组件
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                公共组件
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '10px 10px 0'}">
          <Content :style="{padding: '24px',margin: '5px 5px 0', minHeight: '580px', background: '#fff'}">
            <div class="serve-overview">

            </div>

          </Content>
        </Layout>
      </Layout>
      <Footer class="layout-footer-center">2019-2020 &copy; www.isjs.cn</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {}
    },
    //使用watch 监听$router的变化
    //如果to索引大于from索引,判断为前进状态,反之则为后退状态
    watch: {}
  }
</script>
<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .serve-layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .serve-layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color: #fff;
    line-height: 30px;
    font-weight: bold;
    font-size: 30px;
  }
  .serve-layout-nav{
    margin: 0 auto;
    margin-right: 20px;
    float: right;
  }
  .serve-overview{
    width: 400px;
    height: 700px;
    background-image: url('~@/assets/images/iphone-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>

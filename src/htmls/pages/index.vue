<template>
  <div id="app" class="serve-layout">
    <Layout>
      <Header  :style="{ width: '100%', zIndex: 99}">
        <Menu mode="horizontal" theme="dark" :active-name="activeName">
          <div class="serve-layout-logo">
            Juggle
          </div>
          <div class="serve-layout-nav">
            <MenuItem name="develop" to="/develop">
              <Icon type="ios-navigate"></Icon>
              开发界面
            </MenuItem>
            <MenuItem name="develop" to="/backend">
              <Icon type="ios-navigate"></Icon>
              数据源配置
            </MenuItem>
            <MenuItem name="review" to="/review">
              <Icon type="ios-navigate"></Icon>
              应用列表
            </MenuItem>
            <MenuItem name="build" to="/build">
              <Icon type="ios-navigate"></Icon>
              打包配置
            </MenuItem>
            <MenuItem name="user" to="/user">
              <Icon type="ios-navigate"></Icon>
              个人中心
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-power" />
              退出
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Layout :style="{padding: '10px 10px 0'}">
          <Content :style="{margin: '5px 5px 0', minHeight: '580px', background: '#fff'}">
            <transition name="fade" mode="out-in">
              <router-view/>
            </transition>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        activeName:'develop'
      }
    },
    //使用watch 监听$router的变化
    //如果to索引大于from索引,判断为前进状态,反之则为后退状态
    watch: {
    }
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

</style>

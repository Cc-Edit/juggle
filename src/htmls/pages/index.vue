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
  .ivu-layout-content{
   overflow: scroll;
  }
  .serve-err{
    color: #e52c2c;
    .ivu-divider{
      color: #e52c2c;
    }
  }
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
    width: 1350px;
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

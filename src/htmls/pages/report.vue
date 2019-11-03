<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: ''
      }
    },
    //使用watch 监听$router的变化
    //如果to索引大于from索引,判断为前进状态,反之则为后退状态
    watch: {
      $route(to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
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
</style>

<template>
  <div id="app">
    <loadingAmiComponent></loadingAmiComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import loadingAmiComponent from './components/common/loadingAmi'
export default {
  name: 'App',
  components: {loadingAmiComponent}
}
</script>

<style lang="less">
//全局CSS配置
  body, h1, p, input, div, table, tr, td, a {
    padding: 0;
    margin: 0;
    text-decoration: none;
    border: 0;
  }

  body, html, #app {
    width: 100%;
    height: 100%;
    font-family: 'Microsoft Yahei';
  }
</style>

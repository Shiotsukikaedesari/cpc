<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  }
</style>

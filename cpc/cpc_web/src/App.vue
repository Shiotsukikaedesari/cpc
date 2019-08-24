<template>
  <div id="app">
    <!-- 加载loading组件 -->
    <loadingAmiComponent></loadingAmiComponent>
    <!-- 信息提示组件 -->
    <!-- 信息确定组件 -->
    <!-- 警告组件 -->
    <!-- 主要的网页视图router层 -->
    <router-view></router-view>
    <!-- 登录窗口 -->
    <!-- <loginComponent></loginComponent> -->
    <!-- 下拉导航 -->
    <!-- 左侧导航 -->
    <!-- 右侧导航 -->
  </div>
</template>

<script>
import loadingAmiComponent from './components/common/loadingAmi'
import loginComponent from './components/login'
export default {
  name: 'App',
  components: {
    loadingAmiComponent,
    loginComponent
  }
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

  input {
    outline: none;
  }

  .icon {
  width: 20px;
  height: 20px;
  vertical-align: -2.6px;
  fill: currentColor;
  overflow: hidden;
}
</style>

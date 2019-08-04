<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(this.axios)
  }
}
</script>

<style lang="less" scoped>
  div {
    background: black;
    > img {
      width: 100px;
      height: 100px;
    }
  }
</style>


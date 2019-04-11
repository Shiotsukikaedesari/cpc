<template>
  <div id="app" :style="{width: calWidth+'px',height: calHeight+'px'}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted:function(){
    this.calWidth = window.innerWidth;
    this.calHeight = window.innerHeight;
  },
  data(){
    return {
      calWidth: '',
      calHeight: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>

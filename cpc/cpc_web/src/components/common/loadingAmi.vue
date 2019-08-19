<template>
    <div class="container" v-show="show">
      <img src="static/image/LoadingGif2.gif" alt="">
    </div>
</template>

<script>
import Bus from '../../assets/js/bus'
export default {
  name: 'LoadingAmi',
  data () {
    return {
      show: true
    }
  },
  methods: {

  },
  mounted () {
    let component = this
    Bus.$on('showLoadingAmi', msg => {
      console.log(`通过Bus接收到了${msg}`)
      component.show = msg
    })
  }
}
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    background: radial-gradient(circle,black 0, rgb(8, 3, 42) 70% ,rgba(29, 5, 45, 0.8) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 999;
    > img {
      width: 300px;
    }
  }
</style>

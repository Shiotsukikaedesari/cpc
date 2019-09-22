<template>
    <div class="container">
      <div class="bilibili-live"></div>
    </div>
</template>

<script>
export default {
  name: 'bilibili',
  data () {
    return {
      liveData: '', // B站直播接口数据
      containerLoading: false
    }
  },
  methods: {
    init () {
      let component = this
      // 请求B站直播接口
      this.axios.get('/bilibili/live').then(res => {
        if (res.status === 200) {
          console.log(res)
          component.liveData = res
          component.containerAmi()
        } else {

        }
      })
    },
    containerAmi () {
      let component = this
      setTimeout(() => {
        component.containerLoading = true
      }, 1000)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" scoped>

</style>

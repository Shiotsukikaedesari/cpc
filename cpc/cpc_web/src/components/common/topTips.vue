<template>
    <div class="container">
        <div class="box">
            <div class="logo">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-check-circle-fill"></use>
                </svg>
            </div>
            <div class="message" v-text="msg"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'topTips',
  data () {
    return {
      type: 'success',
      msg: '测试msg~'
    }
  },
  methods: {
    /**
     * @param type 类型：success, error, warning, info
     * @param msg 信息
     */
    topTips (type, msg) {
      this.type = type
      this.msg = msg
    }
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
    .container {
        > .box {
            > .logo {

            }
            > .message {

            }
        }
    }
</style>

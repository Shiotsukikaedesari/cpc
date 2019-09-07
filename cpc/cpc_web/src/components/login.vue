<template>
    <div class="container flex-center">
      <div class="form-box">
        <formValidComponent></formValidComponent>
      </div>
    </div>
</template>

<script>
import formValidComponent from './common/formValid'
export default {
  name: 'login',
  components: {formValidComponent}
}
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    > .form-box {
      width: 40%;
      height: 30%;
      border-radius: 8px;
      background: white;
      z-index: @loginZIndex;
    }
  }
</style>

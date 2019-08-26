<template>
    <div :class="{'container': true, 'containerLoading': containerLoading}">
        <div class="header-image">
            <img src="static/image/userHeader.jpg" alt="">
        </div>
        <div class="person-level flex-center">
            <span>LV6</span>
        </div>
        <div class="person-name">汐月枫尘</div>
        <div class="person-exprience"></div>
    </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'personMessage',
  data () {
    return {
      containerLoading: false
    }
  },
  methods: {
    containerAmi () {
      let component = this
      setTimeout(() => {
        component.containerLoading = true
      }, 200)
    }
  },

  mounted () {
    console.log(2)
    this.containerAmi()
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';
    .container {
        position: fixed;
         top: 5px;
        left: -100px;
        z-index: @personMessageZIndex;
        transition: all 1500ms ease;
        > .header-image {
            position: absolute;
            overflow: hidden;
            width: 100px;
            height: 100px;
            top: 0;
            left: 0;
            border: 2px solid @themeColor;
            box-shadow: 0 0 5px @themeColor;
            background: white;
        }
        > .person-level {
            position: absolute;
            top: 80px;
            left: 85px;
            z-index: @personMessageZIndex + 1;
            background: red;
            border: 0;
            border-radius: 3px;
            > span {
                display: inline-block;
                padding: 3px 5px;
                color: white;
                font-size: 12px;
                font-weight: 900;text-shadow: 0 0 2px white;
            }
        }
        > .person-name {
            position: absolute;
            top: 0px;
            left: 120px;
            color: white;
            letter-spacing: 10px;
            font-size: 24px;
            padding: 10px 0 10px 10px;
            text-align: center;
            text-shadow: 0 0 5px @themeColor;
            white-space: nowrap;
            border-top: 4px solid @themeColor;
            cursor: pointer;
            transition: all 1s linear;
            &:hover {
                color: @themeColor;
                text-shadow: 0 0 4px white;
            }
        }

        > .person-exprience {
            position: absolute;
            top: 82px;
            left: 130px;
            height: 20px;
            width: 200px;
            background: @themeColor;
        }
    }
    .containerLoading {
        left: 5px;
    }
</style>

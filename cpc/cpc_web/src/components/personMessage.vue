<template>
    <div :class="{'container': true, 'containerLoading': containerLoading}">
        <div class="stage">
            <div class="box">
              <div class="header-image box-left">
                <img src="static/image/userHeader.jpg" alt="">
              </div>
              <div class="box-right">
                <div class="person-exprience"></div>
                <div class="person-name">Shiotsuki_Kaedesari</div>
                <div class="person-level">
                    <div>
                      <svg class="icon icon-style" aria-hidden="true">
                        <use xlink:href="#icon-man"></use>
                      </svg>
                      <span>LV6</span>
                    </div>
                </div>
              </div>
            </div>
        </div>
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
    this.containerAmi()
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';
    .container {
        position: fixed;
         top: 1%;
        left: -100px;
        z-index: @personMessageZIndex;
        transition: all 1500ms ease;
        > .stage {
          perspective: 1000px;
          > .box {
            display: flex;
            // flex-direction: column;
            transform-style: preserve-3d;
            transform-origin: 0% 200%;
            transform: rotateY(20deg);
            background: rgba(0, 0, 0, 0.6);
            padding: 10px;
            transition: all 1500ms ease;
            cursor: pointer;
            box-shadow: 0 0 12px @themeColor;
            &:hover {
              transform: rotateY(0);
              box-shadow: 0 0 12px white;
            }
            > .header-image {
              overflow: hidden;
              width: 100px;
              height: 100px;
              border: 3px solid @themeColor;
              box-shadow: 0 0 12px white;
              margin-right: 20px;
              transition: all 1500ms ease;
              &:hover {
                border: 3px solid white;
                box-shadow: 0 0 12px @themeColor;
              }
            }
            > .box-right {
              border: 3px solid rgba(0, 0, 0, 0);
              height: 100px;
              > .person-exprience {
                width: 100px;
                height: 30px;
                background: white;
              }
              > .person-name {
                margin: 10px 0;
                font-size: 22px;
                color: white;
                transition: all 1500ms ease;
                &:hover {
                  color: @themeColor;
                  text-shadow: 0 0 8px white;
                }
              }
              > .person-level {
                display: flex;
                align-items: center;
                color: white;
                transition: all 1500ms ease;
                &:hover {
                    background: white;
                    color: @themeColor;
                  }
                > div {
                  display: inline-block;
                  > .icon-style {
                    color: rgb(51, 187, 255);

                  }
                }
              }
            }
          }
        }
    }
    .containerLoading {
        left: 1%;
    }
</style>

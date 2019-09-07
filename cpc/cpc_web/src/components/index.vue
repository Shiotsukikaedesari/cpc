<template>
    <div class="container">
      <div class="video-play"  v-show="showLinkStart">
        <div  @click="videoPlay">LINK START</div>
      </div>
        <div class="video">
          <video src="static/index/enjoy_my_life.mp4" loop>
            您的浏览器不支持本视频的播放哦(Ｔ▽Ｔ)
          </video>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
import Bus from '../assets/js/bus'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      browserWidth: '',
      borwserHeight: '',
      actVideo: false,
      showLinkStart: true
    }
  },
  methods: {
    // 视频播放click
    videoPlay () {
      let component = this
      // 隐藏link start
      let $videoPlay = $('.video-play')
      $videoPlay.animate({opacity: 0}, 2000)
      setTimeout(() => {
        component.showLinkStart = false
        console.log('隐藏完成，返回值')
        component.$emit('loadingDesktop', true)
      }, 2200)
      let video = document.querySelector('video')
      if (this.actVideo === true) {
        return false
      }
      this.actVideo = true
      video.muted = false
      video.volume = 0
      video.play()

      let timers = setInterval(() => {
        if (video.volume > 0.5) {
          video.volume = 0.5
          clearInterval(timers)
        } else {
          video.volume += 0.1
        }
      }, 500)
      // 检测登录
      // TODO: 是否登录接口
    },
    // 将视频加载完成的通知传递给兄弟组件
    hideLoadingAmi () {
      console.log('完成触发')
      Bus.$emit('showLoadingAmi', false)
    }
  },
  mounted () {
    // 监听视频加载
    let video = document.querySelector('video')
    video.addEventListener('canplaythrough', () => {
      console.log('视频准备就绪')
      this.hideLoadingAmi()
    })
  }
}
</script>

<style lang="less" scoped>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    > .video-play {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      background: radial-gradient(circle,black 0, rgb(8, 3, 42) 70% ,rgba(29, 5, 45, 0.8) 100%);
      align-items: center;
      justify-content: center;
      z-index: 1;
      > div {
        font-size: 28px;
        text-shadow: 0 0 6px rgb(157, 157, 157);
        color: white;
        text-shadow: 0 0 0 rgb(255, 255, 255);
        letter-spacing: 20px;
        cursor: pointer;
        transition: all 1300ms ease;
        &:hover {
          color: @themeColor;
          text-shadow: 0 0 12px rgb(255, 255, 255);
        }
      }

    }
    > .video {
      width: 100%;
      height: 100%;
      > video {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }
</style>

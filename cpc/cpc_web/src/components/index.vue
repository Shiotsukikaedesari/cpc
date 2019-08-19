<template>
    <div class="container" @click="videoPlay">
      <div class="video-play">
        <div>请点击任意位置</div>
      </div>
        <div class="video">
        <video src="static/index/enjoy_my_life.mp4" loop>
          您的浏览器不支持本视频的播放哦(Ｔ▽Ｔ)
        </video>
      </div>
    </div>
</template>

<script>
// import { setInterval, clearInterval } from 'timers'
import Bus from '../assets/js/bus'
export default {
  data () {
    return {
      browserWidth: '',
      borwserHeight: '',
      actVideo: false
    }
  },
  methods: {
    // 视频播放click
    videoPlay () {
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
          console.log(video.volume)
        }
      }, 500)
    },
    // 子传父，将视频加载完成的通知传递给父组件
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
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      background: linear-gradient(30deg,black 0%, rgba(255, 0, 0, 0.8) 0%, black 100%);
      align-items: center;
      justify-content: center;
      cursor: pointer;
      animation: passVideo 15s ease infinite;
      > div {
        font-size: 28px;
        text-shadow: 0 0 6px rgb(157, 157, 157);
        color: white;
        letter-spacing: 20px;
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
  // 视频加载完成的背景动画
  @keyframes passVideo {
    // 0% {background: linear-gradient(0deg,  black 0%, rgba(255, 0, 0, 0.8) 0%, black 100%)}
    // // 10% {background: linear-gradient(30deg,  black 0%, rgba(255, 94, 0, 0.8) 10%, black 100%)}
    // 20% {background: linear-gradient(60deg,  black 0%, rgba(255, 196, 0, 0.8) 20%, black 100%)}
    // 30% {background: linear-gradient(90deg,  black 0%, rgba(179, 255, 0, 0.8) 30%, black 100%)}
    // // 40% {background: linear-gradient(120deg,  black 0%, rgba(34, 255, 0, 0.8) 40%, black 100%)}
    // // 50% {background: linear-gradient(150deg,  black 0%, rgba(0, 255, 51, 0.8) 50%, black 100%)}
    // 60% {background: linear-gradient(180deg,  black 0%, 0% rgba(0, 255, 217, 0.8) 60%, black 100%)}
    // 70% {background: linear-gradient(210deg,  black 0%, rgba(0, 76, 255, 0.8) 70%, black 100%)}
    // // 80% {background: linear-gradient(240deg,  black 0%, rgba(0, 0, 255, 0.8) 80%, black 100%)}
    // // 90% {background: linear-gradient(270deg,  black 0%, rgba(166, 0, 255, 0.8) 90%, black 100%)}
    // 100% {background: linear-gradient(300deg,  black 0%, rgba(255, 0, 106, 0.8) 100%, black 100%)}
  }
</style>

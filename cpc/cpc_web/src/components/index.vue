<template>
    <div class="container">
        <div class="video">
          <video src="static/index/enjoy_my_life.mp4" loop>
            您的浏览器不支持本视频的播放哦(Ｔ▽Ｔ)
          </video>
        </div>
    </div>
</template>

<script>
// import { setInterval, clearInterval } from 'timers'
export default {
  data () {
    return {
      browserWidth: '',
      borwserHeight: ''
    }
  },
  methods: {
    // videoPlay () {
    //   let video = document.querySelector('video')
    //   video.volume = 0
    //   video.play()

    //   let timers = setInterval(() => {
    //     if (video.volume > 0.9) {
    //       video.volume = 1
    //       clearInterval(timers)
    //     } else {
    //       video.volume += 0.1
    //       console.log(video.volume)
    //     }
    //   }, 500)
    // }
  },
  mounted () {
    let video = document.querySelector('video')
    video.addEventListener('canplaythrough', () => {
      console.log('视频准备就绪')
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

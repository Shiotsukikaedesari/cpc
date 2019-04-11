<template>
  <div class="index">
    <!-- <index-nav></index-nav> -->
    <div class='logoEffect'> 
      <img 
      :src="require('../assets/img/index/new_cpc_logo.png')" 
      alt="常中CPC漫协logo">
      <img class="magicArray" :src="require('../assets/img/index/1.png')" alt="">

      <div class= "QRmask" 
      @mouseenter="QRshow"
      @mouseleave="QRhidde"></div>

      <img :src="require('../assets/img/index/QRcode.jpg')" alt="常中CPC漫协公众号">

    </div>
    <div class='indexTitle'>常 中 C P C 动 漫 协 会</div>

    <div class="otherLink">
      <a href="http://cpzx.jyjx.dgjy.net/" target="_blank"><img :src="require('../assets/img/index/cp_ms.png')" alt="常平中学官网"></a>
      <p>前往:http://cpzx.jyjx.dgjy.net</p>
    </div>
    <background-carousel></background-carousel>
  </div>
</template>

<script>
import backgroundCarousel from './index/backgroundCarousel.vue'

export default {
  name: 'index',
  data(){
    return {
      $QR: '',
      $QRmask: '',
      QRopacity: 0,
      QRleft: '',
      QRswitch: true
    }
  },
  methods: {
    QRFun:function(QRopacity, QRleft){
      this.QRopacity = QRopacity;
      this.QRleft = QRleft;
      this.$QR.stop(this.QRswitch);
      this.$QR.animate( {opacity: this.QRopacity, left: this.QRleft} , 1500);
    },
    QRshow: function(){
      this.QRFun(1, '400px');
    },
    QRhidde: function(){
      this.QRFun(0, '60px');
    },
  },

  mounted(){
    this.$QRmask = $('.QRmask');
    this.$QR = $('.logoEffect>img:last-child');
  },

  components: {
    backgroundCarousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/index/index.css"
</style>

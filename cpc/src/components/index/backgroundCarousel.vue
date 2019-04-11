<template>
    <div class="mainView">
        <div class="carouselMask"></div>
        <div class="carousel" :style="{backgroundImage: carouslBackground}">
            <div :class="{divAni: divSwitch[0]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[1]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[2]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[3]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[4]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[5]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[6]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[7]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[8]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[9]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[10]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[11]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[12]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[13]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[14]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[15]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[16]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[17]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[18]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[19]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[20]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[21]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[22]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[23]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[24]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[25]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[26]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[27]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[28]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[29]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[30]}" :style="{backgroundImage: divBackground}"></div>
            <div :class="{divAni: divSwitch[31]}" :style="{backgroundImage: divBackground}"></div>
        </div>

        <div class="carouselNav" @mouseenter="enter()" @mouseleave="leave()">
            <div :class="{navTtyle:anvClass[0]}" @click="rollTo(0)"></div>
            <div :class="{navTtyle:anvClass[1]}" @click="rollTo(1)"></div>
            <div :class="{navTtyle:anvClass[2]}" @click="rollTo(2)"></div>
            <div :class="{navTtyle:anvClass[3]}" @click="rollTo(3)"></div>
        </div>
        <div class="source">
            <img src="../../assets/img/index/source.png" alt="">
            <div><a :href="source.aHref" target="_blank">{{source.content}}</a></div>
        </div>
        <div class="protect" :style="{zIndex: protectZIndex}"  @mouseenter="enter()" @mouseleave="leave()"></div>
    </div>
</template>

<script>
export default {
    name: 'backgroundCarousel',
    data(){
        return {
            picturePath: [
                require('../../assets/img/index/background1.jpg'),
                require('../../assets/img/index/background2.jpg'),
                require('../../assets/img/index/background3.jpg'),
                require('../../assets/img/index/background4.jpg')
                ],
            carouslBackground: '',
            divBackground: '',
            divSwitch: [
               false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false, 
                false,false,false,false,false,false,false,false,false,false,
             ],
            source:{
                content: '',
                aHref: ''
            },

             sourcelist: [
                 {
                 content:'pixivID: 34356734',
                 aHref: 'https://www.pixiv.net/member_illust.php?illust_id=34356734'
                 },
                 {
                 content:'pixivID: 123456',
                 aHref: 'https://www.pixiv.net/member_illust.php?illust_id=34356734'
                 },
                 {
                 content:'pixivID: 45645757',
                 aHref: 'https://www.pixiv.net/member_illust.php?illust_id=34356734'
                 },
                 {
                 content:'pixivID: 345754',
                 aHref: 'https://www.pixiv.net/member_illust.php?illust_id=34356734'
                 },
                 ],
            anvClass: [true, false, false, false],
            times : 0,
            carouselTimer: '',
            protectZIndex: 0,
        }
    },

    methods: {
        rolling:function(){
            //每次进行，先换背景图，然后div开始播放动画，播放完毕换div背景图
            //先换背景
            this.protectZIndex = 15;
            this.carouslBackground = `url(${this.picturePath[this.times]})`;
            
            
            let _this = this;//包装该环境下的this，给之后的内部函数使用
            let iDiv = 0;//用来记录到第几个div
            let rollDIv = function(){
                if(iDiv === _this.divSwitch.length ){
                    iDiv = 0;
                    _this.divSwitch.forEach((elem, i, arr) => {
                        _this.$set(_this.divSwitch, i, false);
                    });
                    _this.protectZIndex = 0;
                    clearInterval(timer);
                    //结束之后换背景
                    let background = '';
                    if(_this.times - 1 === -1){
                        background = _this.picturePath[_this.picturePath.length - 1];
                    }else{
                        background = _this.picturePath[_this.times - 1];
                    }
                    _this.divBackground = `url(${background})`;
                }else{
                    _this.$set(_this.divSwitch, iDiv, true);
                    iDiv += 1;
                }
            }   

            let timer = setInterval(rollDIv, 100);//运用定时器实现动画


            /////////////////////////////////////////////////
            //小点的class切换
            this.anvClass.forEach((elem, i, arr) => {
                if(i === this.times){
                    this.$set(this.anvClass, i, true);
                }else{
                    this.$set(this.anvClass, i, false);
                }
            });

            ////////////////////////////////////////////////////////
            //pixiv导航的切换
            this.source.content = this.sourcelist[this.times].content;
            this.source.aHref = this.sourcelist[this.times].aHref;

            if(this.times == this.anvClass.length - 1){
                    this.times = 0;
                }else{
                    this.times += 1;
                }
        },
        enter:function(){
            clearInterval(this.carouselTimer);
        },
        leave:function(){
            this.carouselTimer = setInterval(this.rolling, 7000);
        },
        rollTo:function(index){
            this.times = index;
            this.rolling();
        }
    },

    mounted(){
        /////////////////////加载轮播图片与数据//////////////////
        this.$http.get('http://127.0.0.1/cpc/php/index/load_img.php').then(res => {
            console.log(res);
        });
        /////////////////挂载初始轮播///////////////
        this.rolling();
        this.carouselTimer = setInterval(this.rolling, 7000);
    }
}
</script>

<style lang="less" scoped>
     @import '../../assets/css/index/backgroundCarousel.less';
</style>

   



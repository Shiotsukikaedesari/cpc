<template>
    <div class="barrage">
        <div class="barragePipe"></div>
        <div class="barragePipe"></div>
        <div class="barragePipe"></div>
        <div class="barragePipe"></div>
        <div class="barragePipe"></div>
        <div class="barragePipe"></div>
        <!-- 预添加弹幕控制组件 -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            font: [ //由数据库载入数据
                // {id:1, msg:"这是一段测试文字111", color: '#fff'},
                // {id:2, msg:"这是一段测试文字2222222", color: 'red'},
                // {id:3, msg:"这是一段测试文字33", color: 'green'},
                // {id:4, msg:"这是一段测试文字44444", color: 'orange'},
                // {id:5, msg:"这是一段测试文字5555", color: '#fff'},
                // {id:6, msg:"这是一段测试文字66", color: '#fff'},
                // {id:7, msg:"这是一段测试文7777", color: '#fff'},
                // {id:8, msg:"这是一段测试文字8888", color: '#fff'},
                // {id:9, msg:"这是一段测试文字99", color: '#fff'},
                // {id:10, msg:"这是一段测试文字10", color: '#fff'},
                // {id:11, msg:"这是一段测试文字11 11", color: 'blue'},
                // {id:12, msg:"这是一段测试文字12 12", color: '#fff'},
                // {id:13, msg:"这是一段测试文字13 13 13 13", color: '#fff'},
                // {id:14, msg:"77777777777777777777777777777777777777777777777777777", color: '#fff'}
                ],
            fontTimer: {//定时器的开关
                timer1: '',
                timer2: '',
                timer3: '',
                timer4: '',
                timer5: '',
                timer6: '',
                },  
            pipe: [//管道的HTML位置
                {pipe: '', shootTime: 0},
                {pipe: '', shootTime: 0},
                {pipe: '', shootTime: 0},
                {pipe: '', shootTime: 0},
                {pipe: '', shootTime: 0},
               { pipe: '', shootTime: 0},
            ],
            fontNum: 0,//记录弹幕的读取位置
            slideTime: 15000,//弹幕滑动时间
            screenWidth: 0
        }
    },
    methods:{
        /////////////弹幕提取与循环方法/////////////////
        shootFont: function(i){//传入管道JQ
        let _this = this;
            return function(){
                // console.log(i);测试管道
                // console.log(_this.pipe[0].shootTime);测试每次时间
                //提取弹幕，并设定循环弹幕功能
                if(_this.fontNum < _this.font.length - 1){
                    _this.fontNum += 1;
                }else{
                    _this.fontNum = 0;
                }

                //初始每个弹幕的走字时间
                ////区分长短弹幕的走字逻辑y = ln(x + 1) x > 0;
                
                _this.pipe[i].shootTime= Math.log(_this.font[_this.fontNum].ib_msg.length + 1) * 1500; 
                
                
               /////////初始每个弹幕dom////////////////
                let div = document.createElement('div');//生成一个字体div的dom
                div.className = 'fontBullet';
                div.style = `color:${_this.font[_this.fontNum].ib_color}`;
                div.innerHTML = _this.font[_this.fontNum].ib_msg;
                let $div = $(div);
                $div.one('click', e => {//提前绑定好dom的事件，此事件只能触发一次
                    let $tar = $(e.target);
                    let width = 2 * $tar.width() + _this.screenWidth;
                    $tar.animate({right: width}, _this.slideTime + parseInt($tar.width()*20), 'linear', function(){//设置回调播放完删除此函数
                        $tar.remove();
                    });
                });
                // console.log($div);
                _this.pipe[i].pipe.append(div);
                $div.css({right: -$div.width()});//加入dom中设置它的位置
                $div.click();
                _this.fontTimer.timer1 = setTimeout(_this.shootFont(i), _this.pipe[i].shootTime);//在定时器中调用函数达到循环调用
            }
        },
        clearTimer: function(){//关闭定时器函数
            this.fontTimer.timer1 = '';
            clearTimeout(this.fontTimer.timer1);
            this.fontTimer.timer2 = '';
            clearTimeout(this.fontTimer.timer2);
            this.fontTimer.timer3 = '';  
            clearTimeout(this.fontTimer.timer3);
            this.fontTimer.timer4 = '';  
            clearTimeout(this.fontTimer.timer4);
            this.fontTimer.timer5 = '';  
            clearTimeout(this.fontTimer.timer5);
            this.fontTimer.timer6 = '';  
            clearTimeout(this.fontTimer.timer6);      
        },

        openTimer: function(){//启动定时器函数
            this.shootFont(0)();
            this.shootFont(1)();
            this.shootFont(2)();
            this.shootFont(3)();
            this.shootFont(4)();
            this.shootFont(5)();
        }
    },
    created(){
        ////////////请求弹幕数据//////////////////////
        this.$http.get('http://127.0.0.1/cpc/php/index/load_barrage.php').then(res => {
            let body = res.body;
            this.font = body;
            console.log(this.font);
            ///////////////挂起启动定时器,在请求到才挂起/////////////////
            this.openTimer();
        });
    },
    mounted(){
         /////////////初始管道位置////////////////////
        let $barragePipe = $('.barragePipe');
        for(let i = 0; i < $barragePipe.length; i += 1){
            this.pipe[i].pipe = $($barragePipe[i]);
        };

        ///////////////初始页面宽度///////////////
        this.screenWidth = window.innerWidth;
        
    },
    destroyed(){
        ///////////////////清理定时器////////////////////
        this.clearTimer();
    }
}
</script>
<style lang="less">
    .barrage{
        position: absolute;
        z-index: 5;
        width: 100%;
        height: 300px;
        // background: rgba(0, 0, 0, 0.774);
        >.barragePipe{
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 25px;
            // border: 1px solid white;
            margin: 15px 0;
            >.fontBullet{
                position: absolute;
                top: 0;
                right: 0;
                font-size: 20px;
                line-height: 25px;
                white-space: nowrap;
            }
        }
    }
</style>



<template>
<div class="icon-swiper">

    <swiper>
        <swiper-slide class="" v-for="(page, index) of pages" :key="index"> 
            <div class="swiper">
                <div class="menu"  v-for="menu of page" :key="menu.id">
                    <span class="iconfont icon" v-html="menu.iconCode"></span>
                    <span class="icon-text">{{menu.text}}</span>
                </div>  
            </div>
        </swiper-slide> 
    </swiper>
</div>
</template>

<script>
export default {
    name:"HomeIcon",
    data(){
        return { 
           menuList:[
               {
                   id:'001',
                   iconCode:"&#xe613;",
                   text:"热门景点"
               },
               {
                   id:'002',
                   iconCode:"&#xe61a;",
                   text:"名胜古迹"
               },
               {
                   id:'003',
                   iconCode:"&#xe619;",
                   text:"海外"
               },
               {
                   id:'004',
                   iconCode:"&#xe612;",
                   text:"游玩攻略"
               },
               {
                   id:'005',
                   iconCode:"&#xe60e;",
                   text:"住宿"
               },
               {
                   id:'006',
                   iconCode:"&#xe604;",
                   text:"动车"
               },
               {
                   id:'007',
                   iconCode:"&#xe602;",
                   text:"天气预知"
               },
               {
                   id:'008',
                   iconCode:"&#xe615;",
                   text:"影楼预约"
               },
               {
                   id:'009',
                   iconCode:"&#xe611;",
                   text:"急救指南"
               },
           ]
        }
    },
    methods:{

    },
    computed:{
        pages(){
            const mypage = []
            this.menuList.forEach((ele, index) => {
                let page = Math.floor(index / 8)
                if(!mypage[page]){ /* 防止里面穿了个undefined null "" false */
                    mypage[page] = []
                }
                mypage[page].push(ele)
                
            });
            return mypage
        }
    }


}
</script>

<style lang='stylus' scoped > 
@import '../../assets/style/color.styl'
.swiper
    width:1'00%'
    font-size :0
    height 0
    padding-bottom 50% 
    .menu 
        height 5em 
        width: 25%
        display :inline-block
        font-size:12pt
        text-align center
        .icon
            display block
            font-size 30pt
            margin .7em .5em .3em .5em 

.icon
    color:$colorBlue

</style>

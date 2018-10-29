<template>
<div class="icon-swiper">

    <swiper :options="swiperOption" >
        <swiper-slide class="" v-for="(page, index) of pages" :key="index"> 
            <div class="swiper">
                <div class="menu"  v-for="menu of page" :key="menu.id">
                    <img :src="menu.imgUrl" alt="" class="icon">
                    <!-- <span class="iconfont icon" v-html="menu.iconCode"></span> -->
                    <span class="icon-text">{{menu.desc}}</span>
                </div>  
            </div>
        </swiper-slide> 
    </swiper>
</div>
</template>

<script>
export default {
    props:{
        list:Array
    },
    name:"HomeIcon",
    data(){
        return { 
            swiperOption:{
                autoplay:false
            }, 
        }
    },
    methods:{

    },
    computed:{
        pages(){
            const mypage = []
            this.list.forEach((ele, index) => {
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
        width: 25%
        display :inline-block
        font-size:10pt 
        text-align center
        .icon
            display block
            width 60%
            margin .5em auto

.icon
    color:$colorBlue

</style>

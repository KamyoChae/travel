<template>
<div class="icon-swiper">

    <swiper :options="swiperOption" >
        <swiper-slide  v-for="(page, index) of pages" :key="index">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
    name:"Icon",
    data(){
        return {
            pages:[],
            iconList:[{iconUrl}], // axios传过来的icon菜单
        }
    },
    methods:{

    }

}
</script>

<style lang='stylus' scoped>


</style>

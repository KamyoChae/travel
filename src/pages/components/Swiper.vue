<template>
    <div class="swiper">
        <swiper :options="swiperOption" v-if="showList"> 
            <swiper-slide  v-for="item of list" :key="item.id" > 
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide> 
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div> 
        </swiper>
    </div>
</template>

<script>
export default {
  props: {
      list:Array
  },
  computed:{
      showList(){
          return this.list.length
      }
  },
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }, 
    };
  }
};
</script>
<style lang='stylus' scoped>
.swiper >>> .swiper-pagination-bullet-active {
    background: #fff;
}

.swiper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    background: #ccc;

    .swiper-img {
        width: 100%;
    }
}
</style>

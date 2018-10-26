<template>
    <div class="swiper">
        <swiper :options="swiperOption" > 
            <swiper-slide  v-for="item of imgList" :key="item.id"> 
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide> 
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div> 
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
          pagination:".swiper-pagination",
          loop: true
      },
      imgList:[
          {
              id:"0001",
              imgUrl:"https://m1.tuniucdn.com/fb2/t1/G5/M00/70/E2/Cii-s1vRisuIHgb2AAL_nMgPJJAAAPoJQDegF8AAv-067.jpeg"
          },
          {
              id:"0002",
              imgUrl:"https://m.tuniucdn.com/fb2/t1/G5/M00/65/B1/Cii-s1vJqs6IZwjUAAK4q7WwarcAAPXBQMMhQoAArjD24.jpeg"
          },
          {
              id:"0003",
              imgUrl:"https://m2.tuniucdn.com/fb2/t1/G5/M00/6E/5E/Cii-slvQD5OIc7sBAAN965K_VsgAAPj9gCZxIsAA34D20.jpeg"
          }
      ],
    };
  }
};
</script>
<style lang='stylus' scoped>
.swiper >>> .swiper-pagination-bullet-active
    background:#fff

.swiper
    width:100%
    height :0
    overflow :hidden
    padding-bottom :23.25%
    background :#ccc
    .swiper-img
        width :100%
</style>

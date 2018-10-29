<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper> 
       <home-icon></home-icon>
       <home-popular></home-popular>
       <home-weekend></home-weekend>
    </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomePopular from './components/Popular'
import HomeWeekend from './components/Weekend'
import axios from "axios"
export default {
  name: "Home",
  components:{

      HomeHeader,
      HomeSwiper,
      HomeIcon,
      HomePopular,
      HomeWeekend,
  },
  mounted() {
      this.getHomInfo()
  },
  methods:{
      getHomInfo () {
          axios.get("/api/index.json")
                .then(this.infoSucc)
      },
      infoSucc(res){
          console.log(res)
      }
  }

};
</script>

<style>
</style>


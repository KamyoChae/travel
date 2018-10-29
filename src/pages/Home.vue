<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper> 
       <home-icon></home-icon>
       <home-popular></home-popular>
    </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomePopular from './components/Popular'
export default {
  name: "Home",
  components:{

      HomeHeader,
      HomeSwiper,
      HomeIcon,
      HomePopular,
  }

};
</script>

<style>
</style>


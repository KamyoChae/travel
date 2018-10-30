<template>
    <div>
       <home-header :city="city"></home-header>
       <home-swiper :list="swiperList"></home-swiper> 
       <home-icon :list="iconList"></home-icon>
       <home-popular :list="popuList"></home-popular>
       <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcon from "./components/Icon";
import HomePopular from "./components/Popular";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomePopular,
    HomeWeekend
  },

  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      weekendList: [],
      popuList: [],
      lastCity:""
    };
  },
  methods: {
    getHomInfo() {
      axios.get("/api/index.json?city=" + this.$store.city).then(this.infoSucc);
    },
    infoSucc(res) {
      if (res.data) {
        let myRes = res.data.data;
        this.city = myRes.city;
        this.swiperList = myRes.swiperList;
        this.iconList = myRes.iconList;
        this.weekendList = myRes.weekendList;
        this.popuList = myRes.recommendList;
      }
    }
  },
  mounted() {
    this.lastCity = this.$store.city
    this.getHomInfo();
  },
  activated() {
      if(this.lastCity !== this.$store.city ){
          this.lastCity = this.$store.city
          this.getHomInfo();
      }
  },
};
</script>

<style>
</style>


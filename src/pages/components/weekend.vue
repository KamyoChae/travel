<template>
    <div>
        <div class="pop-nav">周末去哪儿</div>
        <div class="pop-list" v-for="item of popList" :key="item.id">
            <div class="pop-items">
                <img :src="item.src" alt="">
                <div class="items-right">
                    <span class="title">{{item.title}}</span> 
                </div>
            </div>

        </div>

    </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data(){
      return {
          popList:[
              {
                  id:"001",
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-42uxOa2POxsNy9ORV3tIJWHl-KX1nIN6-wZpf_pghiJVn5oC0w",
                  title:"桂林象山景区",
                  

              },
               {
                  id:"002",
                  src:"https://imgs.qunarzz.com/p/tts8/1606/7c/b52927ed3bd0ef7.jpg_180x120_24b52b9b.jpg",
                  title:"南宁-桂林3日/桂林阳朔漓江包车自由行（20元背景+撑竹筏+钻溶洞+逛西街）",
               

              },
               {
                  id:"003",
                  src:"https://imgs.qunarzz.com/p/tts7/1707/31/be18c92f86986b02.jpg_180x120_ab0f851e.jpg",
                  title:"特惠升级2晚桂林大公馆+1晚阳朔万丽花园",
          

              },
 
          ]
      }
  }
};
</script>

<style lang="stylus" scoped>
ellipsis(){
    overflow hidden
    text-overflow ellipsis
    white-space nowrap 
}
.pop-nav {
    width: 100%;
    height: 2.5em;
    line-height: 2.5em;
    background: #eee;
    text-indent: 1em;
}

.pop-items {
    box-sizing: border-box;
    display: flex;
    flex-direction  column
    width: 100%;
    height: 130px;
    padding: 0.5em 0.5em 0 0.5em;
    margin-bottom .5em

    img {
        width: 100%;
        height: 100px;
    }

    .items-right {
        display: flex;
        flex-direction: column;
        align-items: space-between; 
        ellipsis()
        .title {  
            width 100%
            height 2em
            width 100%
            padding .5em
            ellipsis()
            color #085660
        }
 
 
    }
}
</style>

<template>
    <div>
        <div class="pop-nav">热门推荐</div>
        <div class="pop-list" v-for="item of popList" :key="item.id">
            <div class="pop-items">
                <img :src="item.src" alt="">
                <div class="items-right">
                    <span class="title">{{item.title}}</span>
                    <span class="about">{{item.about}}</span>
                    <span class="more">查看更多</span>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
export default {
  name: "HomePopular",
  data(){
      return {
          popList:[
              {
                  id:"001",
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-42uxOa2POxsNy9ORV3tIJWHl-KX1nIN6-wZpf_pghiJVn5oC0w",
                  title:"桂林象山景区",
                  about:"周末半价！周末半价！周末半价！！重要的事情说三遍",

              },
               {
                  id:"002",
                  src:"https://imgs.qunarzz.com/p/tts8/1606/7c/b52927ed3bd0ef7.jpg_180x120_24b52b9b.jpg",
                  title:"南宁-桂林3日/桂林阳朔漓江包车自由行（20元背景+撑竹筏+钻溶洞+逛西街）",
                  about:"火车往返高档型酒店等",

              },
               {
                  id:"003",
                  src:"https://imgs.qunarzz.com/p/tts7/1707/31/be18c92f86986b02.jpg_180x120_ab0f851e.jpg",
                  title:"特惠升级2晚桂林大公馆+1晚阳朔万丽花园",
                  about:"火车往返高档型酒店等",

              },
               {
                  id:"004",
                  src:"https://imgs.qunarzz.com/p/tts9/1709/b1/a11c2b499a4fe402.jpg ",
                  title:"桂林象山景区",
                  about:"周末半价！周末半价！周末半价！！重要的事情说三遍",

              },
               {
                  id:"005",
                  src:"https://imgs.qunarzz.com/p/tts2/1809/5c/a39f830c52fdd802.jpg_180x120_e809e774.jpg",
                  title:"桂林象山景区",
                  about:"周末半价！周末半价！周末半价！！重要的事情说三遍",

              },
               {
                  id:"006",
                  src:"https://imgs.qunarzz.com/p/tts6/1801/a8/60547f060c651502.jpg_180x120_f8fa3bc4.jpg",
                  title:"桂林象山景区",
                  about:"周末半价！周末半价！周末半价！！重要的事情说三遍",

              },
          ]
      }
  }
};
</script>

<style lang="stylus" scoped>
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
    width: 100%;
    height: 100px;
    padding: 0.5em 0.5em 0 0.5em;
    margin-bottom .5em

    img {
        width: 100px;
        height: 100px;
    }

    .items-right {
        display: flex;
        flex-direction: column;
        align-items: space-between; 
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        > span {
            margin: 0.3em;
        }

        .title {  
            height 2em
            width 100%
        }

        .about {
            min-height: 3em;
            line-height: 1.2em;
            width: 100%;
            color: #888; 
        }

        .more {
            width: 5em;
            background: #ff6400;
            color: #fff;
            text-align: center;
            border-radius: 4px;
            font-size: 8pt;
            padding: 0.5em;
            margin-top: 0;
            margin-bottom: 0;
        }
    }
}
</style>

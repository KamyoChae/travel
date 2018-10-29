<template>
    <div>
        <div class="pop-nav">热门推荐</div>
        <div class="pop-list" v-for="item of list" :key="item.id">
            <div class="pop-items">
                <img :src="item.imgUrl" alt="">
                <div class="items-right">
                    <span class="title">{{item.title}}</span>
                    <span class="about">{{item.desc}}</span>
                    <span class="more">查看更多</span>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  name: "HomePopular",
  data() {
    return {};
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
    margin-bottom: 0.5em;

    img {
        width: 100px;
        height: 100px;
    }

    .items-right {
        box-sizing border-box
        padding .5em

        display: flex;
        flex-direction: column; 
        justify-content space-between;
        .title {
            width: 100%;
            font-size: 1.2em;
        }

        .about { 
            font-size: .9em;
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
        }
    }
}
</style>

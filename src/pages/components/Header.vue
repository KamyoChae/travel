<template>
    <div>
        <div class="head">
        <div class="header-left iconfont">&#xe610;</div>
        <div class="header-center"><span class="iconfont btn-search">&#xe625;</span>输入城市/景点/游玩主题</div>
        <router-link to="/City">
        <div class="header-right">{{this.$store.state.city}}</div>
        </router-link>
        </div>
    </div>  
</template>

<script>
export default {
    props:{
        city:String
    },
    name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
@import '../../assets/style/color.styl'
  .head
    display:flex
    color:#fff
    line-height :.86rem
    background:$colorBlue
    .header-left, .header-right
        width:.64rem
        text-align :center
    .header-right
        min-width: 1.24rem
        padding  0 .1rem
        color #fff 
    .header-center
        flex-grow:1
        height : .64rem
        color:#ccc
        line-height .64rem
        background:#fff
        border-radius :.1rem
        margin: .12rem 0 0 .2rem
        .btn-search
            margin: 0 .5em

</style>


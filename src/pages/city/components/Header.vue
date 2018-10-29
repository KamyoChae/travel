<template>
    <div class="header">
        <div class="title"> 
            <router-link to="/">
                <div class="header-left iconfont">&#xe610;</div>
            </router-link>
            城市选择
        </div> 
        <input type="text" class="search" placeholder="搜索城市...">
    </div>
</template>

<style lang="stylus" scoped>
@import '../../../assets/style/color.styl'
.header
    box-sizing border-box
    position relative
    overflow hidden
    color #ffffff
    padding 1em .5em .5em .5em
    background $colorBlue 
    .title 
        width 100%
        text-align center
        .header-left
            display inline-block
            float left
            color #fff  
    .search
        box-sizing border-box
        width 100%
        padding .3em
        color #424242 
        border-radius 4px
        background #ffffff
        margin-top .5em

</style>

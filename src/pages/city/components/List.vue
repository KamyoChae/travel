<template>
    <div class="wrapper" ref="wrap"> 
        <div>
            <div class="mycheck">
                <div class="mycheck-text">当前选择</div>
                <div class="check-city">
                    <div class="btn-city">北京</div>
                </div>
            </div>

            <div class="hot-city">
                <div class="mycheck-text">热门城市</div>
                <div class="check-city" >
                    <div class="btn-city" v-for="item of hotCities" :key="item.id" >{{item.name}}</div> 
                </div>
            </div>

            <div class="city-sort">
                <div class="sort-items" 
                v-for="(items, key) of cities" 
                :key="key" 
                :ref="key"
                >

                    <div class="mycheck-text" >{{key}}</div>
                    <div class="item-list" v-for="item of items" :key="item.id">
                        <div class="item" > {{item.name}}</div> 
                    </div> 
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props:{
        hotCities: Array,
        cities: Object,
        letter: String
    },
    name: "CityList",
    mounted() {
        console.log(this.$refs.wrap)
        this.scroll = new BScroll(this.$refs.wrap)  
    },
    watch:{
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }

}
</script>
<style lang="stylus" scoped>
@import '../../../assets/style/color.styl'
.wrapper 
    overflow hidden
    position absolute
    top 5.2em
    left 0 
    right 0
    bottom 0 
    .mycheck-text
        background #eee
        padding .8em .5em .5em .5em
        color #424242
    .check-city
        width 100%
        min-height 3em 
        padding 1em 2em 1em 1em
        .btn-city
            display inline-block
            width 24.3%
            text-align center
            border-radius 2px
            padding .2em
            border 1px solid #6ea0ba
            margin 0 .5em .5em 0

    .item
        border-bottom 1px solid #ddd
        padding .8em


</style>

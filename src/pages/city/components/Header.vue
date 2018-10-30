<template>
    <div class="header">
        <div class="title"> 
            <router-link to="/">
                <div class="header-left iconfont">&#xe610;</div>
            </router-link>
            城市选择
        </div> 
        <input type="text" class="search" placeholder="搜索城市..." v-model="oInput">
        <div class="city-list" v-show="noInput">
            <div class="city-name" v-for="item of cityList" :key="item.id">{{item.name}}</div>
            <div class="city-name" v-show="!noData">没有找到相关城市</div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    props:{
        cities:Object
    },
    data(){
        return {
            name:'Header',
            oInput:null,
            cityList:[], 
            noInput:true,
        }
    },
    computed:{
        noData(){
            return this.cityList.length
        }
    },
    watch : {
        oInput () { 
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.oInput){
                this.noInput = false
            }else{
                this.noInput = true
            }
            this.timer = setTimeout(()=>{
                const result = [] 
                for(let i in this.cities){
                    this.cities[i].forEach(element => {
                        if(element.spell.indexOf(this.oInput) > -1 ||
                            element.name.indexOf(this.oInput) > -1 
                        ){
                            result.push(element)
                        }
                    })
                }
                this.cityList = result
            }, 100)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/color.styl'
.header
    box-sizing border-box
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
    .city-list
        z-index 1
        overflow hidden
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        background #fff
        margin-top 5em
        .city-name
            color #424242
            padding .5em .8em
            border-bottom 1px solid #eee
</style>

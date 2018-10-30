<template>
    <div class="wrapper">
        <span class="char"  v-for="(item, key) of cities" :key="key">{{key}}</span> 
    </div>
</template>

<script>
export default {
    props:{
        cities: Object
    },
    name:'Charshow',

}
</script>

<style lang="stylus" scoped>
.wrapper
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 0
    bottom 0
    right 0 
    .char
        margin .3em
        color #6ea0ba

</style>

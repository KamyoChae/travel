<template>
    <div class="wrapper">
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
        <span class="char">A</span>
    </div>
</template>

<script>
export default {
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

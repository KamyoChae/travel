<template>
    <div class="wrapper">
        <span class="char"  
        v-for="item  of letters" 
        :key="item" 
        :ref="item"
        @touchmove="touchHandleMove"
        @touchstart="touchHandleStart"
        @touchend="touchHandleEnd"
        @click="handleLetter"
        >
        {{item}}
        </span> 
    </div>
</template>

<script>
export default {
    props:{
        cities: Object
    },
    data(){
        return {
            touchStaute:false
        }
    },    
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    name:'Charshow',
    methods:{
        handleLetter (e) {
            const letter = e.target.innerText
            this.$emit("change", letter)
        },
        touchHandleMove(e){
            if(this.touchStaute){
                const startY = this.$refs['A'][0].offsetTop
                const touchY = e.touches[0].clientY - 0
                const index = Math.floor((touchY - startY) / 20)
                if(index >= 0 && index < this.letters.length){
                    console.log(this.letters[index])
                    this.$emit('change', this.letters[index])
                } 

            }
        },
        touchHandleStart(){
            this.touchStaute = true
        },
        touchHandleEnd(){
            this.touchStaute = false
        },
    }

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

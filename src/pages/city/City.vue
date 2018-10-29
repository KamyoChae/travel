<template>
    <div> 
        <city-header></city-header>
        <city-list></city-list>
        <city-charshow></city-charshow>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityCharshow from './components/Charshow'
export default {
    name:'City',
    components:{
        CityHeader,
        CityList,
        CityCharshow
    }
}
</script>

<template>
    <div> 
        <city-header :cities="cities"></city-header> 
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-charshow 
        :cities="cities" 
        @change="getLetter"
        ></city-charshow>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List' 
import CityCharshow from './components/Charshow'
export default {
    name:'City',
    components:{
        CityHeader, 
        CityList,
        CityCharshow
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:"",
        }
    },
    mounted() {
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            axios.get("/api/city.json")
                .then(this.infoCity)
        },
        infoCity(res){
            console.log(res)
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.hotCities = data.hotCities
                this.cities = data.cities
            }
        },
        getLetter(letter){
            this.letter = letter
        }
    }
}
</script>

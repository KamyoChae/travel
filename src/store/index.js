import Vue from 'vue'
import Vuex from 'vuex' 
import state from './store_components/state'
import actions from './store_components/actions'
import mutations from './store_components/mutation'
Vue.use(Vuex)

export default new Vuex.Store({
    state, 
    actions,
    mutations
})
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
    position:{},
    userName:''
}

const mutations = {
    setPosition(state,val){
        state.position = val
    },
    setUserName(state,val){
        state.userName = val
    },
    signUp(state){
        state.userName = ''
    }
}
const actions = {
    setPosition({ commit },val){
        //异步请求数据
        commit('setPosition',val)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
})
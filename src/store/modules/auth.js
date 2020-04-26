import qs from 'qs'
import api from '../../api/imgur'
import { router } from '../../main'

const state = {
    token:window.localStorage.getItem('imgur_token')
}
const getters = {
    isLoggedIn:state => !!state.token
}
const mutations = {
    setToken:(state,token) => {
        state.token = token
    }
}
const actions = {
    logout:({ commit }) => {
        commit('setToken',null)
        window.localStorage.removeItem('imgur_token')
    },
    login:() => {
        api.login()
    },
    finalizeLogin({ commit }, hash){
        const str = qs.parse(hash.replace('#',''))
        //login之後出現的網址為http://localhost:8084/oauth2/callback#access_token...
        commit('setToken',str.access_token)
        //儲存登入訊息
        window.localStorage.setItem('imgur_token',str.access_token)
        //login之後出現access token...網址，再導航為http://localhost:8084
        router.push('/')
    }
}


export default{
    state,
    getters,
    actions,
    mutations
}
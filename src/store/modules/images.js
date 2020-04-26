import api from '../../api/imgur'
import { router } from '../../main'
const state = {
    images : []
}
const getters = {
    allImages:state => state.images
}
const mutations = {
    setImages:(state,images) => {
        state.images = images
    }
}
const actions = {
    async fetchImages( { rootState,commit } ){
        const { token } = rootState.auth
        //訪問index.js中的module
        const response = await api.fetchImages(token)
        //rootsate類似auth.js里的commit
        //rootstate像根一樣在這裡是引用所有的狀態，使我們能夠訪問其他模組和其他狀態、數據
        //console.log(response)
        commit('setImages',response.data.data)
        //第一個data是由axios回傳，第二個data是由imgur API回傳
    },
    async uploadImages( { rootState },images ){
        //console.log(images)
        //step1 get the access token
        const { token } = rootState.auth
        //step2 call oru api module to do the upload
        await api.uploadImages(images,token)
        //step3 redirect our user to ImageList component
        router.push('/')
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}
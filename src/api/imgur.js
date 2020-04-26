import qs from 'qs'
import axios from 'axios'

const CLIENT_ID = '5e759d6af491123'
const ROOT_URL = 'https://api.imgur.com'

export default{
    login(){
        const querystring = {
            client_id:CLIENT_ID,
            response_type:'token',
        }
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
        //讓使用者瀏覽器自動導航到此URL
    },
    fetchImages(token){
        return axios.get(`${ROOT_URL}/3/account/me/images`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    },
    uploadImages(images,token){
        //將半陣列轉換成陣列Array.from(images)
        const promises = Array.from(images).map(image => {
            const formData = new FormData()
            formData.append('image',image)
            return axios.post(`${ROOT_URL}/3/image`,formData,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
        })
        return Promise.all(promises)
    }
}
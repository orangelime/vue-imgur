<template>
    <div>
        Please wait....
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:'AuthHandler',
    methods:mapActions(['finalizeLogin']),
    created(){
        this.finalizeLogin(window.location.hash)
        //login之後出現的網址為http://localhost:8084/oauth2/callback#access_toke...
    },
    
}
</script>

<style>

</style>
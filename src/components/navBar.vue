<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item" href="/">
            Image Storage
        </router-link>
        
        <div class="right menu">
            <div v-if="isLoggedIn" class="menu-bar">
                <router-link to="/" class="item">Gallery</router-link>
                <router-link to="/upload" class="item">Upload</router-link>
                <a class="item" @click="logout">Logout</a>
            </div>
            <a href= "#" class="ui item" @click="login" v-else>
                Login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
    name:'navBar',
    methods:mapActions(['login','logout']),
    computed:mapGetters(['isLoggedIn']),
}
</script>

<style scoped>
.menu-bar{
    display: flex;
    flex-direction: row;
}
</style>
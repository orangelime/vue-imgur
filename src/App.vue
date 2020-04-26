<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/navBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>

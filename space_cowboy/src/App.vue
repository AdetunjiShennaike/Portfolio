<template>
  <div id="app">
    <div class="side-bar" id="sideBar">
      <Navigation />
      <SocialMedia />
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navigation from '@/components/nav/Navigation'
import SocialMedia from '@/components/nav/SocialMedia'
export default {
  components: {
    Navigation,
    SocialMedia
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

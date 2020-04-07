<template>
  <div id="app">
    <nav class="sideBar" id="sideBar">
      <Navigation />
      <SocialMedia />
    </nav>
    <div class="Page">
      <router-view/>
    </div>
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
.Page {
  height: 100%;
  width: 100%;
  position: absolute;
}
/* Navigation styling */
#sideBar {
  background: #10fd08;
  height: 100%;
  width: 50px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  min-height: 600px;
}
#nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
}
#social-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
}
</style>

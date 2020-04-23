<template>
  <div id="nav" class="nav">
    <router-link to="/"><img class="navIcon" :src="require('../../assets/spaceship.png')" /></router-link>
    <router-link to="/about"><img class="navIcon" :src="require('../../assets/user.png')" /></router-link>
    <router-link to="/articles"><img class="navIcon" :src="require('../../assets/content.png')" /></router-link>
    <router-link to="/skills"><img class="navIcon" :src="require('../../assets/gears.png')" /></router-link>
    <router-link to="/projects"><img class="navIcon" :src="require('../../assets/sketch(1).png')" /></router-link>
    <router-link to="/achievements"><img class="navIcon" :src="require('../../assets/medal.png')" /></router-link>
    <router-link to="/contact"><img class="navIcon" :src="require('../../assets/mail.png')" /></router-link>
  </div>
</template>

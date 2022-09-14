<template>
  <div>
    <GlobalNav />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import GlobalNav from './components/GlobalNav.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>

</style>

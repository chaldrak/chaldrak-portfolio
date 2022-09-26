<template>
  <div :class="store.theme">
    <GlobalNav />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import GlobalNav from './components/GlobalNav.vue';
import Footer from './components/Footer.vue';
import { useThemeStore } from './stores/theme';

const store = useThemeStore()

</script>

<style scoped>

</style>

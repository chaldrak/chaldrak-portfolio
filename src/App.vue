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
import { useCounterStore } from './stores/counter';

const store = useCounterStore()

console.log(store.count)
</script>

<style scoped>

</style>

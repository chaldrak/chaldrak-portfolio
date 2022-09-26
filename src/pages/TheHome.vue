<template>
    <HeroHome />
</template>

<script setup lang="ts">
import HeroHome from '../components/HeroHome.vue';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore()

console.log(store.count)
</script>

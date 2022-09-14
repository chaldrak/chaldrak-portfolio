<template>
    <div>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            <slot></slot> 
            Programming Languages
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="pt-6">
              <div class="flow-root rounded-lg bg-gray-100 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center rounded-md bg-gray-50 border-2 border-indigo-600 p-3 shadow-lg">
                        <img :src="feature.icon" class="h-8 w-8" :alt="feature.name" />
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
                  <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    features: {
        type: Array,
        default: [{name: "", description: "", icon: ""}]
    }
})
</script>

<style>

</style>
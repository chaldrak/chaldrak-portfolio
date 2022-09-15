<template>
    <div>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500 emoji">
            <slot></slot> 
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="pt-6 group">
              <div class="flow-root rounded-lg group-hover:bg-gray-50 bg-gray-100 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span 
                      class="inline-flex items-center justify-center rounded-md bg-gray-50 border-4 border-indigo-600 p-3 shadow-lg"
                      :class="feature.style"
                    >
                        <img :src="feature.icon" class="h-8 w-8" :alt="feature.name" />
                    </span>
                  </div>
                  <h3 class="group-hover:underline mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
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

<style scoped>
.emoji:first-child {
    animation: bounce 5s infinite;
}
@keyframes bounce {
    0% {
        translate: -100% 0;
    }
    50% {
        translate: 0;
    }
    100% {
        translate: 0;
    }
}
</style>
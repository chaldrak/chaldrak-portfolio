<template>
  <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    <li v-for="file in props.files" :key="file.source" class="group relative">
      <div class=" aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 border-indigo-600 border-[1px] border-dashed group-hover:border-solid">
        <img :src="file.source" alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
        <button 
          type="button" 
          @click="openModal(file)"
          class="absolute inset-0 focus:outline-none"
        >
          <span class="sr-only">View details for {{ file.title }}</span>
        </button>
      </div>
      <p class="pointer-events-none mt-2 block group-hover:underline truncate text-sm font-medium text-gray-900">{{ file.title.toUpperCase() }}</p>
    </li>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg space-x-2 font-medium leading-6 text-gray-900"
                >
                  {{ data.title }}
                  <span v-if="data.isOwner" class="badge badge-primary">Owner</span>
                  <span v-else class="badge badge-secondary">Contributor</span>
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                  <div class="pt-5 flex justify-start space-x-4 avatar">
                    <div
                      v-for="language in data.languages"
                      :key="language"
                      class="w-10 rounded"
                    >
                      <img :src="language.src" :alt="language.alt" />
                    </div>
                  </div>
                </div>
  
                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-full border border-transparent bg-gray-900 px-1 py-1 text-sm font-medium text-gray-50 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 absolute top-2 right-2"
                    @click="closeModal"
                  >
                    <WindowClose />
                  </button>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <a v-if="data.githubLink" :href="data.githubLink" type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm" @click="open = false">
                    Deactivate
                  </a>
                  <a :href="data.url" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    target="_blank"
                  >
                    <Export class="w-2 h-2" />
                    <span>Visit+</span>
                  </a>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import WindowClose from "../../node_modules/vue-material-design-icons/WindowClose.vue"
import Export from "../../node_modules/vue-material-design-icons/Export.vue"

const props = defineProps({
  files: {
    type: Array,
    default: []
  }
});

const isOpen = ref(false);
const data = ref([]);

function closeModal() {
  isOpen.value = false
}
function openModal(file) {
  isOpen.value = true
  data.value = file;
}

</script>
<template>
  <div class="relative py-16">
    <div class="absolute inset-x-0 top-0 hidden h-1/2 lg:block" aria-hidden="true" />
    <div class="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
      <div class="lg:grid lg:grid-cols-12">
        <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
          <div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
          <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
            <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
              <img class="rounded-3xl object-cover object-center shadow-2xl" src="../assets/resume.jpg" alt="" />
            </div>
          </div>
        </div>

        <div class="relative bg-indigo-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
          <div class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
            <svg class="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-indigo-500" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
            <svg class="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-indigo-500" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
          </div>
          <div class="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
            <h2 class="text-3xl font-bold tracking-tight text-white" id="join-heading">My Resume</h2>
            <p class="text-lg text-white">Click the button below to download an English version of our Resume. That includes all the information about our skills and knowledge.</p>
            <a 
              class="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-200 sm:inline-block sm:w-auto" 
              :href="Resume"
              download="chaldrak_resume"
            >
              <div class="inline-flex space-x-2">
                <Download />
                <span>Download</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Download from "../../node_modules/vue-material-design-icons/FileDownload.vue"
import Resume from "/src/assets/NEW_CV_ENGLISH (1).pdf"

</script>
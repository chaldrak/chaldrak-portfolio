<template>
  <div class=" min-h-screen">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-lg font-semibold text-indigo-600">Achievements</h2>
        <p class="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Take a look on our portfolio.</p>
        <p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">Here you have a non-exhaustive list of the different web applications we have worked on. Some as an owner and some as a contributor.</p>
      </div>
      <BaseCard :files="files" />
    </div>
  </div>
</template>

<script setup>
import BaseCard from '../components/BaseCard.vue';

const files = [
  {
    title: 'Visual Design Cafe',
    url: "https://v3.visualdesigncafe.com/",
    githubLink: "",
    isOwner: false,
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664101934/Capture_d_%C3%A9cran_du_2022-09-25_11-31-11_t9xrpf.png',
    languages: [
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
        alt: "vue js"
      },
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        alt: "html"
      },
      {
        src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        alt: "tailwindcss"
      },
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        alt: "typescript"
      }
    ]
  },
  {
    title: 'Vue Counter',
    isOwner: true,
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100923/Capture_d_%C3%A9cran_du_2022-09-25_11-15-00_laiw05.png',
  },
  {
    title: 'LearnBetter',
    isOwner: true,
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100703/Capture_d_%C3%A9cran_du_2022-09-25_10-42-50_chcnce.png',
  },
  {
    title: 'Twitter Clone',
    url: "https://counter-vuex-app.vercel.app/",
    isOwner: true,
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100699/Capture_d_%C3%A9cran_du_2022-09-25_10-29-08_pjuaue.png',
  },
  {
    title: 'Instagram Clone',
    isOwner: true,
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100699/Capture_d_%C3%A9cran_du_2022-09-25_10-38-14_wptvud.png',
  },
  {
    title: 'Facebook Clone',
    url: "https://monfacebook.herokuapp.com/sessions/new",
    isOwner: true,
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100698/Capture_d_%C3%A9cran_du_2022-09-25_10-41-25_tjoogi.png',
  }
];

</script>

<style>

</style>
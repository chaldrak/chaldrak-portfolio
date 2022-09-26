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
    description: "This is the official website of the company VISUAL DESIGN CAFE. It provides tools, content, and tutorials to help game developers realize their projects.",
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
    description: "This application is a sample hosted by VERCEL. Using VueX, Vue 3, and an API that generates a random decimal, it is a counter.",
    isOwner: true,
    url: "https://counter-vuex-app.vercel.app/",
    githubLink: "https://github.com/chaldrak/counter-vuex-app.git",
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100923/Capture_d_%C3%A9cran_du_2022-09-25_11-15-00_laiw05.png',
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
    title: 'LearnBetter',
    description: "LearnBetter is a web application developed in Ruby on Rails. It is a clone of Stackoverflow and hosted on Heroku.",
    isOwner: true,
    url: "http://learnbetterdic.herokuapp.com/",
    githubLink: "https://github.com/chaldrak/original_app_learnBetter.git",
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100703/Capture_d_%C3%A9cran_du_2022-09-25_10-42-50_chcnce.png',
    languages: [
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        alt: "javascript"
      },
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        alt: "html"
      },
      {
        src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg",
        alt: "css"
      },
      {
        src: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
        alt: "ruby"
      },
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
        alt: "ruby on rails"
      },
      {
        src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
        alt: "Heroku"
      }
    ]
  },
  {
    title: 'Twitter Clone',
    description: "This application is a clone of a bit part of Twitter. It is hosted by Heroku.",
    url: "https://counter-vuex-app.vercel.app/",
    githubLink: "https://github.com/chaldrak/tweeter-clone.git",
    isOwner: true,
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100699/Capture_d_%C3%A9cran_du_2022-09-25_10-29-08_pjuaue.png',
    languages: [
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        alt: "html"
      },
      {
        src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg",
        alt: "css"
      },
      {
        src: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
        alt: "ruby"
      },
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
        alt: "ruby on rails"
      },
      {
        src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
        alt: "Heroku"
      }
    ]
  },
  {
    title: 'Instagram Clone',
    description: "This application is a clone of a bit part of Instagram. It is hosted by Heroku.",
    isOwner: true,
    url: "https://instadrak.herokuapp.com/",
    githubLink: "https://github.com/chaldrak/instadrak.git",
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100699/Capture_d_%C3%A9cran_du_2022-09-25_10-38-14_wptvud.png',
    languages: [
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        alt: "html"
      },
      {
        src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg",
        alt: "css"
      },
      {
        src: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
        alt: "ruby"
      },
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
        alt: "ruby on rails"
      },
      {
        src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
        alt: "Heroku"
      }
    ]
  },
  {
    title: 'Facebook Clone',
    description: "This application is a clone of a bit part of Facebook. It is hosted by Heroku.",
    url: "https://monfacebook.herokuapp.com/sessions/new",
    githubLink: "https://github.com/chaldrak/mon-facebook.git",
    isOwner: true,
    source: 'https://res.cloudinary.com/dumxkdcvd/image/upload/v1664100698/Capture_d_%C3%A9cran_du_2022-09-25_10-41-25_tjoogi.png',
    languages: [
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        alt: "html"
      },
      {
        src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg",
        alt: "css"
      },
      {
        src: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
        alt: "ruby"
      },
      {
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
        alt: "ruby on rails"
      },
      {
        src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
        alt: "Heroku"
      }
    ]
  }
];

</script>

<style>

</style>
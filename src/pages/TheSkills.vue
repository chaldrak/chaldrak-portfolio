<template>
    <div class="relative bg-white py-10 sm:py-16 lg:py-24">
      <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-lg font-semibold text-indigo-600">My Skills</h2>
        <hr class="mt-10 border border-indigo-600">
        <HeroSkills :features="languages">
            💫 Programming Languages
        </HeroSkills>
        <hr class="mt-10 border border-indigo-600">
        <HeroSkills :features="frontend">
            💥 Frontend Development
        </HeroSkills>
      </div>
    </div>
</template>
  
<script setup>
import HeroSkills from '../components/HeroSkills.vue';
  
const languages = [
    {
      name: 'C',
      description: "Fifty years have passed since the first release, C has maintained its popularity with regular additions and improvements to the language.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
,
    },
    {
      name: 'Java',
      description: "In the top three spot, as the third most demanded programming language, we found Java.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: 'JavaScript',
      description: "Currently, JavaScript is by far the most demanded programming language in the entire market.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: 'TypeScript',
      description: "Many new JavaScript frameworks are entirely written with TypeScript, like Angular or NestJS.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: 'PHP',
      description: "Twenty-seven years since its creation, PHP is still the fifth top most demanded language.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    },
    {
      name: 'Ruby',
      description: "Even though top seven may not seem much, Ruby runs some of the top tech companies nowadays, like Twitter, Crunchbase or Github.",
      icon: "	https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    }
  ];

const frontend = [
    {
      name: 'VueJs',
      description: "Fifty years have passed since the first release, C has maintained its popularity with regular additions and improvements to the language.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
,
    },
    {
      name: 'Angular',
      description: "In the top three spot, as the third most demanded programming language, we found Java.",
      icon: "https://angular.io/assets/images/logos/angular/angular.svg",
    },
    {
      name: 'Bootstrap',
      description: "Currently, JavaScript is by far the most demanded programming language in the entire market.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    },
    {
      name: 'CSS3',
      description: "Many new JavaScript frameworks are entirely written with TypeScript, like Angular or NestJS.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: 'HTML5',
      description: "Twenty-seven years since its creation, PHP is still the fifth top most demanded language.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: 'Tailwindcss',
      description: "Even though top seven may not seem much, Ruby runs some of the top tech companies nowadays, like Twitter, Crunchbase or Github.",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    }
]
</script>
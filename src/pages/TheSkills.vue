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

        <hr class="mt-10 border border-indigo-600">

        <HeroSkills :features="backend">
          🔥 Backend Development
        </HeroSkills>

        <hr class="mt-10 border border-indigo-600">

        <HeroSkills :features="database">
          🔥 Database and Modeling
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
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      style: "group-hover:border-blue-600"
    },
    {
      name: 'Java',
      description: "In the top three spot, as the third most demanded programming language, we found Java.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      style: "group-hover:border-red-400"
    },
    {
      name: 'JavaScript',
      description: "Currently, JavaScript is by far the most demanded programming language in the entire market.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      style: "group-hover:border-yellow-400"
    },
    {
      name: 'TypeScript',
      description: "Many new JavaScript frameworks are entirely written with TypeScript, like Angular or NestJS.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      style: "group-hover:border-blue-500"
    },
    {
      name: 'PHP',
      description: "Twenty-seven years since its creation, PHP is still the fifth top most demanded language.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      style: "group-hover:border-slate-500"
    },
    {
      name: 'Ruby',
      description: "Even though top seven may not seem much, Ruby runs some of the top tech companies nowadays, like Twitter, Crunchbase or Github.",
      icon: "	https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
      style: "group-hover:border-red-800"
    }
];

const frontend = [
    {
      name: 'VueJs',
      description: "Developed by Evan You, an ex-Google Employee, Vue is also an open-source, JavaScript framework.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
      style: "group-hover:border-green-600"
    },
    {
      name: 'Angular',
      description: "Angular is an open-source JavaScript framework based on TypeScript. Google runs it, and one of its main goals is to build single-page apps.",
      icon: "https://angular.io/assets/images/logos/angular/angular.svg",
      style: "group-hover:border-red-600"
    },
    {
      name: 'Bootstrap',
      description: "Bootstrap is a free front-end framework for faster and easier web development.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      style: "group-hover:border-purple-600"
    },
    {
      name: 'CSS3',
      description: "CSS, or Cascading Style Sheets, is a design language that simplifies making web pages presentable.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      style: "group-hover:border-blue-500"
    },
    {
      name: 'HTML5',
      description: "HTML is widely used for Web Page Development, Game Development, Internet Navigation, Offline Support and Responsive UI.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      style: "group-hover:border-orange-600"
    },
    {
      name: 'Tailwindcss',
      description: "TailwindCSS is a framework like no other. Rather than constraining you to a set design, it gives you the tools and the standardization to build exactly what you want.",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      style: "group-hover:border-sky-600"
    }
];

const backend = [
    {
      name: 'NodeJs',
      description: "Developed by Evan You, an ex-Google Employee, Vue is also an open-source, JavaScript framework.",
      icon: "	https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      style: "group-hover:border-green-600"
    },
    {
      name: 'Spring',
      description: "Angular is an open-source JavaScript framework based on TypeScript. Google runs it, and one of its main goals is to build single-page apps.",
      icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      style: "group-hover:border-green-500"
    },
    {
      name: 'Laravel',
      description: "Bootstrap is a free front-end framework for faster and easier web development.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
      style: "group-hover:border-red-500"
    },
    {
      name: 'Ruby on Rails',
      description: "CSS, or Cascading Style Sheets, is a design language that simplifies making web pages presentable.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
      style: "group-hover:border-red-800"
    }
];

const database = [
    {
      name: 'MySql',
      description: "Developed by Evan You, an ex-Google Employee, Vue is also an open-source, JavaScript framework.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      style: "group-hover:border-green-600"
    },
    {
      name: 'PostgreSQL',
      description: "Angular is an open-source JavaScript framework based on TypeScript. Google runs it, and one of its main goals is to build single-page apps.",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      style: "group-hover:border-green-500"
    },
    {
      name: 'MariaDb',
      description: "Bootstrap is a free front-end framework for faster and easier web development.",
      icon: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
      style: "group-hover:border-red-500"
    },
    {
      name: 'Sqlite',
      description: "CSS, or Cascading Style Sheets, is a design language that simplifies making web pages presentable.",
      icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      style: "group-hover:border-red-800"
    }
]
</script>
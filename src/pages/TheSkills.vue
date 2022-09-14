<template>
    <div class="relative bg-white py-10 sm:py-16 lg:py-24">
      <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-lg font-semibold text-indigo-600">My Skills</h2>
        <HeroSkills :features="languages">💫</HeroSkills>
      </div>
    </div>
</template>
  
<script setup>
import HeroSkills from '../components/HeroSkills.vue';
  
const languages = [
    {
      name: 'C',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
,
    },
    {
      name: 'Java',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: 'JavaScript',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: 'TypeScript',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: 'PHP',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    },
    {
      name: 'Ruby',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: "	https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    }
  ]
</script>
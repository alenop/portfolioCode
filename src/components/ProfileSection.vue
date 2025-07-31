<template>
  <div class="w-full h-full bg-blue-600 dark:bg-gray-700 p-4 md:p-6 flex flex-col items-center shadow-lg overflow-auto">
    <img 
      src="../assets/ProfilePhoto.jpg" 
      alt="Profile Picture" 
      class="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4"
    />
    <h2 class="text-md md:text-lg font-bold text-gray-800 dark:text-white">Sorli Pierre</h2>
    <p class="text-sm md:text-xl text-black dark:text-gray-300 text-left mt-2">
      Je suis un ingénieur en ingénierie logicielle, c'est a dire que je code 
        des applications, sites webs en m'organisant pour pouvoir faire des mises a jour rapides et travailler en équipe
        efficacement.
    </p>

    <div class="self-start mt-4 space-y-2">
      <p v-for="item in props.langages" class="text-sm md:text-xl text-black dark:text-gray-300">
        {{ item }}
      </p>
    </div>

    <div class="self-start mt-4 space-y-2">
      <p v-for="item in props.contacts" class="text-sm md:text-xl text-black dark:text-gray-300">
        {{ item }}
      </p>
    </div>

    <div class="self-start mt-4 space-y-2">
      <p v-for="item in props.refLinks" class="text-sm md:text-xl text-black dark:text-gray-300">
        <a :href="item.link" target="_blank">{{ item.name }}</a>
      </p>
    </div>
  </div>
</template>

  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    langages:{
      type:Array,
      default:['Typescript','Java','PHP','Python']
    },
    refLinks:{
      type:Array,
      default:[{name:"code source du site",link:"https://github.com/alenop/portfolioCode"},{name:"Profil linkedin",link:"https://www.linkedin.com/in/pierre-sorli/"}]
    },
    contacts:{
      type:Array,
      default:['mail : pierre.sorli@gmail.com']
    }

  })
  // No additional script needed for now. This is a simple static profile section.
  </script>
  
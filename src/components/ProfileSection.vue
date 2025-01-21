<template>
  <div class="h-full bg-blue-600 dark:bg-gray-700 p-6 flex flex-col items-center shadow-lg ">
      <img 
        src="../assets/ProfilePhoto.jpg" 
        alt="Profile Picture" 
        class="rounded-full w-32 h-32 mb-4"
      />
      <h2 class="text-lg font-bold text-gray-800 dark:text-white">Sorli Pierre</h2>
      <p class="text-xl text-black dark:text-gray-300 text-left ">
        Je suis un ingénieur en ingénierie logicielle, c'est a dire que je code 
        des applications, sites webs en m'organisant pour pouvoir faire des mises a jour rapides et travailler en équipe
        efficacement. 
      </p>
      <br>
      <div class="self-start">
        <p v-for="item in props.langages" class="text-xl text-black dark:text-gray-300 text-left ">
          {{ item }}
        </p>
      </div>
      <br>
      <div class="self-start">
        <p v-for="item in props.refLinks" class="text-xl text-black dark:text-gray-300 text-left ">
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
      default:[{name:"code source du site",link:"http://google.com"}]
    }

  })
  // No additional script needed for now. This is a simple static profile section.
  </script>
  
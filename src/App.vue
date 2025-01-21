<template>
  <div class="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 dark:from-gray-800 dark:to-blue-900 flex">
    <!-- Left Section: Profile -->
    <ProfileSection class="w-1/4" />
    
    <!-- Right Section: Main Content -->
    <div class="w-3/4 flex flex-col">
      <HorizontalMenu>
        <button
        @click="toggleTheme"
        class="px-4 py-2 bg-white text-black rounded dark:bg-gray-700 dark:text-white"
      >
        Toggle Theme
      </button>
      </HorizontalMenu>
      <router-view class="flex-grow" />
      
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HorizontalMenu from "./components/HorizontalMenu.vue";
import ProfileSection from "./components/ProfileSection.vue";

const isDarkTheme = ref(false);
toggleTheme();
function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value;
  const html = document.documentElement;
  if (isDarkTheme.value) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
</script>

<template>
    <aside class="w-64 h-full bg-gray-800 text-white flex flex-col shadow-lg">
      <div class="py-4 px-6 bg-gray-900 text-center text-xl font-bold">
        Mon Menu
      </div>
      <ul class="flex-grow">
        <li
          v-for="menu in menus"
          :key="menu.label"
          class="border-b border-gray-700"
        >
          <!-- Élément principal -->
          <button
            class="w-full text-left px-6 py-3 hover:bg-gray-700 focus:outline-none flex justify-between items-center"
            @click="toggleMenu(menu.label)"
          >
            {{ menu.label }}
            <span
              class="transition-transform"
              :class="{ 'rotate-180': isOpen(menu.label) }"
            >
              ▼
            </span>
          </button>
          <!-- Sous-menu -->
          <ul
            v-if="isOpen(menu.label)"
            class="bg-gray-700"
          >
            <li
              v-for="item in menu.items"
              :key="item"
              class="px-10 py-2 hover:bg-gray-600"
            >
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Liste des menus
  const menus = [
    { label: "Menu 1", items: ["Option 1.1", "Option 1.2", "Option 1.3"] },
    { label: "Menu 2", items: ["Option 2.1", "Option 2.2", "Option 2.3"] },
    { label: "Menu 3", items: ["Option 3.1", "Option 3.2"] },
    { label: "Menu 4", items: ["Option 4.1", "Option 4.2", "Option 4.3"] },
  ];
  
  // Gestion de l’état des sous-menus ouverts
  const openMenus = ref([]);
  
  // Fonction pour ouvrir/fermer un sous-menu
  const toggleMenu = (label) => {
    if (openMenus.value.includes(label)) {
      openMenus.value = openMenus.value.filter((item) => item !== label);
    } else {
      openMenus.value.push(label);
    }
  };
  
  // Vérifier si un sous-menu est ouvert
  const isOpen = (label) => openMenus.value.includes(label);
  </script>
  
  <style scoped>
  /* Rotation de l'icône au clic */
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>
  
<template>
  <nav class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md w-full">
    <div class="container mx-auto flex justify-center py-6">
      <ul class="flex space-x-8">
        <li v-for="menu in menus" :key="menu.label" class="relative group">
          <!-- Main Menu Item -->
          <button
            v-if="!menu.items"
            @click="navigateTo(menu.id)"
            class="px-4 py-2 font-semibold hover:bg-indigo-700 rounded-lg transition"
          >
            {{ menu.label }}
          </button>
          <button
            v-else
            class="px-4 py-2 font-semibold hover:bg-indigo-700 rounded-lg transition"
          >
            {{ menu.label }}
          </button>

          <!-- Dropdown Menu -->
          <ul
            v-if="menu.items"
            class="absolute left-1/2 transform -translate-x-1/2 top-full hidden group-hover:block bg-white text-black shadow-lg rounded-lg w-40 text-center z-10"
          >
            <li
              v-for="item in menu.items"
              :key="item.id"
              class="px-4 py-2 hover:bg-gray-200 transition cursor-pointer"
            >
              <button @click="navigateTo(item.id)" class="block">
                {{ item.label }}
              </button>
            </li>
          </ul>
        </li>
        <li>
          <slot></slot>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// Method to navigate based on the provided ID
function navigateTo(id) {
  if(id === 'contact') {
    router.push({name:'contact'})
  }else {
    router.push({ name: 'article', params: { id } });
  }
  }
if(window.location.href === "http://localhost:5173/"){
  navigateTo("summary");
}
const menus = [
  { label: "Accueil", id: "summary" },
  {
    label: "Réalisations",
    items: [
      { label: "Signature", id: "demande_signature" },
      { label: "Automatisation de rendez-vous", id: "automatisation" },
      { label: "Interface utilisateur", id: "interface_utilisateur" },
    ],
  },
  {
    label: "Compétences",
    items: [
      { label: "Refactoring", id: "Refactoring" },
      { label: "DDD", id: "ddd" },
      { label: "Principes SOLID", id:"solid-principles"}
    ],
  },
  {
    label: "Personnalité",id:"values"
  },
  {
    label:'contact',id:'contact'
  }
];
</script>

<template>
  <div class="flex flex-col md:flex-row w-full">



    <!-- Main Content Column -->
    <div class="flex-1 flex flex-col">
      <!-- Top Navigation Bar -->
      <nav class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md w-full">
        <div class="container mx-auto p-4">
          <!-- Toggle Button (mobile only) -->
          <div class="flex justify-between items-center md:hidden">
            <span class="text-xl font-bold">Menu</span>
            <button @click="isOpen = !isOpen" class="focus:outline-none">
              ☰
            </button>
          </div>

          <!-- Menu Items -->
          <ul
            :class="[
              'flex flex-col md:flex-row md:space-x-8',
              isOpen ? 'block' : 'hidden md:flex'
            ]"
          >
            <li v-for="menu in menus" :key="menu.label" class="relative group px-4 py-2">
              <div v-if="!menu.items">
                <button
                  @click="navigateTo(menu.id)"
                  class="font-semibold hover:bg-indigo-700 rounded-lg transition w-full text-left md:text-center"
                >
                  {{ menu.label }}
                </button>
              </div>
              <div v-else>
                <button
                  @click="toggleDropdown(menu.label)"
                  class="font-semibold hover:bg-indigo-700 rounded-lg transition w-full text-left md:text-center"
                >
                  {{ menu.label }}
                </button>
                <ul
                  v-show="activeDropdown === menu.label"
                  class="bg-white text-black shadow-lg rounded-lg mt-2 w-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-full md:w-40 z-10"
                >
                  <li
                    v-for="item in menu.items"
                    :key="item.id"
                    class="px-4 py-2 hover:bg-gray-200 transition cursor-pointer"
                  >
                    <button
                      @click="navigateTo(item.id)"
                      class="block w-full text-left"
                    >
                      {{ item.label }}
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            <li class="px-4 py-2">
              <slot />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isOpen = ref(false);
const isSummaryOpen = ref(false);
const activeDropdown = ref(null);

function toggleDropdown(label) {
  activeDropdown.value = activeDropdown.value === label ? null : label;
}

function navigateTo(id) {
  isOpen.value = false;
  activeDropdown.value = null;
  isSummaryOpen.value = false;
  if (id === 'contact') {
    router.push({ name: 'contact' });
  } else {
    router.push({ name: 'article', params: { id } });
  }
}

const menus = [
  { label: 'Accueil', id: 'summary' },
  {
    label: 'Réalisations',
    items: [
      { label: 'Signature', id: 'demande_signature' },
      { label: 'Automatisation de rendez-vous', id: 'automatisation' },
      { label: 'Interface utilisateur', id: 'interface_utilisateur' },
    ],
  },
  {
    label: 'Compétences',
    items: [
      { label: 'Refactoring', id: 'Refactoring' },
      { label: 'DDD', id: 'ddd' },
      { label: 'Principes SOLID', id: 'solid-principles' },
    ],
  },
  { label: 'Personnalité', id: 'values' },
  { label: 'Contact', id: 'contact' },
];
</script>

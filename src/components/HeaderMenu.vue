<template>
  <nav class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 shadow-md">
    <ul class="flex justify-center space-x-6">
      <li
        v-for="menu in menus"
        :key="menu.label"
        class="relative group"
      >
        <button class="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-700 transition">
          {{ menu.label }}
        </button>
        <!-- Sous-menu -->
        <ul
          class="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-lg"
        >
          <li
            v-for="item in menu.items"
            :key="item"
            class="px-6 py-3 hover:bg-gray-200 transition cursor-pointer"
          >
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const menus = [
  { label: 'Menu 1', items: ['Option 1.1', 'Option 1.2', 'Option 1.3'] },
  { label: 'Menu 2', items: ['Option 2.1', 'Option 2.2', 'Option 2.3'] },
  { label: 'Menu 3', items: ['Option 3.1', 'Option 3.2'] },
  { label: 'Menu 4', items: ['Option 4.1', 'Option 4.2', 'Option 4.3'] },
  { label: 'Menu 5', items: ['Option 5.1', 'Option 5.2'] },
  { label: 'Menu 6', items: ['Option 6.1', 'Option 6.2', 'Option 6.3'] },
];
</script>

<style scoped>
/* Pour améliorer encore le style, si nécessaire */
</style>

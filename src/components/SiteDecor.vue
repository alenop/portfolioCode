<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-4">
      <h1 class="text-3xl font-bold">Mon Site Web</h1>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2025 Mon Site. Tous droits réservés.</p>
    </footer>
  </div>
</template>

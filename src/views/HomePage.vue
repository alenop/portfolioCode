<template>
  <div class="text-center bg-black">
    <h2 class="text-3xl font-bold text-white mb-6">Bienvenue sur notre site !</h2>
    <p class="text-white">
      Découvrez moi
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div
        class="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition m-auto"
        v-for="(card, index) in cards"
        :key="index"
      >
        <h3 class="text-xl font-semibold mb-4">{{ card.title }}</h3>
        <p class="text-gray-600">{{ card.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  { title: 'Fonctionnalité 1', content: 'Description de la fonctionnalité 1.' },
  { title: 'Fonctionnalité 2', content: 'Description de la fonctionnalité 2.' },
  { title: 'Fonctionnalité 3', content: 'Description de la fonctionnalité 3.' },
];
</script>

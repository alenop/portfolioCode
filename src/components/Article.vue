<template>
  <div class="bg-white p-6 shadow-md rounded-lg">
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'content']);
</script>

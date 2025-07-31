<template>
  <div class="summary-widget">
    <h2 class="text-2xl font-semibold mb-4">Sommaire</h2>
    <ul>
      <li
        v-for="sub in subsections"
        :key="sub.subtitle"
        class="mb-2"
      >
        <a
          href="#"
          class="text-blue-600 dark:text-gray-300 hover:underline"
          @click.prevent="$emit('scrollTo', sub)"
          :class="{ 'font-bold underline': highlighted === sub.subtitle }"
        >
          {{ sub.subtitle }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  subsections: Array,
  highlighted: String,
});
defineEmits(['scrollTo']);
</script>

<style scoped>
.summary-widget {
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}
</style>

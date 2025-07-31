<template>
  <div v-if="article" class="article-container text-black dark:text-gray-300 text-xl flex flex-col md:flex-row" ref="refToScrollTop">
    
<!-- Back to Top Widget -->
    <div
      class="fixed left-2 top-1/2 transform -translate-y-1/2 z-50 bg-white dark:bg-gray-800 shadow-md rounded-full p-2 hover:bg-indigo-600 hover:text-white transition cursor-pointer"
      @click="scrollToTop"
      title="Back to top"
    >
      ⬆️
    </div>

    <!-- Summary Widget on the Left -->
    <SummaryWidget
      :subsections="article.subsections"
      :highlighted="highlightedSubtitle"
      @scrollTo="scrollToSubsection"
      class="md:w-1/4 w-full p-4 top-4" 
      
    />

    <!-- Article Content -->
    <div :class="[showSummary ? 'md:w-3/4' : 'w-full', 'p-4']">
      <h1 class="text-4xl mb-4">{{ article.title }}</h1>
      <p class="mb-8">{{ article.content }}</p>

      <!-- Subsections -->
      <div
        v-for="subsection in article.subsections"
        :key="subsection.subtitle"
        class="subsection mb-6"
      >
        <h2
          :id="subsection.subtitle"
          :class="{ highlight: highlightedSubtitle === subsection.subtitle }"
          class="text-2xl mb-2"
        >
          {{ subsection.subtitle }}
        </h2>
        <p>{{ subsection.content }}</p>

        <!-- Nested Subsections -->
        <div
          v-if="subsection.subsections && subsection.subsections.length"
          class="nested-subsections ml-4 mt-4"
        >
          <div
            v-for="nested in subsection.subsections"
            :key="nested.subtitle"
            class="mb-2"
          >
            <h3 class="text-xl">{{ nested.subtitle }}</h3>
            <p>{{ nested.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import articles from '@/data/articles.json';
import SummaryWidget from '@/components/SummaryWidget.vue';

const props = defineProps({ id: { type: String, required: false } });
const article = ref(null);
const highlightedSubtitle = ref(null);
const refToScrollTop = ref(null);

onMounted(() => {
  const articleToSeeId = props.id ? props.id : 'summary';
  article.value = articles.find((a) => a.id === articleToSeeId);
});

watch(
  () => props.id,
  (newId) => {
    article.value = articles.find((a) => a.id === newId);
  },
  { immediate: true }
);

function scrollToTop() {
  if (refToScrollTop.value) {
    refToScrollTop.value.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function scrollToSubsection(subsection) {
  const el = document.getElementById(subsection.subtitle);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    highlightedSubtitle.value = subsection.subtitle;
  }
}
</script>

<style scoped>
.article-container {
  padding: 20px;
}
.highlight {
  background-color: green;
  color: white;
}
</style>

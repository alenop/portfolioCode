<template>
  <div v-if="article" class="article-container text-black dark:text-gray-300 text-xl flex">
    <!-- Summary Section on the Left -->
    <div class="summary sticky w-1/4 p-4">
      <h2 class="text-2xl font-semibold">Summary</h2>
      <ul>
        <li v-for="subsection in article.subsections" :key="subsection.subtitle">
          <a class="dark:text-gray-300" href="#" @click.prevent="scrollToSubsection(subsection)">
            {{ subsection.subtitle }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Article Content Section on the Right -->
    <div class="content w-3/4 p-4">
      <h1 class="text-4xl">{{ article.title }}</h1>
      <br>
      <p>{{ article.content }}</p>

      <!-- Loop through the subsections of the article -->
      <div v-for="subsection in article.subsections" :key="subsection.subtitle" class="subsection">
        <h2 :class="{ highlight: highlightedSubtitle === subsection.subtitle }" :id="subsection.subtitle" class="text-2xl">{{ subsection.subtitle }}</h2>
        <p>{{ subsection.content }}</p>

        <!-- If there are further subsections inside a subsection, recursively display them -->
        <div v-if="subsection.subsections && subsection.subsections.length > 0" class="nested-subsections">
          <div v-for="nestedSubsection in subsection.subsections" :key="nestedSubsection.subtitle">
            <h3>{{ nestedSubsection.subtitle }}</h3>
            <p>{{ nestedSubsection.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
// Import the articles from JSON file
import articles from '@/data/articles.json';

// Prop to receive the `id` from the route
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const article = ref(null);
const highlightedSubtitle = ref(null);

// Load the article based on the id passed as prop
onMounted(() => {
  article.value = articles.find((article) => article.id === props.id);
});

// Watch the `id` prop to update the article when the ID changes
watch(
  () => props.id,
  (newId) => {
    article.value = articles.find((article) => article.id === newId);
  },
  { immediate: true } // Trigger the watcher immediately
);

// Function to scroll to a specific subsection when clicked in the summary
function scrollToSubsection(subsection) {
  const element = document.getElementById(subsection.subtitle);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    highlightedSubtitle.value = subsection.subtitle;
  }
}
</script>

<style scoped>
.article-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.summary {
  position: sticky;
  top: 20px; /* Keeps the summary 20px from the top */
  width: 25%;
  padding-right: 20px;
  max-height: calc(100vh - 40px); /* Prevents the summary from taking too much vertical space */
  overflow-y: auto; /* Allows scrolling if content exceeds the available space */
}

.content {
  width: 70%;
}

.subsection {
  margin-top: 20px;
}

.highlight {
  background-color: green; /* Highlight background in red */
  color: white; /* Make the text white when highlighted */
}

.nested-subsections {
  margin-left: 20px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li a {
  text-decoration: none;
  color: blue;
  cursor: pointer;
}

ul li a:hover {
  text-decoration: underline;
}
</style>

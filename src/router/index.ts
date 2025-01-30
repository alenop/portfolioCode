import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import Contact from '@/views/ContactPage.vue';
// @ts-ignore
import ArticlePage from '@/views/ArticlePage.vue';  // Import ArticlePage component

const routes = [
  {
    path: '/',
    name: 'home',
    component: ArticlePage,
  },
  {
    path: '/article/:id',  // Dynamic route for articles
    name: 'article',
    component: ArticlePage,
    props: true,  // Pass the `id` as a prop to the component
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

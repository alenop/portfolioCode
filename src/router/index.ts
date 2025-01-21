import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import Home from '@/views/HomePage.vue';
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
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: () => import('@/views/Contact.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

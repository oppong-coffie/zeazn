import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from './MainPage.vue'; // Import your components

const routes = [
  { path: '/', component: MainPage },
  // Other routes...
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode if you want # in the URL
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../views/HomeView.vue"
import Courses from "../components/course/CourseListing.vue"


// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/courses', name: 'courses', component: Courses },
];

// Create router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

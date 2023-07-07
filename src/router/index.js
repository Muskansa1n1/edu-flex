import { createRouter, createWebHistory } from "vue-router";

// Import your route components here
import HomePage from "../components/HomePage.vue";
import CourseList from "../components/CourseList.vue";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm"
const routes = [
  { path: "/", component: HomePage },
  { path: "/courses", component: CourseList },
  {path:"/login", component: LoginForm},
  {path:"/register", component: RegistrationForm}
  // Add more routes for other pages if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

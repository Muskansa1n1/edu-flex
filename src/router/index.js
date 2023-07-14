import { createRouter, createWebHistory } from "vue-router";

// Import your route components here
import HomePage from "../components/HomePage.vue";
import CourseList from "../components/CourseList.vue";
import LoginForm from "../components/LoginForm.vue";
import RegistrationForm from "../components/RegistrationForm.vue";
import EditProfile from "../components/EditProfile.vue";
import NotificationPage from "../components/NotificationPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/courses", component: CourseList },
  { path: "/login", component: LoginForm },
  { path: "/register", component: RegistrationForm },
  { path: "/profile", component: EditProfile },
  { path: "/notifications", component: NotificationPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

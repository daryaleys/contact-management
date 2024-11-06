import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/create",
		name: "create",
		component: () => import("../views/CreateContactView.vue"),
	},
	{
		path: "/edit/:id",
		name: "edit",
		component: () => import("../views/EditContactView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

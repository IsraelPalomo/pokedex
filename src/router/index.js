import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PokemonVista from "../views/PokemonVista.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},

	{
		path: "/PokemonVista/:id", // <- Segmento dinámico
		name: "PokemonVista",
		component: PokemonVista,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;

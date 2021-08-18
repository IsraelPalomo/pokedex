import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pokemons: [],
	},
	mutations: {
		buscarPokemons(state, payload) {
			state.pokemons = payload;
		},
	},
	actions: {
		async buscarPokemon({ commit }) {
			for (let i = 0; i < 899; i++) {
				try {
					const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
					const data = await res.json();

					commit("buscarPokemons", data);
				} catch (error) {
					console.log(error);
				}
			}
		},
	},
	modules: {},
});

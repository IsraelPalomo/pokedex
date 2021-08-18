import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pokemons: {},
		pokemon: [],
	},
	mutations: {
		buscarPokemons(state, payload) {
			state.pokemons = payload;
		},
	},
	actions: {
		async buscarPokemon({ commit }) {
			for (let i = 1; i < 150; i++) {
				try {
					const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
					const data = await res.json();

					commit("buscarPokemons", data);

					this.state.pokemon.push(this.state.pokemons);
				} catch (error) {
					console.log(error);
				}
			}

			console.log(this.state.pokemon[4]);
		},
	},
	modules: {},
});

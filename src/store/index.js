import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pokemons: {},
		pokemon: [],
		colores: [],
		indice: 1,
		valorBucle: 25,
	},
	mutations: {
		buscarPokemons(state, payload) {
			state.pokemons = payload;
		},
	},
	actions: {
		async buscarPokemon({ commit }) {
			for (this.state.indice; this.state.indice < 12; this.state.indice++) {
				try {
					const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.indice}`);
					const datas = await res.json();
					const datass = datas;
					const data = datass;

					commit("buscarPokemons", data);

					this.state.pokemon.push(this.state.pokemons);
				} catch (error) {
					console.log(error);
				}
			}
		},
		async cargarPokemon({ commit }) {
			for (this.state.indice; this.state.indice < this.state.valorBucle; this.state.indice++) {
				try {
					const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.indice}`);
					const datas = await res.json();
					const datass = datas;
					const data = datass;
					console.log(data);

					commit("buscarPokemons", data);

					this.state.pokemon.push(this.state.pokemons);
				} catch (error) {
					console.log(error);
				}
			}

			this.state.valorBucle = this.state.valorBucle + 12;
		},
	},
	modules: {},
});

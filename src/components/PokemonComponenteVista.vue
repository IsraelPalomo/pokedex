<template>
	<div>
		<h1>componente {{ $route.params.id }}</h1>
		<img :src="pokemon.sprites.front_default" alt="" />
	</div>
</template>

<script>
export default {
	name: "PokemonComponenteVista",
	data() {
		return {
			numeroPokemon: this.$route.params.id,
			pokemon: {},
		};
	},
	methods: {
		async buscarPokemonUnico() {
			try {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.numeroPokemon}`);
				const datas = await res.json();
				const datass = datas;
				const data = datass;
				this.pokemon = data;
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.buscarPokemonUnico();
	},
};
</script>

<style></style>

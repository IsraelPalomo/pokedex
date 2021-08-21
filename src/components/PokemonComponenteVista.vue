<template>
	<div class="TarjetaUnicaPokemon">
		<h1>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h1>
		<div class="contenedor-1">
			<div class="imagenes">
				<img class="imagenes__1" :src="pokemon.sprites.front_default" alt="" />
				<img class="imagenes__2" :src="pokemon.sprites.front_shiny" alt="" />
			</div>
			<div class="medidas">
				<span> Altura : {{ pokemon.height }} m </span>
				<br />
				<span> Peso : {{ pokemon.weight }} kg </span>
				<br />
				<span>
					Sexo: Masculino Femenino
				</span>
				<br />
				<span>
					Habilidad :
					{{
						pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
							pokemon.abilities[0].ability.name.slice(1)
					}}
				</span>
			</div>
			<div class="tipos">
				<p
					class="tipo1"
					:style="
						pokemon.types[0].type.name == 'fire'
							? 'background: #C72100'
							: pokemon.types[0].type.name == 'grass'
							? 'background:#66BA2A'
							: pokemon.types[0].type.name == 'electric'
							? 'background:#FBBA17'
							: pokemon.types[0].type.name == 'water'
							? 'background:#106CC7'
							: pokemon.types[0].type.name == 'ground'
							? 'background:#CFAE52'
							: pokemon.types[0].type.name == 'rock'
							? 'background:#9D863C'
							: pokemon.types[0].type.name == 'fairy'
							? 'background:#F0A9F0'
							: pokemon.types[0].type.name == 'poison'
							? 'background:#7D327E'
							: pokemon.types[0].type.name == 'bug'
							? 'background:#88960D'
							: pokemon.types[0].type.name == 'dragon'
							? 'background:#9481EB'
							: pokemon.types[0].type.name == 'psychic'
							? 'background:#D33367'
							: pokemon.types[0].type.name == 'flying'
							? 'background:#90A2F0'
							: pokemon.types[0].type.name == 'fighting'
							? 'background:#79301A'
							: pokemon.types[0].type.name == 'normal'
							? 'background:#C3BDB3'
							: pokemon.types[0].type.name == 'dark'
							? 'background:#0E0E0E'
							: pokemon.types[0].type.name == 'ghost'
							? 'background:#5E5EB0'
							: pokemon.types[0].type.name == 'ice'
							? 'background:#82DBF8'
							: pokemon.types[0].type.name == 'steel'
							? 'background:#9797A7'
							: ''
					"
				>
					{{
						pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)
					}}
				</p>
				<p
					class="tipo2"
					v-if="pokemon.types.length == 2"
					:style="
						pokemon.types[1].type.name == 'fire'
							? 'background: #C72100'
							: pokemon.types[1].type.name == 'grass'
							? 'background:#66BA2A'
							: pokemon.types[1].type.name == 'electric'
							? 'background:#FBBA17'
							: pokemon.types[1].type.name == 'water'
							? 'background:#106CC7'
							: pokemon.types[0].type.name == 'ground'
							? 'background:#CFAE52'
							: pokemon.types[1].type.name == 'rock'
							? 'background:#9D863C'
							: pokemon.types[1].type.name == 'fairy'
							? 'background:#F0A9F0'
							: pokemon.types[1].type.name == 'poison'
							? 'background:#7D327E'
							: pokemon.types[1].type.name == 'bug'
							? 'background:#88960D'
							: pokemon.types[1].type.name == 'dragon'
							? 'background:#9481EB'
							: pokemon.types[1].type.name == 'psychic'
							? 'background:#D33367'
							: pokemon.types[1].type.name == 'flying'
							? 'background:#90A2F0'
							: pokemon.types[1].type.name == 'fighting'
							? 'background:#79301A'
							: pokemon.types[1].type.name == 'normal'
							? 'background:#C3BDB3'
							: pokemon.types[1].type.name == 'dark'
							? 'background:#0E0E0E'
							: pokemon.types[1].type.name == 'ghost'
							? 'background:#5E5EB0'
							: pokemon.types[1].type.name == 'ice'
							? 'background:#82DBF8'
							: pokemon.types[1].type.name == 'steel'
							? 'background:#9797A7'
							: ''
					"
				>
					{{
						pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)
					}}
				</p>
			</div>
		</div>
		<div class="puntos_base">
			HP : {{ pokemon.stats[0].base_stat }} <br />
			Ataque : {{ pokemon.stats[1].base_stat }} <br />
			Defensa : {{ pokemon.stats[2].base_stat }} <br />
			Ataque-Especial : {{ pokemon.stats[3].base_stat }} <br />
			Defensa-Especial : {{ pokemon.stats[4].base_stat }} <br />
			Rapidez : {{ pokemon.stats[5].base_stat }} <br />
		</div>
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

<style lang="scss" scoped>
.TarjetaUnicaPokemon {
	h1 {
		text-align: center;
		padding: 1rem;
		color: white;
		background-color: #323232;
	}
	.imagenes {
		.imagenes__1 {
			width: 25rem;
			height: 25rem;
			margin: 0 auto;
		}
		.imagenes__2 {
			position: relative;
		}
	}
}
</style>

<template>
	<div class="TarjetaUnicaPokemon">
		<h1>{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h1>
		<div class="contenedor-1">
			<div class="imagenes">
				<img class="imagenes__1" :src="pokemon.sprites.front_default" alt="" />
			</div>
			<div class="medidas">
				<span> Altura : {{ pokemon.height }} m </span>

				<span> Peso : {{ pokemon.weight }} kg </span>

				<span>
					Sexo: Masculino Femenino
				</span>

				<span>
					Habilidad :
					{{
						pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
							pokemon.abilities[0].ability.name.slice(1)
					}}
				</span>
			</div>
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
		<div class="puntos_base">
			<span> HP : {{ pokemon.stats[0].base_stat }} </span>
			<span> Ataque : {{ pokemon.stats[1].base_stat }} </span>
			<span>Defensa : {{ pokemon.stats[2].base_stat }} </span>
			<span> Ataque-Especial : {{ pokemon.stats[3].base_stat }} </span>
			<span>Defensa-Especial : {{ pokemon.stats[4].base_stat }} </span>
			<span>Rapidez : {{ pokemon.stats[5].base_stat }} </span>
		</div>
		<router-link to="/" class="router"><button>Volver a la Pokedex</button></router-link>
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
				this.$swal.fire({
					icon: "Error",
					title: "Oops...",
					text: "Something went wrong!",
					footer: '<a href="">Why do I have this issue?</a>',
				});
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
		margin-bottom: 3rem;
	}
	.contenedor-1 {
		width: 80%;
		background-color: #323232;
		margin: 0 auto;
		max-width: 40rem;
		.imagenes {
			.imagenes__1 {
				margin: 0 auto;
				display: block;
				width: 15rem;
				height: 15rem;
				z-index: 99;
			}
		}
		.medidas {
			padding: 2rem;
			background-color: rgb(43, 156, 201);

			display: grid;
			gap: 1rem;
			grid-template-columns: 1fr;
			color: white;
			font-size: 1.3rem;
		}
	}
	.tipos {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin-top: 3rem;
		.tipo1 {
			padding: 0.5rem;
			border-radius: 15px;
			width: 5rem;
			text-align: center;
			color: #1d1b1b;
			font-weight: 600;
			font-size: 1.1rem;
		}
		.tipo2 {
			padding: 0.5rem;
			border-radius: 15px;
			width: 5rem;
			text-align: center;
			color: #1d1b1b;
			font-weight: 600;
			font-size: 1.1rem;
		}
	}
	.puntos_base {
		padding: 2rem;
		background-color: #323232;
		text-align: center;
		display: grid;
		grid-template-columns: 1fr;
		color: white;
		gap: 1rem;
		font-size: 1.3rem;
		margin-top: 3rem;
	}
	button {
		background-color: #da471b;
		color: white;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 7px;
		margin: 5rem auto;

		display: block;
		cursor: pointer;

		&:hover {
			background-color: #9e3819;
		}
	}
	.router {
		text-decoration: none;
	}
}

//TODO: MEDIA QUERYS

@media (min-width: 450px) {
}
@media (min-width: 650px) {
	.contenedor-1 {
		display: flex;
		.medidas {
			width: 100%;
		}
	}
}

@media (min-width: 900px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 2000px) {
}
</style>

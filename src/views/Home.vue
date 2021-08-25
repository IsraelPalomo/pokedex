<template>
	<div class="home" id="inicio">
		<a href="#inicio"><i class="fas fa-arrow-circle-up volver"></i></a>
		<div class="contenedor__titulo">
			<h1 class="titulo--principal"><span>Pokédex</span></h1>
			<div class="footer__sociales">
				<a href="https://www.instagram.com/diplodev/" target="_blank"
					><i class=" icono fab fa-instagram-square"></i
				></a>
				<a href="https://twitter.com/DevDiplo" target="_blank"
					><i class="icono fab fa-twitter-square"></i
				></a>
				<a href="https://www.linkedin.com/in/israel-palomo-espa%C3%B1a-544b05206/" target="_blank"
					><i class="icono fab fa-linkedin"></i
				></a>
				<a href="https://github.com/IsraelPalomo" target="_blank"
					><i class="icono fab fa-github-square"></i
				></a>
			</div>
		</div>
		<section class="buscador">
			<div class="parte1">
				<h2>Nombre o número</h2>
				<div class="buscador__barra">
					<input type="text" v-model="pokemonBusqueda" />
					<router-link :to="`/PokemonVista/${pokemonBusqueda}`"
						><button>
							<i class="fas fa-search"></i></button
					></router-link>
				</div>
			</div>
		</section>
		<section class="pokemons">
			<div
				class="tarjetaPokemon"
				v-for="(poke, index) in pokemon"
				:key="index"
				data-aos="fade-right"
				data-aos-duration="1000"
			>
				<router-link :to="`/PokemonVista/${poke.id}`">
					<div
						class="tarjetaPokemon__contenedorImg"
						:style="
							poke.types[0].type.name == 'fire'
								? 'background: #C72100'
								: poke.types[0].type.name == 'grass'
								? 'background:#66BA2A'
								: poke.types[0].type.name == 'electric'
								? 'background:#FBBA17'
								: poke.types[0].type.name == 'water'
								? 'background:#106CC7'
								: poke.types[0].type.name == 'ground'
								? 'background:#CFAE52'
								: poke.types[0].type.name == 'rock'
								? 'background:#9D863C'
								: poke.types[0].type.name == 'fairy'
								? 'background:#F0A9F0'
								: poke.types[0].type.name == 'poison'
								? 'background:#7D327E'
								: poke.types[0].type.name == 'bug'
								? 'background:#88960D'
								: poke.types[0].type.name == 'dragon'
								? 'background:#9481EB'
								: poke.types[0].type.name == 'psychic'
								? 'background:#D33367'
								: poke.types[0].type.name == 'flying'
								? 'background:#90A2F0'
								: poke.types[0].type.name == 'fighting'
								? 'background:#79301A'
								: poke.types[0].type.name == 'normal'
								? 'background:#C3BDB3'
								: poke.types[0].type.name == 'dark'
								? 'background:#0E0E0E'
								: poke.types[0].type.name == 'ghost'
								? 'background:#5E5EB0'
								: poke.types[0].type.name == 'ice'
								? 'background:#82DBF8'
								: poke.types[0].type.name == 'steel'
								? 'background:#9797A7'
								: ''
						"
					>
						<img
							class="tarjetaPokemon__contenedorImg__img"
							:src="poke.sprites.front_default"
							alt=""
						/>
					</div>
				</router-link>

				<p class="numeroPokemon">Nº {{ poke.id }}</p>
				<h3>{{ poke.name.charAt(0).toUpperCase() + poke.name.slice(1) }}</h3>

				<div class="tarjetaPokemon__tipos">
					<p
						class="tarjetaPokemon__tipos__tipo1"
						:style="
							poke.types[0].type.name == 'fire'
								? 'background: #C72100'
								: poke.types[0].type.name == 'grass'
								? 'background:#66BA2A'
								: poke.types[0].type.name == 'electric'
								? 'background:#FBBA17'
								: poke.types[0].type.name == 'water'
								? 'background:#106CC7'
								: poke.types[0].type.name == 'ground'
								? 'background:#CFAE52'
								: poke.types[0].type.name == 'rock'
								? 'background:#9D863C'
								: poke.types[0].type.name == 'fairy'
								? 'background:#F0A9F0'
								: poke.types[0].type.name == 'poison'
								? 'background:#7D327E'
								: poke.types[0].type.name == 'bug'
								? 'background:#88960D'
								: poke.types[0].type.name == 'dragon'
								? 'background:#9481EB'
								: poke.types[0].type.name == 'psychic'
								? 'background:#D33367'
								: poke.types[0].type.name == 'flying'
								? 'background:#90A2F0'
								: poke.types[0].type.name == 'fighting'
								? 'background:#79301A'
								: poke.types[0].type.name == 'normal'
								? 'background:#C3BDB3'
								: poke.types[0].type.name == 'dark'
								? 'background:#0E0E0E'
								: poke.types[0].type.name == 'ghost'
								? 'background:#5E5EB0'
								: poke.types[0].type.name == 'ice'
								? 'background:#82DBF8'
								: poke.types[0].type.name == 'steel'
								? 'background:#9797A7'
								: ''
						"
					>
						{{ poke.types[0].type.name.charAt(0).toUpperCase() + poke.types[0].type.name.slice(1) }}
					</p>
					<p
						class="tarjetaPokemon__tipos__tipo2 "
						v-if="poke.types.length == 2"
						:style="
							poke.types[1].type.name == 'fire '
								? 'background:#C72100'
								: poke.types[1].type.name == 'grass'
								? 'background:#66BA2A'
								: poke.types[1].type.name == 'electric'
								? 'background:#FBBA17'
								: poke.types[1].type.name == 'water'
								? 'background:#106CC7'
								: poke.types[1].type.name == 'ground'
								? 'background:#CFAE52'
								: poke.types[1].type.name == 'rock'
								? 'background:#9D863C'
								: poke.types[1].type.name == 'fairy'
								? 'background:#F0A9F0'
								: poke.types[1].type.name == 'poison'
								? 'background:#7D327E'
								: poke.types[1].type.name == 'bug'
								? 'background:#88960D'
								: poke.types[1].type.name == 'dragon'
								? 'background:#9481EB'
								: poke.types[1].type.name == 'psychic'
								? 'background:#D33367'
								: poke.types[1].type.name == 'flying'
								? 'background:#90A2F0'
								: poke.types[1].type.name == 'fighting'
								? 'background:#79301A'
								: poke.types[1].type.name == 'normal'
								? 'background:#C3BDB3'
								: poke.types[1].type.name == 'dark'
								? 'background:#0E0E0E'
								: poke.types[1].type.name == 'ghost'
								? 'background:#5E5EB0'
								: poke.types[1].type.name == 'ice'
								? 'background:#82DBF8'
								: poke.types[1].type.name == 'steel'
								? 'background:#9797A7'
								: poke.types[1].type.name == 'fire'
								? 'background:#C72100'
								: ''
						"
					>
						{{ poke.types[1].type.name.charAt(0).toUpperCase() + poke.types[1].type.name.slice(1) }}
					</p>
				</div>
			</div>
		</section>
		<div class="contenedor__btn">
			<button class="btn__cargarMas" @click="cargarPokemon(), pulse()">Cargar Mas</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

// @ is an alias to /src

export default {
	data() {
		return {
			pokemonn: [],
			pokemonBusqueda: "",
		};
	},
	name: "Home",
	components: {},

	computed: {
		...mapState(["pokemon"]),
	},
	methods: {
		...mapActions(["buscarPokemon", "cargarPokemon"]),
	},

	created() {
		this.buscarPokemon();
	},
};
</script>

<style lang="scss" scoped>
.home {
	.contenedor__titulo {
		display: flex;
		justify-content: center;
		align-items: center;
		.footer__sociales {
			font-size: 1.7rem;
			display: flex;
			gap: 1rem;

			text-decoration: none;
			i {
				color: #323232;
				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}
	.volver {
		position: fixed;
		right: 3rem;
		z-index: 99999;
		bottom: 3rem;
		font-size: 3rem;
		color: white;
		&:hover {
			transform: scale(1.1);
		}
	}
	.contenedor__btn {
		padding: 2rem 0;
		background-image: url("../assets/body_bg.png");
		.btn__cargarMas {
			margin: 0 auto;
			display: block;
			padding: 0.5rem 0.7rem;
			background-color: #f18655;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			font-size: 1.2rem;
			&:hover {
				transform: scale(1.1);
				background-color: #a05939;
			}
		}
	}

	.titulo--principal {
		background-color: white;
		color: grey;
		padding: 1rem;
	}
	span {
		color: #323232;
	}
	.buscador {
		background-color: #2f2f2f;
		color: white;
		padding: 2rem 2rem 2rem 1rem;
		text-align: center;
		margin: 0 auto;

		p {
			margin-top: 1rem;
			text-align: center;
			margin: 0 auto;
			padding: 1rem;
			background-color: rgb(14, 150, 14);
			font-size: 1.5rem;
			border-radius: 15px;
			margin-top: 1rem;
		}
		.buscador__barra {
			margin-top: 0.5rem;
		}
		input {
			margin-right: 1rem;
			height: 2rem;
		}
		button {
			padding: 0.5rem 0.7rem;
			background-color: #f18655;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			&:hover {
				transform: scale(1.1);
				background-color: #a05939;
			}
		}
	}
	.pokemons {
		background-image: url("../assets/body_bg.png");

		justify-items: center;
		padding: 5rem 2rem;
		display: grid;
		justify-content: center;

		.tarjetaPokemon {
			padding: 1rem;
			background-color: #313131;
			color: white;
			border-radius: 15px;
			margin-bottom: 3rem;

			overflow: hidden;
			min-height: 25rem;
			max-width: 15rem;
			cursor: pointer;
			box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.155), 0 6.7px 5.3px rgba(0, 0, 0, 0.222),
				0 12.5px 10px rgba(0, 0, 0, 0.275), 0 22.3px 17.9px rgba(0, 0, 0, 0.328),
				0 41.8px 33.4px rgba(0, 0, 0, 0.395), 0 100px 80px rgba(0, 0, 0, 0.55);

			&:hover {
				transform: scale(1.1);
				.tarjetaPokemon__contenedorImg__img {
					transform: scale(1.2);
					filter: drop-shadow(10px 20px 20px #000);
				}
			}

			.tarjetaPokemon__contenedorImg {
				border-radius: 150px;

				width: 15rem;
				height: 15rem;

				margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				top: -3.5rem;
				right: -3.5rem;
				img {
					width: 12rem;
					height: 12rem;
					position: relative;
					top: 3.5rem;
					right: 3.5rem;
					filter: drop-shadow(10px 10px 15px #000);
				}
			}
			.tarjetaPokemon__tipos {
				display: flex;
				gap: 1rem;
				margin-top: -1.5rem;
				align-items: center;
				.tarjetaPokemon__tipos__tipo1 {
					padding: 0.5rem;
					border-radius: 15px;
					width: 5rem;
					text-align: center;
				}
				.tarjetaPokemon__tipos__tipo2 {
					padding: 0.5rem;
					border-radius: 15px;
					width: 5rem;
					text-align: center;
				}
			}
		}
		.numeroPokemon {
			color: grey;
		}
	}
}

//TODO: MEDIA QUERYS

@media (min-width: 450px) {
}
@media (min-width: 650px) {
	.home {
		.buscador {
			display: flex;
			gap: 2rem;
		}
		.pokemons {
			display: grid;
			gap: 3rem;
			grid-template-columns: repeat(2, 1fr);
		}
	}
}

@media (min-width: 900px) {
	.home {
		.pokemons {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}
}
@media (min-width: 1200px) {
	.home {
		.pokemons {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}
	}
}
@media (min-width: 2000px) {
}
</style>

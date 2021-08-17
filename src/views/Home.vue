<template>
	<div class="home">
		<h1 class="titulo--principal">Pokédex</h1>
		<section class="buscador">
			<div class="parte1">
				<h2>Nombre o número</h2>
				<div class="buscador__barra">
					<input type="text" />
					<button>
						<i class="fas fa-search"></i>
					</button>
				</div>
			</div>
			<p>
				Busca el pokemon por su nombre <br />
				o por su numero en la pokedex
			</p>
		</section>
		<section class="pokemons"></section>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Home",
	components: {},
};
</script>

<style lang="scss" scoped>
.home {
	.titulo--principal {
		width: 100%;
		background-color: white;
		color: grey;
		padding: 1rem;
	}
	.buscador {
		background-color: #313131;
		color: white;
		padding: 2rem 2rem 2rem 1rem;
		text-align: left;

		p {
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
		}
	}
	.pokemons {
		background-color: #f2f2f2;
		height: 50rem;
	}
}

//TODO: MEDIA QUERYS

@media (min-width: 450px) {
}
@media (min-width: 650px) {
	.buscador {
		display: flex;
		gap: 2rem;
	}
}

@media (min-width: 900px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 2000px) {
}
</style>

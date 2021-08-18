<template>
	<section class="tarjetaPokemon">
		<div class="tarjetaPokemon__contenedorImg">
			<img class="tarjetaPokemon__contenedorImg__img" src="" alt="" />
		</div>
		<p class="numeroPokemon">Nº001</p>
		<h3>Bulbasur</h3>
		<div class="tarjetaPokemon__tipos">
			<p class="tarjetaPokemon__tipos__tipo1">Planta</p>
			<p class="tarjetaPokemon__tipos__tipo2">Veneno</p>
		</div>
	</section>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState(["pokemon"]),
	},
};
</script>

<style lang="scss" scoped>
.tarjetaPokemon {
	padding: 1rem;
	background-color: #313131;
	color: white;
	border-radius: 15px;
	.tarjetaPokemon__contenedorImg {
		border-radius: 150px;
		background-color: green;
		width: 15rem;
		height: 15rem;
		margin: 0 auto;
	}
	.tarjetaPokemon__tipos {
		display: flex;
		gap: 1rem;
		margin-top: -1.5rem;
		.tarjetaPokemon__tipos__tipo1 {
			background-color: green;
			padding: 0.5rem;
			border-radius: 15px;
			width: 5rem;
			text-align: center;
		}
		.tarjetaPokemon__tipos__tipo2 {
			background-color: rgb(172, 20, 114);
			padding: 0.5rem;
			border-radius: 15px;
			width: 5rem;
			text-align: center;
		}
	}
	.numeroPokemon {
		color: grey;
	}
}
</style>

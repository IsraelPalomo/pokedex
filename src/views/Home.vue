<template>
	<div class="home">
		<div class="titulo">
			<img class="titulo--pokedex" src="../assets/titulo_principal.png" alt="" />
		</div>
		<Navegacion />
	</div>
</template>

<script>
import Navegacion from "../components/Navegacion.vue";
// @ is an alias to /src

export default {
	name: "Home",
	components: { Navegacion },
};
</script>

<style lang="scss" scoped>
.home {
	.titulo {
		display: flex;
		justify-content: center;
		margin-top: 5rem;
		.titulo--pokedex {
			width: 80%;
			margin: 0 auto;
		}
	}
}
</style>

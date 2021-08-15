<template>
	<nav>
		<button class="nav__btn nav__btn--fuego">Fuego</button>
		<button class="nav__btn nav__btn--planta">Planta</button>
		<button class="nav__btn nav__btn--electrico">Electrico</button>
		<button class="nav__btn nav__btn--agua">Agua</button>
		<button class="nav__btn nav__btn--tierra">Tierra</button>
		<button class="nav__btn nav__btn--roca">Roca</button>
		<button class="nav__btn nav__btn--hada">Hada</button>
		<button class="nav__btn nav__btn--veneno">Veneno</button>
		<button class="nav__btn nav__btn--bicho">Bicho</button>
		<button class="nav__btn nav__btn--dragon">Dragon</button>
		<button class="nav__btn nav__btn--squico">Squico</button>
		<button class="nav__btn nav__btn--volador">Volador</button>
		<button class="nav__btn nav__btn--lucha">Lucha</button>
		<button class="nav__btn nav__btn--normal">Normal</button>
		<button class="nav__btn nav__btn--siniestro">Siniestro</button>
		<button class="nav__btn nav__btn--fantasma">Fantasma</button>
		<button class="nav__btn nav__btn--hielo">Hielo</button>
		<button class="nav__btn nav__btn--acero">Acero</button>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

nav {
	margin-top: 3rem;
	padding: 0 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	.nav__btn {
		padding: 0.5rem 1rem;
		color: white;
		border-radius: 15px;
		border: none;
	}
	.nav__btn--fuego {
		background-color: $fuego;
	}
	.nav__btn--planta {
		background-color: $planta;
	}
	.nav__btn--electrico {
		background-color: $electrico;
	}
	.nav__btn--agua {
		background-color: $agua;
	}
	.nav__btn--tierra {
		background-color: $tierra;
	}
	.nav__btn--roca {
		background-color: $roca;
	}
	.nav__btn--hada {
		background-color: $hada;
	}
	.nav__btn--veneno {
		background-color: $veneno;
	}
	.nav__btn--bicho {
		background-color: $bicho;
	}
	.nav__btn--dragon {
		background-color: $dragon;
	}
	.nav__btn--squico {
		background-color: $squico;
	}
	.nav__btn--volador {
		background-color: $volador;
	}
	.nav__btn--lucha {
		background-color: $lucha;
	}
	.nav__btn--normal {
		background-color: $normal;
	}
	.nav__btn--siniestro {
		background-color: $siniestro;
	}
	.nav__btn--fantasma {
		background-color: $fantasma;
	}
	.nav__btn--hielo {
		background-color: $hielo;
	}
	.nav__btn--acero {
		background-color: $acero;
	}
}
</style>

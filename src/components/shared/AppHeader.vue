<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
			<div class="flex justify-between items-center px-4 sm:px-0">
				<div class="md:ml-7 lg:ml-8">
					<router-link to="/">Domingo</router-link>
				</div>
				<div class="ml-14">
					<ChooseLanguage />
				</div>
				<div class="sm:hidden">
					<button @click="isOpen = !isOpen" type="button" class="focus:outline-none" aria-label="Hamburguer Menu">
						<i data-feather="menu" class="text-ternary-dark"></i>
					</button>
				</div>
			</div>

			<AppHeaderLinks :isOpen="isOpen" />
		</div>
	</nav>
</template>
<script setup>

import { ref } from 'vue';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks';
import ChooseLanguage from './ChooseLanguage';

const isOpen = ref(false);

feather.replace();

</script>
<style scoped>

#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply font-medium;
}

</style>
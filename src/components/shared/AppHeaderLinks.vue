<template>
	<div :class="props.isOpen ? 'block' : 'hidden'" class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
		<router-link to="/" class="font-general-medium block text-left text-lg font-medium text-gray-900 hover:text-indigo-600 sm:mx-4 mb-2 sm:py-2" aria-label="Home">
			{{ language === 'en' ? 'Projects' : 'Proyectos' }}
		</router-link>
		<router-link
			to="/about"
			class="font-general-medium block text-left text-lg font-medium text-gray-900 hover:text-indigo-600 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
			aria-label="About Me"
		>
			{{ language === 'en' ? 'About Me' : 'Sobre Mí' }}
		</router-link>
	</div>
</template>
<script setup>

import { defineProps } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const props = defineProps({
	isOpen: Boolean,
});

const { language } = useLanguage();

</script>
<style scoped></style>
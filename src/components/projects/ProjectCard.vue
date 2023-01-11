<template>
	<router-link
		:to="{ path: 'project', name: 'SingleProject', params: { id: props.project.id } }"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light"
		aria-label="Single Project">
		<div class="relative h-56">
			<div
				class="project-poster h-full bg-cover bg-center"
				v-bind:style="{ backgroundImage: 'url(' + props.project.img + ')' }"
			>
			</div>
		</div>
		<div class="text-center px-4 py-6 leading-2">
			<p class="font-general-semibold text-xl text-ternary-dark font-semibold b-2">{{ props.project.title[language] }}</p>
			<p class="font-general-medium text-md text-ternary-dark">{{ props.project.category }}</p>
		</div>
	</router-link>
</template>

<script setup>

import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

// eslint-disable-next-line
const props = defineProps({
	project: Object
});

</script>

<style scoped>

.project-poster {
	overflow: hidden;
}

.project-poster::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: linear-gradient(0deg, rgba(49,49,49,0.5) 5%, rgba(49,49,49,0.1) 25%, transparent);
	pointer-events: none;
}

</style>
<template>
	<router-link :to="{ path: 'project', name: 'SingleProject', params: { id: props.project.id } }" class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light" aria-label="Single Project">
		<div>
			<img
				:src="props.project.img"
				:alt="props.project.title[language]"
				class="rounded-t-sm border-2"
			>
		</div>
		<div class="text-center px-4 py-6 leading-2">
			<p class="font-general-semibold text-xl text-ternary-dark font-semibold mb-2">{{ props.project.title[language] }}</p>
			<p class="font-general-medium text-md text-ternary-dark">{{ props.project.category }}</p>
		</div>
	</router-link>
</template>

<script setup>

import { defineProps } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const props = defineProps({
	project: Object
});

const { language } = useLanguage();

</script>

<style scoped></style>
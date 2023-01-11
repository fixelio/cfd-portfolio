<script setup>

import { ref, defineProps } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

import ProjectCarousel from './ProjectCarousel';

const props = defineProps({
	project: Object
});

const { language } = useLanguage();
const systemLanguage = ref(language);

</script>

<template>

	<p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark mt-14 sm:mt-20 mb-5">
		{{ props.project.title[systemLanguage] }}
	</p>
	
	<div class="mb-2">
		<span class="font-general-medium leading-none text-primary-dark">
			<i data-feather="tag" class="w-4 h-4 text-ternary-dark inline"></i> {{ props.project.details.tags.join(', ') }}
		</span>
	</div>
	<div>
		<span class="font-general-medium leading-none text-primary-dark">
			<i data-feather="clock" class="w-4 h-4 text-ternary-dark inline"></i> {{ props.project.details.date }}</span>
	</div>

	<ProjectCarousel :projectImages="props.project.images" />

</template>
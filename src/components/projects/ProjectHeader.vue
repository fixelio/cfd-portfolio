<script setup>

import { ref, defineProps } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const props = defineProps({
	project: Object
});

const { language } = useLanguage();
const systemLanguage = ref(language);

</script>

<template>

	<p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark mt-14 sm:mt-20 mb-7">
		{{ props.project.title[systemLanguage] }}
	</p>
	
	<div class="mb-5">
		<span class="font-general-medium ml-2 leading-none text-primary-dark">
			<i data-feather="tag" class="w-4 h-4 text-ternary-dark inline"></i> {{ props.project.details.tags.join(', ') }}
		</span>
	</div>
	<div>
		<span class="font-general-medium ml-2 leading-none text-primary-dark">
			<i data-feather="clock" class="w-4 h-4 text-ternary-dark inline"></i> {{ props.project.details.date }}</span>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 mt-12 sm:gap-10">
		<div v-for="image in props.project.images" :key="image.imgId" class="mb-10 sm:mb-0">
			<img
				:src="image.src"
				:alt="image.alt"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
			/>
		</div>
	</div>

</template>
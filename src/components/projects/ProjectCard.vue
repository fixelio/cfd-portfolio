<template>
	<router-link :to="{ path: 'project', name: 'SingleProject', params: { id: props.project.id } }" class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light" aria-label="Single Project">
		<div>
			<img
				:src="props.project.img"
				:alt="props.project.title"
				class="rounded-t-sm border-2 border-primary-light"
			>
		</div>
		<div class="text-center px-4 py-6 leading-2">
			<p class="font-general-semibold text-xl text-ternary-dark font-semibold mb-2">{{ props.project.title }}</p>
			<p class="font-general-medium text-md text-ternary-dark">{{ props.project.category }}</p>
		</div>
	</router-link>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
	project: Object
});

</script>

<style scoped></style>
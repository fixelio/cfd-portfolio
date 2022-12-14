<template>
	<div class="mx-8 sm:mt-20">
		<ProjectHeader :project="project" />
		
		<div class="flex items-center">
			<div class="block gap-0 sm:gap-10 mt-14">
				<div class="w-full text-left">
					<div class="mb-10">
						<p class="font-general-medium text-2xl text-ternary-dark mb-2">
							Tecnologías:
						</p>
						<p class="font-general-regular text-primary-dark mb">
							{{ project.technologies.join(', ') }}
						</p>
					</div>
					<p class="font-general-medium text-2xl text-ternary-dark mb-2">
						Descripción:
					</p>
					<p v-for="article in project.blocks" :key="article.blockId" class="font-general-regular text-secondary-dark text-md sm:text-xl font-normal mb-4">{{ article.content }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import feather from 'feather-icons';

export default {
	name: 'SingleProject',
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
}

</script>

<script setup>

import { useRoute } from 'vue-router';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import projects from '../data/projects.js';

const route = useRoute();

const project = projects.filter(p => {
	return p.id === Number(route.params.id);
})[0];

</script>

<style scoped></style>
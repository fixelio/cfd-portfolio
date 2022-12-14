<template>
	<section class="pt-4 sm:pt-6">
		<div class="flex justify-center items-center mb-8">
			<h1 class="w-full text-center text-4xl md:text-3xl xl:text-5xl text-center text-ternary-dark uppercase">
				Hola, soy Domingo Molina
			</h1>
		</div>
		<div class="text-center pt-10 mb-4">
			<p class="font-general-normal text-3xl md:text-4xl lg:text-5xl text-secondary-dark mb-2">Proyectos</p>
		</div>
		<div class="mt-10">
			<h3 class="font-general-regular text-center text-secondary-dark text-md sm:text-xl font-normal mb-4">
				Buscar proyectos por título o filtrar por categoría
			</h3>
			<div class="flex justify-center items-center border-b border-primary-light pb-3 gap-2">
				<div class="flex justify-between gap-2">
					<span class="hidden sm:block bg-primary-light p-2.5 shadow-sm rounded-xl cursor-pointer">
						<i data-feather="search" class="text-ternary-dark"></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 rounded-lg text-sm sm:text-md bg-secondary-light text-primary-dark"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Busca un proyecto"
						aria-label="Name">
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 pt-10 gap-x-2 sm:gap-10">
			<ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
		</div>
	</section>
</template>

<script>

import feather from 'feather-icons';

export default {
	name: 'ProjectsGrid',
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
}
</script>

<script setup>

import ProjectsFilter from './ProjectsFilter';
import ProjectCard from './ProjectCard';
import allProjects from '../../data/projects';

import { ref, computed } from 'vue';

const projects = ref(allProjects);
const searchProject = ref('');
const selectedCategory = ref('');

const filteredProjects = computed({
	get() {
		if(selectedCategory.value)
				return filterProjectsByCategory();

		if(searchProject.value)
			return filterProjectsBySearch();

		return projects.value;
	}
});

function filterProjectsByCategory() {
	return projects.value.filter((project) => {
		return project.category.includes(selectedCategory.value);
	});
}

function filterProjectsBySearch() {
	let project = new RegExp(searchProject.value, 'i');
	return projects.value.filter((element) => element.title.match(project));
}

</script>

<style scoped>

</style>
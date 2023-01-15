<template>
	<section class="pt-4 sm:pt-6">
		<div class="text-center pt-10 mb-4">
			<p class="font-general-semibold text-2xl md:text-4xl lg:text-5xl text-secondary-dark mb-2">
				{{ language === 'en' ? 'Projects' : 'Proyectos'}}
			</p>
		</div>
		<div class="mt-10">
			<h3 class="font-general-regular text-center text-secondary-dark text-md sm:text-xl font-normal mb-4">
				{{ language === 'en' ? 'Search projects by title or filter by category' : 'Busca proyectos por título o filtra por categoría' }}
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
						:placeholder="language === 'en' ? 'Search Projects' : 'Busca un proyecto'"
						aria-label="Name">
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" select="projects" />
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 mt-20 gap-x-2 sm:gap-10">

			<ProjectCard
				v-for="projectId in filteredProjects"
				:key="projectId"
				:project="indexedProjects[projectId]"
				/>
		</div>
	</section>
</template>

<script setup>

import feather from 'feather-icons';
import { ref, computed, onMounted, onUpdated } from 'vue';

import ProjectsFilter from './ProjectsFilter';
import ProjectCard from './ProjectCard';
import { indexedProjects, projectsOrder } from '../../data/projects';

import { useLanguage } from '@/composables/useLanguage';
const { language } = useLanguage();

const projectsOrderRef = ref(projectsOrder);

const searchProject = ref('');
const selectedCategory = ref('');

const filteredProjects = computed({
	get() {
		if(selectedCategory.value)
			return filterProjectsByCategory();

		if(searchProject.value)
			return filterProjectsBySearch();

		return projectsOrderRef.value;
	}
});

function filterProjectsByCategory() {
	return projectsOrderRef.value.filter((projectId) => {
		const project = indexedProjects[projectId];
		return project.category.includes(selectedCategory.value);
	});
}

function filterProjectsBySearch() {
	let projectRegex = new RegExp(searchProject.value, 'i');
	return projectsOrderRef.value.filter((projectId) => {
		const project = indexedProjects[projectId];
		return project.title[language.value].match(projectRegex);
	});
}

onMounted(() => {
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});

</script>

<style scoped>

.img-cover
{
	width: 96px;
	height: 64px;
	background: #fff;
	border: solid 2px gray;
}

</style>
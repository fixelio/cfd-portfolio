<template>
	<div class="mx-10 sm:mt-20">
		<ProjectHeader :project="singleProject" />
		
		<div class="flex items-center">
			<div class="block gap-0 sm:gap-10 mt-14">
				<div class="w-full text-left">
					<p class="font-general-medium text-2xl text-ternary-dark mb-2" v-if="language === 'en'">
						Description:
					</p>
					<p class="font-general-medium text-2xl text-ternary-dark mb-2" v-else>
						Descripción:
					</p>
					<p v-for="article in singleProject.blocks" :key="article.blockId" class="font-general-regular text-secondary-dark text-md sm:text-xl font-normal mb-4">{{ article.content[language] }}</p>
					<div class="mt-10">
						<p class="font-general-medium text-2xl text-ternary-dark mb-2" v-if="singleProject.hasModel">
							{{ language === 'en' ? '3D View' : 'Vista 3D' }}:
						</p>
						<div class="flex justify-center items-center w-full h-full mt-8" v-if="singleProject.hasModel">
							<GeometryCard :model="singleProject.model" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

import feather from 'feather-icons';

import { useRoute } from 'vue-router';
import { reactive, onMounted, onUpdated } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

import GeometryCard from '@/components/geometries/GeometryCard';
import ProjectHeader from '../components/projects/ProjectHeader';
import projects from '../data/projects.js';

const route = useRoute();

const filtered = projects.filter(p => {
	return p.id === Number(route.params.id);
});

const singleProject = reactive(filtered[0]);

const { language } = useLanguage();

onMounted(() => {
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});

</script>

<style scoped></style>
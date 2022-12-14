<script>

export default {
	props: ['project'],
};

</script>

<template>

	<p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark mt-14 sm:mt-20 mb-7">
		{{ project.title }}
	</p>
	
	<div class="flex">
		<div class="flex items-center mr-10">
			<i data-feather="clock" class="w-4 h-4 text-ternary-dark"></i>
			<span class="font-general-medium ml-2 leading-none text-primary-dark">{{ project.details.date }}</span>
		</div>
		<div class="flex items-center">
			<i data-feather="tag" class="w-4 h-4 text-ternary-dark"></i>
			<span class="font-general-medium ml-2 leading-none text-primary-dark">{{ project.details.tags }}</span>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-3 mt-12 sm:gap-10">
		<div class="mb-10 sm:mb-0">
			<img :src="project.img" alt="project.details.tags" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" />
		</div>
		<div class="mb-10 sm:mb-0">
			<img :src="project.img" alt="project.details.tags" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" />
		</div>
		<div class="mb-10 sm:mb-0">
			<img :src="project.img" alt="project.details.tags" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" />
		</div>
	</div>

</template>
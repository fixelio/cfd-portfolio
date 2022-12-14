<script setup>

import { defineProps } from 'vue';

import feather from 'feather-icons';

feather.replace();

const props = defineProps({
	select: {
		type: String,
		default: 'projects',
		required: true,
	},
	selectOptions: {
		type: Array,
		default: () => [
			'CAD',
			'FEA',
			'CFD',
		],
	},
});

// export default {
// 	name: 'ProjectsFilter',
// 	components: { ProjectCategory },
// 	props: {
// 		categories: {
// 			type: Array,
// 			default: () => [
// 				'CAD',
// 				'FEA',
// 				'CFD'
// 			]
// 		},
// 	},
// 	methods: {
// 		manageFilters(checked, category) {
// 			const handler = checked ? this.$parent.addCategory : this.$parent.removeCategory;
// 			handler(category);
// 		}
// 	},
// 	mounted() {
// 		feather.replace();
// 	}
// };

</script>
<template>
   <!-- <button id="projectFilterDropdown" data-dropdown-toggle="categoriesDropdown" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:-ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
		Categorías
		<i data-feather="chevron-down" class="text-ternary-dark"></i>	
	</button>
   <div id="categoriesDropdown" class="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow">
      <ul class="p-3 space-y-3 text-sm text-gray-700" aria-labelledby="projectFilterDropdown">
         <ProjectCategory @filter="manageFilters" v-for="category in categories" :key="category" :category="category" />
      </ul>
		</div> -->
		<select
			@change="$emit('filter', $event.target.value)"
			:name="props.select"
			:id="props.select"
			class="font-general-medium w-48 px-4 py-2 md:py-2.5 lg:py-2.5 lg:py-2.5 border-1 border-gray-200 rounded-lg text-sm sm:text-md bg-secondary-light text-primary-dark">
				<option value="" class="text-sm sm:text-md">Todos</option>
				<option v-for="option in props.selectOptions" :key="option" :value="option" class="sm:text-md">
					{{ option }}
				</option>
		</select>
</template>

<style scoped></style>
<script setup>

import feather from 'feather-icons';
import { defineProps } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

feather.replace();

const props = defineProps({
	select: {
		type: String,
		required: true,
	},
	selectOptions: {
		type: Array,
		default: () => [
			'CAD',
		],
	},
});

</script>
<template>
		<select
			@change="$emit('filter', $event.target.value)"
			:name="props.select"
			:id="props.select"
			class="font-general-medium w-48 px-4 py-2 md:py-2.5 lg:py-2.5 lg:py-2.5 border-1 border-gray-200 rounded-lg text-sm sm:text-md bg-secondary-light text-primary-dark">
				<option value="" class="text-sm sm:text-md">{{ language === 'en' ? 'All' : 'Todos' }}</option>
				<option v-for="option in props.selectOptions" :key="option" :value="option" class="sm:text-md">
					{{ option }}
				</option>
		</select>
</template>

<style scoped></style>
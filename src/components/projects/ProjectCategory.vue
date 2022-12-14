<template>
	<li>
		<div class="flex items-center p-2">
			<input @change="filter" type="checkbox" :id="category" value="" class="w-4 h-4 text-blue-600 bg-blue-100 rounded border-blue-300 focus:ring-blue-500">
			<label :for="category" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">{{ category }}</label>
		</div>
	</li>
</template>
<script>

export default {
	props: {
		category: {
			type: String,
			required: true,
			default: 'Category'
		},
	},
	methods: {
		filter(event) {
			this.$emit('filter', event.target.checked, this.category);
		}
	}
}

</script>
<style scoped></style>
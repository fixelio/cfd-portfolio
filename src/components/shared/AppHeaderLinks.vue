<template>
	<div :class="isOpen ? 'block' : 'hidden'" class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
		<router-link to="/" class="font-general-medium block text-left text-lg font-medium text-primary-dark hover:text-indigo-600 sm:mx-4 mb-2 sm:py-2" aria-label="Home">
			Projects
		</router-link>
	</div>
</template>
<script>

export default {
	props: ['isOpen'],
}

</script>
<style scoped></style>
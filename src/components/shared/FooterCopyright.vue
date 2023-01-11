<template>
	<div class="flex-justify-center items-center text-center">
		<div class="font-general-regular text-lg text-ternary-dark">
			{{ projectName }} &copy; {{ copyrightDate }}
		</div>
	</div>
</template>

<script setup>

import { ref } from 'vue';

const copyrightDate = ref('2023');
const projectName = ref('Domingo Molina - Portfolio');
	
</script>

<style scoped></style>
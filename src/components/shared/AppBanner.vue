<template>
  <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
    <div class="w-full md:w-1/3 text-left">
      <h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
        {{ language === 'en' ? 'Hi, I\'\m Domingo' : 'Hola, soy Domingo Molina' }}
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        {{ language === 'en' ? '3D CAD Modeler' : 'Modelador CAD 3D'}}
      </p>
    </div>
    <div class="w-full md:w-2/3 text-right float-right">
      <img src="@/assets/images/computer-aided-design-designer.jpg" alt="cad">
    </div>
  </section>
</template>

<script setup>

import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

</script>

<style scoped></style>
<template>
  <div class="flex flex-col items-center bg-white border rounded-lg shadow-lg md:flew-row w-full max-w-lg hover:bg-gray">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <button @click="showModel">
        {{ language === 'en' ? 'Click here to view the model' : 'Pulsa aquí para ver el modelo' }}
      </button>
    </div>
    <GeometryCanvas ref="geometryCanvas" />
  </div>
</template>

<script setup>

import GeometryCanvas from './GeometryCanvas';
import { ref, defineProps } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

const props = defineProps({
  model: Object,
});

const geometryCanvas = ref('');
const loaded = ref(false);

const showModel = () => {
  if(loaded.value) return;

  loaded.value = true;
  geometryCanvas.value.loadModel(props.model);
}


</script>

<style scoped></style>
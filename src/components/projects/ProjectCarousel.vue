<template>
  <div>
    <ModalImage ref="modalImage" />


    <div id="projectCarousel" class="relative mt-10" data-carousel="static">
      
      <!-- Wrapper -->
      <div class="relative overflow-hidden h-96 md:h-[32rem]">
        <div
          v-for="image in props.projectImages"
          :key="image.id"
          :id="`carousel-item-${image.id}`"
          class="h-full duration-400 ease-in-out bg-contain bg-center bg-no-repeat cursor-pointer"
          v-bind:style="{ backgroundImage: 'url(' + image.src + ')' }"
          @click="expandCarouselImage(image.src)"
        ></div>
      </div>

      <!-- Slider Indicators -->
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-16 md:bottom-5 left-1/2">
        <button
          v-for="image in props.projectImages"
          :key="image.id"
          :id="`carousel-indicator-${image.id}`"
          type="button"
          class="w-3 h-3 bg-gray-700 rounded-full"
          :aria-current="image.id === 1 ? 'true':''"
          :aria-label="`Slide ${image.id}`"
        ></button>
      </div>

      <!-- Sliders controls -->
      <button 
        type="button"
        class="absolute top-1/2 -translate-y-1/2 left-0 z-30 flex items-center justify-center h-auto px-4 cursor-pointer group focus:outline-none"
        @click="carousel.prev"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full bg-gray/60 group-hover:bg-gray/50 group-focus:ring-4 group-focus:ring-gray group-focus:outline-none">
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-white text-gray-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-1/2 -translate-y-1/2 right-0 z-30 flex items-center justify-center h-auto px-4 cursor-pointer group focus:outline-none"
        @click="carousel.next"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full bg-gray/60 group-hover:bg-gray/50 group-focus:ring-4 group-focus:ring-gray group-focus:outline-none">
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-white text-gray-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>


<script setup>

// eslint-disable-next-line
import flowbite from 'flowbite';
import { ref, defineProps, onMounted } from 'vue';
import ModalImage from '../shared/ModalImage';

const props = defineProps({ projectImages: Array });
const carousel = ref(null);
const modalImage = ref(null);



function expandCarouselImage(imageSource) {
  modalImage.value.showImageModal(imageSource);
}



onMounted(() => {
  const items = props.projectImages.map((image, index) => ({
    position: index,
    el: document.getElementById(`carousel-item-${index + 1}`),
  }));

  const options = {
    defaultPosition: 0,
    interval: 700,
    indicators: {
      items: props.projectImages.map((image, index) => ({
        position: index,
        el: document.getElementById(`carousel-indicator-${index + 1}`),
      })),
    },
  }

  // eslint-disable-next-line
  carousel.value = new Carousel(items, options);
});

</script>
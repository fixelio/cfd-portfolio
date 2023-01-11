<template>
  <div
    id="image-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full bg-black  md:inset-0 h-modal md:h-full"
  >
    <div class="relative w-full h-full max-w-4xl md:h-auto">
      <!-- Modal content -->
      <div class="relative">
        <!-- Modal header -->
        <button
          type="button"
          class="absolute top-0 right-0 m-5 text-white bg-transparent text-lg z-40"
          @click="hideModal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <!-- Modal body -->
        <div
          class="w-full h-[32rem] bg-contain bg-center bg-no-repeat z-10"
          v-bind:style="{ backgroundImage: 'url(' + imageSource + ')' }">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// eslint-disable-next-line
import flowbite from 'flowbite';
import { ref, computed, defineExpose } from 'vue';

const imageSourceRef = ref('');
const imageSource = computed(() => imageSourceRef.value);

let modal;

function hideModal() {
  modal?.hide();
}

const showImageModal = ref((imgSrc) => {
  imageSourceRef.value = imgSrc;

  const $target = document.getElementById('image-modal');
  const options = {
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900 opacity-50 fixed inset-0 z-40',
  }

  // eslint-disable-next-line
  modal = new Modal($target, options);

  modal.show();
});

defineExpose({ showImageModal });

</script>
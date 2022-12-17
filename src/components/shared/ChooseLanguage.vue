<template>
  <div>
    <button
      id="chooseLanguage"
      data-dropdown-toggle="dropdownLanguage"
      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
      type="button"
    >
      <i data-feather="globe" class="text-ternary-dark"></i>
    </button>
    <div
      id="dropdownLanguage"
      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
    >
      <ul class="py-1 text-sm text-gray-700" aria-labelledby="chooseLanguage">
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100" @click="setLanguageEnglish">
            {{ language === 'en' ? 'English' : 'Inglés' }}
          </a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100" @click="setLanguageSpanish">
            {{ language === 'en' ? 'Spanish' : 'Español' }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { useLanguage } from '@/composables/useLanguage';

const { language, setLanguageSpanish, setLanguageEnglish } = useLanguage();

</script>
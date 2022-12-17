import { ref } from 'vue';

const language = ref('en');

export const useLanguage = () => {
  const setLanguageSpanish = () => language.value = 'es';
  const setLanguageEnglish = () => language.value = 'en';

  return {
    language,
    setLanguageSpanish,
    setLanguageEnglish,
  }
}
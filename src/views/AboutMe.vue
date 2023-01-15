<template>
  <div class="mx-10">
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      </div>
      <div class="w-full sm:w-3/4 text-left">
        <img src="@/assets/images/foto-perfil.jpg" alt="Domingo Molina foto perfil" class="rounded-xl w-96 mb-5">
        <p
          v-for="bio in bios"
          :key="bio.id"
          class="font-general-regular text-ternary-dark text-lg mb-8"
        >
          {{ bio.content[language] }}
        </p>
        <ul class="font-general-regular space-y-1 list-disc list-inside text-ternary-dark mb-8">
            <li
              v-for="specialty in specialties"
              :key="specialty.id"
            >
                {{ specialty.content[language] }}
            </li>
        </ul>
        <p class="font-general-regular text-ternary-dark text-lg">
          {{
            language === 'en' ? 
              'I’m proficient in the use of Solidworks, SpaceClaim, Geomagic Wrap, Adobe Illustrator, Keyshot and AutoCAD.' :
              'Domino el uso de Solidworks, SpaceClaim, Geomagic Wrap, Adobe Illustrator, Keyshot y AutoCAD.'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useLanguage } from '@/composables/useLanguage';
const { language } = useLanguage();

const bios = [
  {
    id: 1,
    content: {
      en: 'Hi, my name is Domingo. I’m a professional 3D/CAD modeler with 3 years of background. When you work with me, my goal will be to produce 3D models of the highest quality. These are my specialties:',
      es: 'Hola, mi nombre es Domingo. Soy un modelador 3D/CAD profesional con 3 años de experiencia. Cuando trabajes conmigo, mi objetivo será producir modelos 3D de la más alta calidad. Estas son mis especialidades:'
    }
  },
];

const specialties = [
  {
    id: 1,
    content: {
      en: '3D modeling based on your drawings, pictures, sketches or ideas.',
      es: 'Modelado 3D basado en sus dibujos, fotos, bocetos o ideas.'
    }
  },
  {
    id: 2,
    content: {
      en: 'Conversion between different 3D formats (STP, STL, OBJ and more).',
      es: 'Conversión entre diferentes formatos 3D (STP, STL, OBJ y más).'
    }
  },
  {
    id: 3,
    content: {
      en: 'Creating flat surface patterns.',
      es: 'Creación de patrones de superficies planas.'
    }
  },
  {
    id: 4,
    content: {
      en: 'Correction and cleaning of STL models for printing.',
      es: 'Corrección y limpieza de modelos STL para impresión.'
    }
  },
  {
    id: 5,
    content: {
      en: 'Creating set of manufacturing drawings based on 3D models/assemblies.',
      es: 'Creación de conjuntos de planos de fabricación basados en modelos/ensamblados 3D.'
    }
  },
  {
    id: 6,
    content: {
      en: 'Produce product renderings.',
      es: 'Realización de renders de productos.'
    }
  }
];

</script>
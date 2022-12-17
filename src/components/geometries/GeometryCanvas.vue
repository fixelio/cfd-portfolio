<script setup>

import * as THREE from 'three';
import TrackballControls from 'three-trackballcontrols';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
  
import { ref, defineExpose, onMounted } from 'vue';

const canvas = ref(null);
let controls = null;

let scene = null;
let camera = null;
let renderer = null;
let axes = null;

onMounted(() => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    canvas.value.clientWidth / canvas.value.clientHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
  scene.add(ambientLight);

  const directionalLightBack = new THREE.DirectionalLight(0xffffff, 0.25);
  scene.add(directionalLightBack);

  const directionalLightFront = new THREE.DirectionalLight(0xffffff, 0.25);
  directionalLightFront.position.set(-30,100,-100);
  scene.add(directionalLightFront);

  axes = new THREE.AxesHelper(25);
});

const loadModel = ref((model) => {
  scene.add(camera);
  scene.add(axes);

  const material = new THREE.MeshNormalMaterial();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.gammaOutput = true;
  camera.position.z = 100;
  scene.background = new THREE.Color('hsl(0,100%,100%)');

  controls = new TrackballControls(camera, canvas.value);
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 5;
  controls.panSpeed = 0.8;
  controls.noZoom = false;
  controls.noPan = false;
  controls.staticMoving = true;
  controls.dynamicDampingFactor = 0.3;

  canvas.value.appendChild(renderer.domElement);
  window.addEventListener('resize', () => {
    camera.aspect = canvas.value.clientWidth / canvas.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
  });

  const loader = new FBXLoader();
  
  loader.load(
    model.src,
    (object) => {
      object.traverse(child => {
        if (child.isMesh) {
          child.material = material;
          if (child.material) {
            child.transparent = false;
          }
        }
      });

      object.position.set(10, 0, 10);
      scene.add(object);

      animate();
    },
    undefined,
    (error) => console.log(error)
  );

});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

defineExpose({ loadModel });
  
</script>

<template>
  <div ref="canvas" class="w-full rounded-t-lg h-96 md:rounded-none md:rounded-l-lg">
    
  </div>
</template>

<style scoped></style>
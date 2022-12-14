import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';

import './index.css';
import 'flowbite';

const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
	.use(BackToTop)
	.mount('#app');

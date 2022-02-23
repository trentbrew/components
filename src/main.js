import { createApp } from 'vue';
import { router } from './router.js';
import { createPinia } from 'pinia';
import App from './App.vue';
import './index.css';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');

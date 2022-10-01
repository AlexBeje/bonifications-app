import { createApp } from 'vue';
import VueClipboard from 'vue3-clipboard';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(VueClipboard);

app.mount('#app');

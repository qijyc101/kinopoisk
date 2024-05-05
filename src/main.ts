import 'src/styles/style.scss';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import router from 'src/router';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');

import './bootstrap';

import '../sass/app.scss';
import { createApp } from 'vue';
import router from './router';
// import store from './store/modules/index';

import App from './components/App.vue';


const app = document.querySelector('#app');
if (app) {
  createApp(App).use(router).mount(app);
}

// const app = createApp(App);

// app.use(store);
// app.use(router);

// app.mount("#app")
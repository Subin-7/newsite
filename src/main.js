// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // make sure this imports the router instance you created

const app = createApp(App);

app.use(router);

app.mount('#app');

import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import VueRelayRunner from 'vue-relay';
createApp(App).use(router).use(VueRelayRunner).mount('#app')

import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import VueRelayRunner from '../../src';
import 'vue-relay-runner/dist/relay.css';
createApp(App).use(router).use(VueRelayRunner).mount('#app')

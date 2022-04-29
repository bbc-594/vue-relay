import type {App} from 'vue';
import RelayRunner from './core/relayRunner';
import './core/style/index.css';
const install = (app: App) => {
  app.component(RelayRunner.name, RelayRunner);
}

export {
  RelayRunner,
  install
}

export default {install}
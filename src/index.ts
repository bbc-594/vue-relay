import type {App} from 'vue';
import RelayRunner from './core/relayRunner';
import './core/style/index.css';
RelayRunner.install = (app: App) => {
  app.component(RelayRunner.name, RelayRunner);
}

export default RelayRunner;
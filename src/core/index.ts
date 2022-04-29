import type {App} from 'vue';
import RelayRunner from './relayRunner';
import './style/index.css';
RelayRunner.install = (app: App) => {
  app.component(RelayRunner.name, RelayRunner);
}

export default RelayRunner as typeof RelayRunner;

import type {App} from 'vue';
import relay from './relay';
import relayRunnerProxy from './relayRunnerProxy';
relay.install = (app: App) => {
  app.component(relay.name, relay);
}

relayRunnerProxy.install = (app: App) => {
  app.component(relayRunnerProxy.name, relayRunnerProxy);
}

export {
  relay,
  relayRunnerProxy,
}


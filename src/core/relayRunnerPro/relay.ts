import {defineComponent, h} from 'vue';
import relayRunnerPro from './relayRunnerPro';
import contextMap from './state';
const relay = defineComponent({
  name: 'vue-relay',
  setup() {
    return () => {
      return Array.from(contextMap.entries()).map(([runnerId]) => 
         h(relayRunnerPro, {
          runnerId: runnerId,
        })
      )
    }
}});

export default relay;
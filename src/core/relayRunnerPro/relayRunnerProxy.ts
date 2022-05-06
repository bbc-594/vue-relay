import {defineComponent, onMounted, h, ref, markRaw, onBeforeUnmount, nextTick} from 'vue';
import type {Component} from 'vue';
import {createContext} from './context';
import contextMap from './state';
function getContext(id: string, component: Component) {
  const context = contextMap.get(id);
  if (!context) {
    const newContext = createContext(component);
    return newContext;
  }
  return context;
}
const relayRunnerProxy = defineComponent({
  name: "relayRunnerProxy",
  props: {
    runnerId: {
      type: [String, Number],
      required: true
    },
    styleAttr: {
      type: Object,
      default: () => ({}),
    }
  },
  setup(props, {slots}) {
    const proxyEl = ref<HTMLElement>();
    const slot = slots.default?.() as any;
    let component = slot[0].type;
    let componentProps = slot[0].props;

    // const runnerContext = createContext(markRaw(component));
    const runnerContext = getContext(String(props.runnerId), markRaw(component));
    runnerContext.childProps = componentProps;
    contextMap.set(String(props.runnerId), runnerContext);

    onMounted(async () => {
      runnerContext.el = proxyEl.value;
      await nextTick()
      runnerContext.props = props;
      runnerContext.update();
      runnerContext.onUnRelayed();
    });

    onBeforeUnmount(async () => {
      runnerContext.onUnRelayed();
      runnerContext.update();
      console.info('unmounted');
      runnerContext.el = undefined;
    })
    
    return () => {
      return h('div', {
        id: `relay-runner-proxy-${props.runnerId}`,
        ref: proxyEl
      });
    }
  }
})

export default relayRunnerProxy;
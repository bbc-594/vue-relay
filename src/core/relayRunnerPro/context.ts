import {ref, reactive, Component} from 'vue';
import {useElementBounding} from '../hooks/useElementBounding';
export function createContext(component: Component) {
  const el = ref<HTMLElement>();
  const rect = useElementBounding(el, {reset: false});
  const childProps = ref();
  const props = ref();
  const relayed = ref(true);

  function onRelayed () {
    relayed.value = true;
  }
  function onUnRelayed () {
    relayed.value = false;
  }
  return reactive({
    el,
    rect,
    component,
    props,
    childProps,
    relayed,
    update: rect.update,
    onRelayed,
    onUnRelayed,
  })
}
export type Context = ReturnType<typeof createContext>;
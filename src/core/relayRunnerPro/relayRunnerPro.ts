import { defineComponent, h, computed, Teleport } from 'vue';
import contextMap from './state';
const relayRunnerPro = defineComponent({
  name: 'relayRunnerPro',
  props: {
    runnerId: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const context = computed(() => {
      return contextMap.get(String(props.runnerId));
    })
    const teleportTo = computed(() => context.value?.el?.id ?? '');
    const style = computed(() => {
      const defaultStyle = {
        position: 'fixed',
        left: 0,
        top: 0,
        overflow: 'hidden',
        width: `${context.value?.rect?.width ?? 0}px`,
        height: `${context.value?.rect?.width ?? 0}px`,
        transform: `translate(${context.value?.rect?.left ?? 0}px, ${context.value?.rect?.top ?? 0}px)`,
        ...context.value?.props?.styleAttr,
      }
      if (!context.value?.el) {
        return {
          ...defaultStyle,
          display: 'none',
          zIndex: -1,
        }
      }
      if (!context.value?.relayed) {
        Object.assign(defaultStyle, {
          zIndex: 2,
          transitionProperty: 'all',
          transitionDuration: `800ms`,
          transitionTimingFunction: 'cubic-bezier(0.45, 0, 0.55, 1)',
        });
      } else {
      }
      return defaultStyle;
    })
    return () => {
      const component = context.value?.component as any;
      const teleportEnable = !!(context.value?.relayed && context.value?.el);
     
      return h(Teleport, {
        to: context.value?.relayed ? `#${teleportTo.value}` : 'body',
        disabled: !teleportEnable,
      }, h('div', {
        style: style.value,
        onTransitionend: context.value?.onRelayed
      },
       
      h(component, {
        ...context.value?.childProps
      })
      ));
    }
  }
})

export default relayRunnerPro;
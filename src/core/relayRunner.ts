import { defineComponent, h, StyleValue, Teleport, watchEffect, ref, computed, nextTick, onMounted } from 'vue';
import { useElementBounding } from './hooks/useElementBounding';
import { useResizeObserver } from './hooks/useResizeObserver';
import { contextMap, styleMap } from './state';
const relayRunner = defineComponent({
  name: 'vue-relay-runner',
  inheritAttrs: true,
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    duration: {
      type: [Number, String],
      default: 800,
    },
    styleAttr: {
      type: Object,
      default: () => ({}),
    }
  },
  setup(props, { slots }) {
    const el = ref<HTMLElement>();
    const landEnable = ref(false);
    const relayId = computed(() => {
      return `relay-${props.id}`;
    });
    const styleAttr = ref<any>(styleMap.get(relayId.value));
    const previousRect = contextMap.get(relayId.value);
    const realRect = useElementBounding(el, {
      reset: true,
      windowScroll: true,
      windowResize: true
    }, previousRect);
    useResizeObserver(el, async () => {
      landEnable.value = false;
      await nextTick();
      realRect.update();
    });
    const style = computed(() => {
      const defaultStyle: StyleValue = {
        ...styleAttr.value,
        width: `${realRect?.width ?? 0}px`,
        height: `${realRect?.height ?? 0}px`,
        position: 'fixed',
        left: 0,
        top: 0,
        overflow: 'hidden',
        transform: `translate(${realRect?.left ?? 0}px, ${realRect?.top ?? 0}px)`,
      };
      if (!landEnable.value && previousRect) {
        Object.assign(defaultStyle, {
          transitionProperty: 'all',
          transitionDuration: `${props.duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.45, 0, 0.55, 1)',
        });
      } else {
        Object.assign(defaultStyle, {
          transition: 'unset',
        });

      }
      return defaultStyle;
    });

    onMounted(() => {
      nextTick(() => {
        styleAttr.value = props.styleAttr;
        styleMap.set(relayId.value, props.styleAttr);
      });
    });

    watchEffect(() => {
      contextMap.set(relayId.value, realRect);
    });

    function onTransitionEnd() {
      landEnable.value = true;
    }

    return () => {
      return h('div', {
        ref: el,
        class: 'relay-container',
        id: relayId.value,
      },
      h(
        Teleport,
        {
          to: landEnable.value ? el.value : 'body',
          disabled: !landEnable.value || !el.value,
        },
        h('div', {
          class: 'replay-animation-container',
          style: style.value,
          onTransitionend: onTransitionEnd,
        },
        slots.default && h(slots?.default))
      )
      );
    };
  }
});
export default relayRunner;

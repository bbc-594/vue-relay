
import {ref, reactive, watch} from 'vue';
import { MaybeElementRef } from '../type';
export interface UseElementBoundingOptions {
  reset?: boolean,
  windowResize?: boolean,
  windowScroll?: boolean,
}
export type UseElementBoundingReturn = ReturnType<typeof useElementBounding>;
export function useElementBounding(target: MaybeElementRef, options: UseElementBoundingOptions, defaultRect?: any) {
  const { reset = true, windowResize = true, windowScroll = true } = options;
  const width = ref(defaultRect?.width ?? 0);
  const height = ref(defaultRect?.height ?? 0);
  const left = ref(defaultRect?.left ?? 0);
  const right = ref(defaultRect?.right ?? 0);
  const top = ref(defaultRect?.top ?? 0);
  const bottom = ref(defaultRect?.bottom ?? 0);
  const x = ref(defaultRect?.x ?? 0);
  const y = ref(defaultRect?.y ?? 0);
  function update() {
    if (!target.value) {
      if (reset) {
        height.value = 0;
        width.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        bottom.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = target.value.getBoundingClientRect();
    height.value = rect.height;
    width.value = rect.width;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    bottom.value = rect.bottom;
    x.value = rect.x;
    y.value = rect.y;
  }


  watch(() => target.value, (el) => {
    el && update();
  });

  if (windowScroll) {
    document.addEventListener('scroll', update, {
      passive: true
    });
  }
  if (windowResize) {
    document.addEventListener('resize', update, {
      passive: true
    });
  }
  return reactive({
    width,
    height,
    left,
    right,
    top,
    bottom,
    x,
    y,
    update
  });
}

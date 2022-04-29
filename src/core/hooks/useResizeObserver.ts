import {watch} from 'vue';
import { MaybeElementRef } from '../type';

export function useResizeObserver(
  target: MaybeElementRef,
  callback: (rect: DOMRectReadOnly) => void,
) {
  let observer: ResizeObserver | undefined;

  const disConnect = () => {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  };

  const stopWatch = watch(() => target.value, (el) => {
    disConnect();
    if (el) {
      observer = new ResizeObserver(([entry]) => {
        console.info('resize');
        callback(entry.contentRect);
      });
      el && observer.observe(el);
    }
  }, {
    immediate: true,
    flush: 'post'
  });

  const stop = () => {
    stopWatch();
    disConnect();
  };

  return {
    stop
  };
}

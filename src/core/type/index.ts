import type { Ref } from 'vue';
export type MaybeElement = HTMLElement | SVGElement | Element | undefined | null;
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = Ref<T>;

export type GlobalConfig = {
  duration?: number;
  timeFunction?: string;
  zIndex?: number;
}
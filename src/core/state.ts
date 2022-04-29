import { reactive } from 'vue';
import { UseElementBoundingReturn } from './hooks/useElementBounding';
const contextMap = reactive(new Map<string | number, UseElementBoundingReturn>());
const styleMap = reactive(new Map<string | number, any>());
export {
  contextMap,
  styleMap
};

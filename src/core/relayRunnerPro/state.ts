import {reactive} from 'vue';
import {Context} from './context';
const contextMap = reactive(new Map<string | number, Context>());

export default contextMap;

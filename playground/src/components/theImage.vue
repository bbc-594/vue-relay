<template>
  <div class="the-image">
    <img :src="src">
    <div class="count" @click.stop.prevent="countAdd">{{count}}</div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  props: {
    src: String
  },
  setup() {
    const count = ref(0);
    function countAdd() {
      count.value++;
    }
    return {
      count,
      countAdd
    }
  }
})
</script>
<style lang="scss">
.the-image {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.count {
  position: absolute;
  left: 0;
  bottom: 0;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;

}
</style>

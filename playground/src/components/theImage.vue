<template>
  <div class="the-image">
    <img :src="src">
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  props: {
    src: String
  },
})
</script>
<style lang="scss">
.the-image {
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>

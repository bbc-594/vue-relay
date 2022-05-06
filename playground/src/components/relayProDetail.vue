<template lang="">
  <div class="wrap">
    <div class="wrap__pic">
      <relay-runner-proxy
        :runnerId="id"
        :styleAttr="{
          borderRadius: '50%',
        }"
      >
        <the-image :src="data[id].src" />
      </relay-runner-proxy>
    </div>
    <div class="wrap__name">
      <!-- <relay-runner-proxy :runnerId="id + data[id].name"> -->
        <p>{{ data[id].name }}</p>
      <!-- </relay-runner-proxy> -->
    </div>
    <div class="wrap__des">
     {{data[id].content}}
    </div>
  </div>
</template>
<script lang="ts" setup>
// import RelayRunner from 'vue-relay';
import { data } from '../composable/data';
import TheImage from './theImage.vue';
import { useRoute } from 'vue-router';
import {relayRunnerProxy} from '../../../src/core/relayRunnerPro';
const route = useRoute();
const id = Number(route.params.id);

</script>
<style lang="scss">
.wrap {
  width: 100vw;
  height: 100vh;
    overflow: hidden;
  background: #fff;
  &__pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 30px;
  }
}
</style>

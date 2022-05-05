<template lang="">
  <div class="wrap">
    <div class="wrap__pic">
      <relay-runner-proxy
        :runnerId="id"
        :styleAttr="{
          borderRadius: '50%',
        }"
      >
        <the-image :src="userList[id].src" />
      </relay-runner-proxy>
    </div>
    <div class="wrap__des">
      At the Edge of the SeaThe shore is an ancient world, for as long as there has been an earth and se a there has been this place of the meeting of land and water. Yet it is a world that keeps alive the sense of continuing creation and of the relentless drive of life. Each time that I enter it, I gain some new awareness of its beauty and it sdeeper meanings, sensing that intricate fabric of life by which one creature is linked with another, and each with its surroundings.In my thoughts of the shore, one place stands apart for its revelation of exquisite beauty. It is a pool hidden within a cave that one can visit only rarely and briefly when the lowest of the year's low tides fall below it, and perhaps from that very fact it acquires some of its special beauty. Choosing such a tide , I hoped for a glimpse of the pool. The ebb was to fall early in the morning. I knew that if the wind held from the northwest and no interfering swell ran in f rom a distant storm the level of the sea should drop below the entrance to the pool. There had been sudden ominous showers in the night, with rain like handfuls of gravel flung on the roof.
    </div>
  </div>
</template>
<script lang="ts" setup>
// import RelayRunner from 'vue-relay';
import { userList } from '../composable/data';
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

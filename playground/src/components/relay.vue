<template lang="">
  <div class="wrap">

    <RouterLink
      v-for="user, idx of userList"
      :key="user.id"
      :to="`/relayDetail/${user.id}`"
    >
      <div class="wrap-item">
        <div
          class="wrap-item__image"
          :class="isFit ? 'wrap-item__image__fit' : ''"
        >
          <relay-runner
            :id="idx"
            duration="800"
            :style-attr="{
              borderRadius: '8px',
            }"
          >
            <the-image :src="user.src" />
          </relay-runner>
        </div>
        <div class="wrap-item__name">
          <p>{{ user.name }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
<script lang="ts" setup>
import RelayRunner from 'vue-relay';
import { userList } from '../composable/data';
import TheImage from './theImage.vue';
const isFit = ref(false);
if (window.sessionStorage.getItem('isFit')) {
  isFit.value = JSON.parse(window.sessionStorage.getItem('isFit') ?? 'false');
}
watch(() => isFit.value, () => {
  window.sessionStorage.setItem('isFit', JSON.stringify(isFit.value));
}, {
  immediate: true
});


</script>
<style lang="scss">
.wrap {
  width: 100vw;
  height: 100vh;
  background: #fff;
  a {
      text-decoration: none;
  }
  .wrap-item {
    width: 100%;
    height: 70px;
    display: flex;
    padding: 10px 0;
    align-items: center;
  //  & + & {
    //  margin-bottom: 10px;
  //  }
    border-bottom: 1px solid #eaeaea;
    &__image {
      // width: 70px;
      height: 100%;
      aspect-ratio: 1 /1;
      margin-right: 18px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &__image__fit {
      aspect-ratio: 16 / 9;
    }
    &__name {
      flex: 1;
      text-align: left;
      color: #000;
    }
  }
}
</style>

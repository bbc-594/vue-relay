<script setup lang="ts">
import {relay} from '../../src/core/relayRunnerPro';
</script>

<template>
<router-view/>
<relay />
</template>

<style>
body {
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

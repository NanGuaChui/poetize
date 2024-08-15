<template>
  <div id="bannerWave1"></div>
  <div id="bannerWave2"></div>
</template>

<script setup></script>

<style scoped lang="scss">
#bannerWave1 {
  height: 84px;
  background: url('../assets/images/bannerwave1.png');
  position: absolute;
  width: 200%;
  bottom: 0;
  z-index: 10;
  animation: gradientBG 120s linear infinite;
}

#bannerWave2 {
  height: 100px;
  background: var(--bannerWave2);
  position: absolute;
  width: 400%;
  bottom: 0;
  z-index: 5;
  animation: gradientBG 120s linear infinite;
}
</style>

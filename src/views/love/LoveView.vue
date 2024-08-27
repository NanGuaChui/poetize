<template>
  <!-- 封面 -->
  <div class="bg-wrap my-animation-slide-top">
    <!-- 背景图片 -->
    <el-image class="love-image my-el-image" lazy fit="cover" :src="loveInfo.bgCover">
      <template #error>
        <div class="image-slot"></div>
      </template>
    </el-image>

    <lead :love-info="loveInfo" />
    <wave />
  </div>
  <div class="love-container">
    <Countdown :love-info="loveInfo" />
    <div style="padding: 0 20px">
      <record />
    </div>
  </div>
</template>

<script setup>
import Lead from './Lead.vue'
import Record from './Record.vue'
import Countdown from './Countdown.vue'
import { useLoveInfoStore } from '@/stores/loveInfo'

const { loveInfo } = useLoveInfoStore()
</script>

<style scoped lang="scss">
.bg-wrap {
  height: 55vh;
  position: relative;
  overflow: hidden;
}

.love-image::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--miniMask);
}
</style>

<style lang="scss" scoped>
.love-container {
  background-image: linear-gradient(to right, rgba(37, 82, 110, 0.1) 1px, var(--background) 1px),
    linear-gradient(to bottom, rgba(37, 82, 110, 0.1) 1px, var(--background) 1px);
  background-size: 3rem 3rem;
  /*background: var(--background);*/
}
</style>

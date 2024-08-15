<template>
  <loader>
    <template #body>
      <el-image
        style="animation: header-effect 2s"
        class="background-image-index"
        v-once
        lazy
        src="https://qiniu.maoye.vip/randomCover/maoye1170946835416276.jpg"
        fit="cover"
      >
        <template #error>
          <div class="image-slot background-image-index-error"></div>
        </template>
      </el-image>

      <div class="signature-wall flex justify-center items-center my-animation-hideToShow">
        <h1 class="playful">
          <span v-for="(a, index) in webTitle" :key="index">{{ a }}</span>
        </h1>
        <div class="printer" @click="getGuShi()">
          <printer :printer-info="printerInfo">
            <template #paper="scope">
              <h3>{{ scope.content }}<span class="cursor">|</span></h3>
            </template>
          </printer>
        </div>
        <wave />
        <i class="el-icon-arrow-down" @click="navigation('.page-container-wrap')"></i>
      </div>
    </template>
  </loader>
</template>

<script setup>
import { ref } from 'vue'

const webTitle = ref('生生不息,万物不止')
const printerInfo = ref('你看对面的青山多漂亮')

const navigation = selector => {
  const el = document.querySelector(selector)
  window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
$bannerHeight: 50vh;

.background-image-index {
  width: 100vw;
  height: $bannerHeight;
  position: fixed;
  z-index: -1;
}

.background-image-index::before {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  content: '';
}

.background-image-index-error {
  background-color: var(--lightGreen);
  width: 100vw;
  height: $bannerHeight;
  position: fixed;
  z-index: -1;
}

.signature-wall {
  /* 向下排列 */
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  height: 50vh;
  overflow: hidden;
}

.playful {
  color: var(--white);
  font-size: 40px;
}

.printer {
  cursor: pointer;
  color: var(--white);
  background: var(--translucent);
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.el-icon-arrow-down {
  font-size: 40px;
  font-weight: bold;
  color: var(--white);
  position: absolute;
  bottom: 60px;
  animation: my-shake 1.5s ease-out infinite;
  z-index: 15;
  cursor: pointer;
}
</style>

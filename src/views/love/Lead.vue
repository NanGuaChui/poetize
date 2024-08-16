<template>
  <!-- 对象 -->
  <div class="love-wrap transformCenter">
    <div>
      <el-avatar class="love-avatar" :src="loveInfo.manCover" />
      <div class="love-title">{{ loveInfo.manName }}</div>
    </div>
    <div>
      <love-svg class="love-img" />
    </div>
    <div>
      <el-avatar class="love-avatar" :src="loveInfo.womanCover" />
      <div class="love-title">{{ loveInfo.womanName }}</div>
    </div>
  </div>
</template>

<script setup>
import loveSvg from '@/components/svg/Love.vue'
import { useLoveInfoStore } from '@/stores/loveInfo'

const { loveInfo } = useLoveInfoStore()
</script>

<style scoped lang="scss">
.love-wrap {
  width: 90%;
  background: rgba(255, 255, 255, 0.1);
  max-width: 950px;
  border-radius: 3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px 70px 30px 70px;
}

.love-avatar {
  border: rgba(255, 255, 255, 0.2) 4px solid;
  width: 180px;
  height: 180px;
}

.love-title {
  margin-top: 15px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  color: var(--white);
}

.love-img {
  animation: imgScale 2s linear infinite;
  width: 120px;
  height: 120px;
}

@media screen and (max-width: 800px) {
  .love-wrap {
    border-radius: 1.5em;
    padding: 40px 30px 10px 30px;
  }

  .love-avatar {
    width: 120px;
    height: 120px;
  }

  .love-img {
    width: 100px;
    height: 100px;
  }
}
@media screen and (max-width: 600px) {
  .love-wrap {
    padding: 30px 20px 10px 20px;
  }

  .love-avatar {
    width: 100px;
    height: 100px;
  }

  .love-img {
    width: 80px;
    height: 80px;
  }
}
</style>

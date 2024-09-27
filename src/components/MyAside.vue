<template>
  <div class="aside-content">
    <div class="myAside-container">
      <!-- 网站信息 -->
      <div class="card-content1 shadow-box background-opacity">
        <el-avatar style="margin-top: 20px" class="user-avatar" :size="120" :src="webInfo.avatar"></el-avatar>
        <div class="web-name">{{ webInfo.webName }}</div>
        <div class="web-info">
          <div class="blog-info-box">
            <span>文章</span>
            <span class="blog-info-num">10</span>
          </div>
          <div class="blog-info-box">
            <span>分类</span>
            <span class="blog-info-num">3</span>
          </div>
          <div class="blog-info-box">
            <span>访问量</span>
            <span class="blog-info-num">{{ webInfo.historyAllCount }}</span>
          </div>
        </div>
        <a class="collection-btn flex items-center justify-center" @click="showTip()">
          <el-icon><Star /></el-icon>朋友圈
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWebInfoStore } from '@/stores/webInfo'
import { Star } from '@element-plus/icons-vue'

const { webInfo } = useWebInfoStore()
</script>

<style scoped lang="scss">
.aside-content {
  width: calc(30% - 40px);
  user-select: none;
  margin-right: 40px;
  max-width: 300px;
}

.myAside-container > div:not(:last-child) {
  margin-bottom: 30px;
}

.card-content1 {
  background: linear-gradient(-45deg, #e8d8b9, #eccec5, #a3e9eb, #bdbdf0, #eec1ea);
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.card-content1 :not(:first-child) {
  z-index: 10;
}

.web-name {
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
}

.web-info {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.blog-info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.blog-info-num {
  margin-top: 12px;
}

.collection-btn {
  position: relative;
  margin-top: 12px;
  background: var(--lightGreen);
  cursor: pointer;
  width: 65%;
  height: 35px;
  border-radius: 1rem;
  color: var(--white);
  overflow: hidden;
  z-index: 1;
  margin-bottom: 25px;
}

.collection-btn::before {
  background: var(--gradualRed);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  transform: scaleX(0);
  transform-origin: 0;
  transition: transform 0.5s ease-out;
  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  border-radius: 1rem;
  z-index: -1;
}

.collection-btn:hover::before {
  transform: scaleX(1);
}

@media screen and (max-width: 1000px) {
  .aside-content {
    width: 100%;
    max-width: unset;
    margin: 40px auto 0;
  }
}
</style>

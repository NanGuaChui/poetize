<template>
  <!-- 卡片 -->
  <div class="card-wrap">
    <div class="card-content shadow-box-mini" @click="changeCard(1)">
      <div>
        <el-avatar :size="100" :src="recordIcon" />
      </div>
      <div class="card-right">
        <div class="card-title">点点滴滴</div>
        <div class="card-desc">☀️今朝有酒今朝醉</div>
      </div>
    </div>

    <div class="card-content shadow-box-mini" @click="changeCard(2)">
      <div>
        <el-avatar :size="100" :src="lovePhotoIcon"> </el-avatar>
      </div>
      <div class="card-right">
        <div class="card-title">时光相册</div>
        <div class="card-desc">📸记录美好瞬间</div>
      </div>
    </div>

    <div class="card-content shadow-box-mini" @click="changeCard(3)">
      <div>
        <el-avatar :size="100" :src="loveMessageIcon"> </el-avatar>
      </div>
      <div class="card-right">
        <div class="card-title">祝福板</div>
        <div class="card-desc">📋写下对我们的祝福</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import recordIcon from '../../assets/images/loveWeiYan.jpg'
import lovePhotoIcon from '../../assets/images/lovePhoto.jpg'
import loveMessageIcon from '../../assets/images/loveMessage.jpg'

const changeCard = () => {}
</script>

<style scoped lang="scss">
.card-wrap {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.card-content {
  display: flex;
  padding: 25px;
  margin: 25px auto;
  border-radius: 20px;
  max-width: 780px;
  cursor: pointer;
  transition: all 0.3s;
  background: var(--background);
}

.card-content:hover {
  transform: translateY(-6px);
}

.card-right {
  margin-left: 20px;
}

.card-title {
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  line-height: 3.5rem;
  font-weight: 700;
}

.card-desc {
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  color: #777777;
}

.card-container {
  max-width: 1500px;
  margin: 20px auto 40px;
}
@media screen and (max-width: 600px) {
  .card-container .tree-hole-container {
    padding: 0;
  }
}
@media screen and (max-width: 1150px) {
  .card-wrap {
    display: unset;
    justify-content: unset;
  }
}
</style>

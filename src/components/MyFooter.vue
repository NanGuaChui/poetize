<template>
  <div class="pagination-wrap">
    <div style="user-select: none">~~到底啦~~</div>
  </div>
  <div class="myFooter-wrap">
    <div class="myFooter">
      <div class="footer-title">{{ webInfo.footer }}</div>
      <div class="icp">
        本网站由 <a href="https://plots.cn" target="_blank">PLOTS</a> 强力支持
        <a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备19015374号-1</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWebInfoStore } from '@/stores/webInfo'

const { webInfo } = useWebInfoStore()
</script>

<style scoped lang="scss">
.pagination-wrap {
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background: #fff;
}

.pagination {
  padding: 13px 15px;
  border: 1px solid var(--lightGray);
  border-radius: 3rem;
  color: var(--greyFont);
  width: 100px;
  user-select: none;
  cursor: pointer;
  text-align: center;
}

.myFooter-wrap {
  user-select: none;
  background-color: #fff;
  animation: hideToShow 2s;
}

.myFooter {
  border-radius: 1.5rem 1.5rem 0 0;
  background: var(--gradientBG);
  text-align: center;
  color: var(--white);
  background-size: 300% 300%;
  animation: gradientBG 10s ease infinite;
}

.footer-title {
  padding-top: 10px;
  font-size: 16px;
}

.icp,
.icp a {
  color: var(--maxGreyFont);
  font-size: 13px;
}

.icp {
  padding-top: 10px;
  padding-bottom: 10px;
}

.icp a {
  text-decoration: none;
  transition: all 0.3s;
}

.icp a:hover {
  color: var(--themeBackground);
}
</style>

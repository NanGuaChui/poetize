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
        <el-icon class="arrow-icon" @click="navigation('.page-container-wrap')"><ArrowDownBold /></el-icon>
      </div>

      <!-- 首页内容 -->
      <div class="page-container-wrap">
        <div class="page-container">
          <MyAside />
          <div class="recent-posts">
            <div class="announcement background-opacity">
              <i class="fa fa-volume-up" aria-hidden="true"></i>
              <div>
                <div v-for="(notice, index) in webInfo.notices" :key="index">
                  {{ notice }}
                </div>
              </div>
            </div>

            <div>
              <div v-for="(sort, index) in sortInfo" :key="index">
                <div v-if="!$common.isEmpty(sortArticles[sort.id])">
                  <div class="sort-article-first">
                    <div>
                      <MenuIcon />
                      {{ sort.sortName }}
                    </div>
                    <div class="article-more" @click="$router.push({ path: '/sort', query: { sortId: sort.id } })">
                      <MoreIcon />
                      MORE
                    </div>
                  </div>
                  <sortArticle :articleList="sortArticles[sort.id]"></sortArticle>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </loader>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowDownBold } from '@element-plus/icons-vue'
import MenuIcon from '@/components/svg/Menu.vue'
import MoreIcon from '@/components/svg/More.vue'
import { useWebInfoStore } from '@/stores/webInfo'

const webTitle = ref('生生不息,万物不止')
const printerInfo = ref('你看对面的青山多漂亮')
const { webInfo, sortInfo, sortArticles } = useWebInfoStore()

const navigation = selector => {
  const el = document.querySelector(selector)
  window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
$bannerHeight: 100vh;

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
  height: $bannerHeight;
  overflow: hidden;
}

.playful {
  color: var(--white);
  font-size: 40px;
}

.sort-article-first {
  margin: 40px auto 20px;
  display: flex;
  justify-content: space-between;
  color: var(--greyFont);
  border-bottom: 1px dashed var(--lightGray);
  padding-bottom: 5px;
}

.article-more {
  cursor: pointer;
  transition: all 0.3s;
}

.article-more:hover {
  color: var(--lightGreen);
  font-weight: 700;
  transform: scale(1.1);
}

.printer {
  cursor: pointer;
  color: var(--white);
  background: var(--translucent);
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.arrow-icon {
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

<style scoped lang="scss">
.page-container-wrap {
  background: var(--background);
  position: relative;
}

.page-container {
  display: flex;
  justify-content: center;
  width: 90%;
  padding: 0 10px 40px 10px;
  margin: 0 auto;
  flex-direction: row;
}

.recent-posts {
  width: 70%;
}

.announcement {
  padding: 22px;
  border: 1px dashed var(--lightGray);
  color: var(--greyFont);
  border-radius: 10px;
  display: flex;
  margin: 40px auto 40px;
}

.announcement i {
  color: var(--themeBackground);
  font-size: 22px;
  margin: auto 0;
  animation: scale 0.8s ease-in-out infinite;
}

.announcement div div {
  margin-left: 20px;
  line-height: 30px;
}

@media screen and (max-width: 1100px) {
  .recent-posts {
    width: 100%;
  }

  .page-container {
    width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  .page-container {
    /* 文章栏与侧标栏垂直排列 */
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 35px;
  }
}
</style>

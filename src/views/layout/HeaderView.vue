<template>
  <transition name="el-fade-in-linear">
    <div v-show="toolbar" class="toolbar-content flex justify-between">
      <div class="toolbar-title">
        <h2 @click="$router.push({ path: '/' })">POETIZE</h2>
      </div>

      <div v-if="mobile">mobile</div>
      <ul v-else class="scroll-menu">
        <li @click="$router.push({ path: '/' })">
          <div class="my-menu">🏡 <span>首页</span></div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const toolbar = ref(true)
const mobile = ref(false)

const sortInfo = ref([
  {
    id: 1,
    sortName: '微语',
    sortDescription: '微语呀~',
    sortType: 1,
    priority: null,
    countOfSort: 3,
    labels: [
      {
        id: 1,
        sortId: 1,
        labelName: '玫瑰',
        labelDescription: '我将玫瑰藏于身后~',
        countOfLabel: 1
      },
      {
        id: 10,
        sortId: 1,
        labelName: '守望',
        labelDescription: '守望',
        countOfLabel: 1
      },
      {
        id: 11,
        sortId: 1,
        labelName: '人性',
        labelDescription: '人性',
        countOfLabel: 1
      }
    ]
  },
  {
    id: 3,
    sortName: '网站',
    sortDescription: '网站',
    sortType: 1,
    priority: 0,
    countOfSort: 3,
    labels: []
  },
  {
    id: 4,
    sortName: '王者荣耀',
    sortDescription: '王者荣耀',
    sortType: 1,
    priority: 4,
    countOfSort: 3,
    labels: []
  },
  {
    id: 5,
    sortName: '博客美化',
    sortDescription: '博客美化',
    sortType: 1,
    priority: 2,
    countOfSort: 3,
    labels: [
      {
        id: 6,
        sortId: 5,
        labelName: '博客美化',
        labelDescription: '博客美化',
        countOfLabel: 3
      }
    ]
  },
  {
    id: 6,
    sortName: '音乐',
    sortDescription: '博客音乐',
    sortType: 1,
    priority: 3,
    countOfSort: 4,
    labels: [
      {
        id: 7,
        sortId: 6,
        labelName: '博客音乐播放器',
        labelDescription: '博客音乐播放器',
        countOfLabel: 4
      }
    ]
  },
  {
    id: 7,
    sortName: '前端',
    sortDescription: '前端',
    sortType: 1,
    priority: 1,
    countOfSort: 5,
    labels: []
  },
  {
    id: 8,
    sortName: 'docker部署',
    sortDescription: 'docker部署',
    sortType: 1,
    priority: 5,
    countOfSort: 1,
    labels: [
      {
        id: 17,
        sortId: 8,
        labelName: 'Minio',
        labelDescription: 'Minio',
        countOfLabel: 1
      }
    ]
  }
])
</script>

<style scoped lang="scss">
.toolbar-content {
  width: 100%;
  height: 60px;
  color: var(--white);
  /* 固定位置，不随滚动条滚动 */
  position: fixed;
  z-index: 100;
  /* 禁止选中文字 */
  user-select: none;
  transition: all 0.3s ease-in-out;
}

.toolbar-content.enter {
  background: var(--toolbarBackground);
  color: var(--toolbarFont);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
}

.toolbar-content.hoverEnter {
  background: var(--translucent);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
}

.toolbar-title {
  margin-left: 30px;
  cursor: pointer;
}

.toolbar-mobile-menu {
  font-size: 30px;
  margin-right: 15px;
  cursor: pointer;
}

.scroll-menu {
  margin: 0 25px 0 0;
  display: flex;
  justify-content: flex-end;
  padding: 0;
}

.scroll-menu li {
  list-style: none;
  margin: 0 12px;
  font-size: 17px;
  height: 60px;
  line-height: 60px;
  position: relative;
  cursor: pointer;
}

.scroll-menu li:hover .my-menu span {
  color: var(--themeBackground);
}

.scroll-menu li:hover .my-menu i {
  color: var(--themeBackground);
  animation: scale 1.5s ease-in-out infinite;
}

.scroll-menu li .my-menu:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  height: 6px;
  background-color: var(--themeBackground);
  width: 100%;
  max-width: 0;
  transition: max-width 0.25s ease-in-out;
}

.scroll-menu li:hover .my-menu:after {
  max-width: 100%;
}

.sortMenu {
  margin-left: 44px;
  font-size: 17px;
  position: relative;
}

.sortMenu:after {
  top: 32px;
  width: 35px;
  left: 0;
  height: 2px;
  background: var(--themeBackground);
  content: '';
  border-radius: 1px;
  position: absolute;
}

.el-dropdown {
  font-size: unset;
  color: unset;
}

.el-popper[x-placement^='bottom'] {
  margin-top: -8px;
}

.el-dropdown-menu {
  padding: 5px 0;
}

.el-dropdown-menu__item {
  font-size: unset;
}

.el-dropdown-menu__item:hover {
  background-color: var(--white);
  color: var(--themeBackground);
}
</style>

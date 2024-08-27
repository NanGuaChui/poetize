<template>
  <transition name="el-fade-in-linear">
    <div v-show="toolbar" class="toolbar-content flex justify-between">
      <div class="toolbar-title">
        <h2 @click="$router.push({ path: '/' })">PLOTS</h2>
      </div>

      <!-- 手机导航按钮 -->
      <div
        v-if="$common.isMobile()"
        class="toolbar-mobile-menu flex items-center"
        @click="toolbarDrawer = !toolbarDrawer"
        :class="{ enter: toolbar.enter }"
      >
        <el-icon>
          <Operation />
        </el-icon>
      </div>

      <ul v-else class="scroll-menu">
        <li @click="$router.push({ path: '/' })">
          <div class="my-menu">🏡 <span>首页</span></div>
        </li>
        <li @click="$router.push({ path: '/love' })">
          <div class="my-menu">💋 <span>爱情买卖</span></div>
        </li>
        <!-- <li @click="$router.push({ path: '/travel' })">
          <div class="my-menu">🌏 <span>相册</span></div>
        </li> -->
        <li @click="$router.push({ path: '/travel' })">
          <div class="my-menu">📸 <span>相册</span></div>
        </li>
        <li @click="$router.push({ path: '/tools' })">
          <div class="my-menu">🧰 <span>百宝箱</span></div>
        </li>
      </ul>
    </div>
  </transition>

  <el-drawer
    v-model="toolbarDrawer"
    :show-close="false"
    size="65%"
    class="toolbar-drawer"
    title="欢迎光临"
    direction="ltr"
  >
    <div>
      <ul class="small-menu">
        <li @click="smallMenu({ path: '/' })">
          <div>🏡 <span>首页</span></div>
        </li>
        <li @click="smallMenu({ path: '/love' })">
          <div>💋 <span>爱情买卖</span></div>
        </li>
        <!-- <li @click="smallMenu({ path: '/travel' })">
          <div>🌏 <span>相册</span></div>
        </li> -->
        <li @click="smallMenu({ path: '/travel' })">
          <div>📸  <span>相册</span></div>
        </li>
        <li @click="smallMenu({ path: '/tools' })">
          <div>🧰 <span>百宝箱</span></div>
        </li>
      </ul>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Operation } from '@element-plus/icons-vue'

const toolbar = ref(true)
const toolbarDrawer = ref(false)

const $router = useRouter()

const smallMenu = path => {
  toolbarDrawer.value = false
  $router.push(path)
}
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
  background: var(--miniMask);
}

.toolbar-content:hover {
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
  background: var(--toolbarBackground);
  color: var(--toolbarFont);
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

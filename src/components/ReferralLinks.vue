<template>
  <div class="links-content flex justify-center">
    <div v-for="item in 8" :key="item" class="isActive">
      <proTag
        :info="item.classify"
        :color="$common.before_color_list[Math.floor(Math.random() * 6)]"
        style="margin: 12px"
      >
      </proTag>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.photo-content {
  width: calc(70% - 40px);
  border-radius: 10px;
  user-select: none;
  overflow: hidden;
}
.myAside-title {
  line-height: 40px;
  font-size: 20px;
  padding: 0 10px;
  font-weight: bold;
}
.myAside-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .image {
    width: 25%;
    height: 147px;
    position: relative;
    &:hover::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      background: var(--mask);
      cursor: pointer;
    }
    .el-image {
      width: 100%;
      height: 147px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .photo-content {
    width: 100%;
    max-width: unset;
    margin: 40px auto;
    .image {
      width: 50%;
      height: auto;
    }
  }
}
</style>

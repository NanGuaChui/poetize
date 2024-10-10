<template>
  <div class="photo-content bg-multicolour">
    <div class="myAside-title flex justify-between items-center">Photos<MoreIcon /></div>
    <div class="myAside-container">
      <template v-for="item in 8" :key="item">
        <div class="image">
          <plots-image :src="AvatarImage" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import AvatarImage from '@/assets/images/Sara11673171236302693.jpg'
import MoreIcon from '@/components/svg/More.vue'
</script>

<style scoped lang="scss">
.photo-content {
  flex: 1;
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
      display: block;
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
      .el-image {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>

<template>
  <el-image class="background-image-index" v-once lazy fit="cover" v-bind="$attrs">
    <template #error>
      <div class="image-slot background-image-index-error"></div>
    </template>
  </el-image>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.background-image-index {
  animation: header-effect 2s;
}
</style>

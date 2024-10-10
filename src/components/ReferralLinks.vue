<template>
  <div class="links-content flex justify-center flex-wrap">
    <template v-for="item in 8" :key="item">
      <proTag class="tag" :info="item.classify" :color="$common.before_color_list[Math.floor(Math.random() * 6)]" />
    </template>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.tag {
  margin: 0 12px 12px 0;
}
@media screen and (max-width: 1000px) {
  .tag {
    margin: 0 12px 12px 0;
  }
}
</style>

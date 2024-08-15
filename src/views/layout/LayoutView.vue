<template>
  <HeaderView></HeaderView>
  <div id="main-container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderView from './HeaderView.vue'
</script>

<style scoped lang="scss"></style>

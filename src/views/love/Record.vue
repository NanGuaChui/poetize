<template>
  <treeHole :treeHoleList="loveRecord" :avatar="manCover" />
</template>

<script setup>
import { useLoveInfoStore } from '@/stores/loveInfo'
import manCover from '../../assets/images/Sara11673171236302693.jpg'

const { loveRecord } = useLoveInfoStore()
</script>

<style scoped lang="scss"></style>

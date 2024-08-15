<template>
  <treeHole :treeHoleList="treeHoleList" :avatar="manCover" />
</template>

<script setup>
import { ref } from 'vue'
import manCover from '../../assets/images/Sara11673171236302693.jpg'

const treeHoleList = ref([
  {
    id: 4332,
    userId: 1,
    likeCount: 0,
    content:
      '今天发工资了，我一个月工资800，你猜我会给你多少，是不是觉得我会给你1200，因为厂里全勤奖还有400，错了，我会再和工友借114凑够1314转给你。',
    isPublic: true,
    type: 'love',
    source: null,
    createTime: '2024-05-20 16:57:35',
    commentCount: null,
    username: 'Sara',
    avatar: 'https://file.poetize.cn/userAvatar/Sara116383649934075',
    userLv: 6,
    createTimeLv: '归真境'
  },
  {
    id: 4330,
    userId: 1,
    likeCount: 0,
    content: '你好，很高兴认识你。',
    isPublic: true,
    type: 'love',
    source: null,
    createTime: '2024-05-20 16:43:14',
    commentCount: null,
    username: 'Sara',
    avatar: 'https://file.poetize.cn/userAvatar/Sara116383649934075',
    userLv: 6,
    createTimeLv: '归真境'
  }
])
</script>

<style scoped lang="scss"></style>

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTravelInfoStore = defineStore('travelInfo', () => {
  const photoTitleList = ref([
    { classify: '动漫', count: 1 },
    { classify: '小女孩', count: 1 },
    { classify: '游玩', count: 9 }
  ])

  const photoList = ref([
    {
      id: 16,
      title: '小女孩',
      classify: '动漫',
      cover: 'https://qiniu.maoye.vip/lovePhotoCover/maoye11692785431403613.jpg',
      url: '',
      type: 'lovePhoto',
      remark: '1',
      status: true,
      introduction: '',
      createTime: '2023-08-23 18:11:12'
    }
  ])

  return { bgCover: 'https://qiniu.maoye.vip/mp4/LEDwutaimp4.mp4', photoTitleList, photoList }
})

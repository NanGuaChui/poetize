<template>
  <div class="flex justify-center items-center love-content">
    <!-- 时间 -->
    <div>
      <!-- 计时 -->
      <div>
        <div class="love-time-title1">这是我们一起走过的</div>
        <div class="love-time1">
          第
          <span class="love-time1-item">{{ timing.year }}</span>
          年
          <span class="love-time1-item">{{ timing.month }}</span>
          月
          <span class="love-time1-item">{{ timing.day }}</span>
          日
          <span class="love-time1-item">{{ timing.hour }}</span>
          时
          <span class="love-time1-item">{{ timing.minute }}</span>
          分
          <span class="love-time1-item">{{ timing.second }}</span>
          秒
        </div>
      </div>
      <!-- 倒计时 -->
      <div class="love-time-title2">{{ loveInfo.countdownTitle }} : {{ countdownChange }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import { useLoveInfoStore } from '@/stores/loveInfo'

const { loveInfo } = useLoveInfoStore()

const timing = ref({ year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0 })
const countdownChange = ref('')

const getLoveTime = () => {
  const start = dayjs(loveInfo.timing)
  const now = dayjs()
  timing.value = {
    year: now.diff(start, 'year'),
    month: now.diff(start, 'month') % 12,
    day: now.diff(start, 'day') % 30,
    hour: now.diff(start, 'hour') % 24,
    minute: now.diff(start, 'minute') % 60,
    second: now.diff(start, 'second') % 60
  }
}

const countdown = () => {
  const start = dayjs(loveInfo.countdownTime)
  const now = dayjs()
  const countdown = {
    day: start.diff(now, 'day'),
    hour: start.diff(now, 'hour') % 24,
    minute: start.diff(now, 'minute') % 60,
    second: start.diff(now, 'second') % 60
  }
  countdownChange.value =
    countdown.day + '天' + countdown.hour + '时' + countdown.minute + '分' + countdown.second + '秒'
}

onMounted(() => {
  getLoveTime()
  countdown()
  setInterval(() => {
    getLoveTime()
    countdown()
  }, 1000)
})
</script>

<style scoped lang="scss">
.love-content {
  max-width: 1200px;
  overflow: hidden;
  margin: 20px auto 0;
  user-select: none;
}

.love-time-title1 {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  line-height: 4rem;
  text-align: center;
  background-image: linear-gradient(
    270deg,
    #ff4500,
    #ffa500,
    #ffd700,
    #90ee90,
    #00ffff,
    #1e90ff,
    #9370db,
    #ff69b4,
    #ff4500
  );
  background-clip: text;
  animation: jianBian 60s linear infinite;
  width: 3000px;
  color: rgba(0, 0, 0, 0);
}

.love-time-title2 {
  text-align: center;
  font-size: 1.5rem;
  line-height: 4rem;
  font-weight: 600;
  letter-spacing: 2px;
}

.love-time1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
}

.love-time1-item {
  font-size: 4rem;
  font-weight: 700;
}

@media screen and (max-width: 800px) {
  .love-time1 {
    font-size: 1.4rem;
  }

  .love-time1-item {
    font-size: 3rem;
  }
}

@media screen and (max-width: 600px) {
  .love-time1 {
    font-size: 1rem;
  }

  .love-time1-item {
    font-size: 1.8rem;
  }

  .love-time-title2 {
    font-size: 1.2rem;
  }
}
</style>

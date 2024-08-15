<template>
  <!-- 封面 -->
  <div class="bg-wrap my-animation-slide-top">
    <!-- 背景图片 -->
    <el-image class="love-image my-el-image" lazy fit="cover" :src="love.bgCover">
      <template #error>
        <div class="image-slot"></div>
      </template>
    </el-image>

    <!-- 对象 -->
    <div class="love-wrap transformCenter">
      <div>
        <el-avatar class="love-avatar" :src="love.manCover" />
        <div class="love-title">{{ love.manName }}</div>
      </div>
      <div>
        <love-svg class="love-img" />
      </div>
      <div>
        <el-avatar class="love-avatar" :src="love.womanCover" />
        <div class="love-title">{{ love.womanName }}</div>
      </div>
    </div>

    <wave />
  </div>
  <div class="love-container">
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
        <div class="love-time-title2">{{ love.countdownTitle }} : {{ countdownChange }}</div>
      </div>
    </div>

    <div style="padding: 0 20px">
      <!-- 卡片 -->
      <div class="card-wrap">
        <div class="card-content shadow-box-mini" @click="changeCard(1)">
          <div>
            <el-avatar :size="100" :src="recordIcon" />
          </div>
          <div class="card-right">
            <div class="card-title">点点滴滴</div>
            <div class="card-desc">☀️今朝有酒今朝醉</div>
          </div>
        </div>

        <div class="card-content shadow-box-mini" @click="changeCard(2)">
          <div>
            <el-avatar :size="100" :src="lovePhotoIcon"> </el-avatar>
          </div>
          <div class="card-right">
            <div class="card-title">时光相册</div>
            <div class="card-desc">📸记录美好瞬间</div>
          </div>
        </div>

        <div class="card-content shadow-box-mini" @click="changeCard(3)">
          <div>
            <el-avatar :size="100" :src="loveMessageIcon"> </el-avatar>
          </div>
          <div class="card-right">
            <div class="card-title">祝福板</div>
            <div class="card-desc">📋写下对我们的祝福</div>
          </div>
        </div>
      </div>

      <record />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import loveSvg from '@/components/svg/Love.vue'
import Record from './Record.vue'
import bgCover from '../../assets/images/Sara11715528640728420.png'
import manCover from '../../assets/images/Sara11673171236302693.jpg'
import womanCover from '../../assets/images/Sara11673171304295312.jpg'
import recordIcon from '../../assets/images/loveWeiYan.jpg'
import lovePhotoIcon from '../../assets/images/lovePhoto.jpg'
import loveMessageIcon from '../../assets/images/loveMessage.jpg'

const love = ref({
  bgCover,
  manCover,
  womanCover,
  manName: 'Sara',
  womanName: 'Abby',
  timing: '2022-03-15 12:00:00',
  countdownTitle: '春节倒计时',
  countdownTime: '2025-01-29 00:00:00',
  familyInfo:
    '那年，曲奇小姐大三，她迎来有史以来最长的一次寒假。不想再次度过一个漫长又无趣的假期，她决定要做点什么。最后，她在离家很近的一个超市里找到了一份促销曲奇的工作，一直做到除夕。她想，刚好做完还有时间可以浪，完美！从此，便开始了她朝九晚五“愉快”的假期。\n\n不过，现实并木有她想的那么愉悦。她每天搁那杵着就是8个小时，反反复复也就那么两句台词，开心就嚷嚷两句，不过，倒像是只有她自己在听……当然，她也没那么敬业。没事要不就在数她的曲奇卖了几份，要不就瞄着来往过路的帅哥美女，要不就可能是在走神，似乎能在脑海上演一整部电视剧。(哦，她发现貌似发呆走神的时候，时间能过得飞快的不要不要的)。然后的然后，曲奇小姐就明白了一个真理——啊……原来一分钟可以有这么长；原来促销的时候没人理也是一件痛苦的事情。她一度怀疑：“难道现在的小孩子已经强大到可以抵挡零食的诱惑了么？连个小盆友都不鸟我?真是可惜我的试吃品……不过味道也确实不咋地，不然，可能早就被我偷吃了……哈哈哈”\n\n她的周围也有一群跟她一样的寒假工，大概也都是跟她一样闲着没事干吧。不过，她在其中一定是大姐大，毕竟都是大三老学姐了嘛，一群鲜肉们，嘻嘻。其中，她最羡慕两个人，两个运酒的少年，他们每天都可以“出双入对”的，没事还可以叙叙、玩玩，一定不无聊，唉……每次看到他们从我面前路过，我都要感叹一番。后来，大家每天抬头不见低头见的，也就有了萍水之交，没事也会打打招呼，瞎扯两句。也算是可以解解闷了，曲奇小姐如是想着……\n\n终于，要过年了！\n\n除夕前夜，曲奇小姐的内心是雀跃的，终于可以结束了，哈哈！一晚上感觉空气都是躁动的，就像每次考完期末考一样莫名的鸡冻……晚饭过后，她像平常一样回到她的地盘，想着如何耗过接下来的一个半小时。就在这时，那个没事还和我打招呼的运酒少年走过来了，问：“你QQ多少，我加你吧，过了今天，可能就来不及了。”曲奇小姐觉得：这个小伙真搞笑，于是就欣然地留下了她的QQ。闲聊了两句，大家又开始各自的任务了，嚷嚷的继续嚷嚷，运酒的继续运酒……\n\n让曲奇小姐奇怪的是，那个小伙子一直到第二天也没加她，她觉得一定是自己把账号打错了，真是太丢人了，难得人家还找你要账号，真是难为情啊！算了算了，就当什么也不知道吧，可能无缘有交集吧，反正下午就各回各家，各找各妈了，啧啧……她就这么敷衍一下自己，好让自己减少那么一点负罪感……下午曲奇小姐又来到那个超市，不过这次她是以一个正宗的顾客的身份来shopping的。就这么逛着逛着，她的手机响了一下——哦，原来她没有打错账号啊。\n\n少年加她时，留下了一串字：“2017年1月15日相遇，1月20日认识，1月27别。”曲奇小姐愣了一下，不知道什么心情，只觉得：“哦哟，可以的，小伙子，这都记得这么清！”\n\n那之后，他们没事就会聊聊天，天南地北的什么都谈，谈谈生活，谈谈未来，还谈另一半……少年似乎很会说话，总能找到很多谈资，也总是能说得很在理，也不时会冒出一些话，让她觉得挺感动，也蛮开心。虽然只有短短十多天不深不浅的聊天，她觉得似乎跟少年像认识了许久的朋友一样。大概少年也觉得跟她比较投缘吧，就这么一直聊着……\n\n渐渐地，曲奇小姐每天都很期待跟运酒少年聊天。她甚至还跟闺蜜们分享她纠结的心事，一群疯女人也很是雀跃啊，似乎比我还鸡冻，啧啧…不带这样还没开始，就先祝贺的啊喂！\n\n最后，她的远程助攻团们告诉她要抓住机会！\n\n她也决定了……是得要抓住那位！\n\n最后的最后，我想他们的故事应该是未完待续。loading……',
  likeCount: 0
})
const timing = ref({ year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0 })
const countdownChange = ref('')

const getLoveTime = () => {
  const start = dayjs(love.value.timing)
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
  const start = dayjs(love.value.countdownTime)
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

const changeCard = () => {}
</script>

<style scoped lang="scss">
.bg-wrap {
  height: 55vh;
  position: relative;
  overflow: hidden;
}

.love-image::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--miniMask);
}

.love-wrap {
  width: 90%;
  background: rgba(255, 255, 255, 0.1);
  max-width: 950px;
  border-radius: 3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px 70px 30px 70px;
}

.love-avatar {
  border: rgba(255, 255, 255, 0.2) 4px solid;
  width: 180px;
  height: 180px;
}

.love-title {
  margin-top: 15px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  color: var(--white);
}

.love-img {
  animation: imgScale 2s linear infinite;
  width: 120px;
  height: 120px;
}
</style>

<style lang="scss" scoped>
.love-container {
  background-image: linear-gradient(to right, rgba(37, 82, 110, 0.1) 1px, var(--background) 1px),
    linear-gradient(to bottom, rgba(37, 82, 110, 0.1) 1px, var(--background) 1px);
  background-size: 3rem 3rem;
  /*background: var(--background);*/
}
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

.card-wrap {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.card-content {
  display: flex;
  padding: 25px;
  margin: 25px auto;
  border-radius: 20px;
  max-width: 780px;
  cursor: pointer;
  transition: all 0.3s;
  background: var(--background);
}

.card-content:hover,
.family-button:hover,
.family-wrap:hover {
  transform: translateY(-6px);
}

.card-right {
  margin-left: 20px;
}

.card-title {
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  line-height: 3.5rem;
  font-weight: 700;
}

.card-desc {
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  color: #777777;
}

.card-container {
  max-width: 1500px;
  margin: 20px auto 40px;
}
</style>

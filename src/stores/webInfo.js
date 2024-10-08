import { ref } from 'vue'
import { defineStore } from 'pinia'
import avatar from '@/assets/images/Sara11673171236302693.jpg'

export const useWebInfoStore = defineStore('webInfo', () => {
  const webInfo = ref({
    webName: 'PLOTS',
    webTitle: '童话',
    notices: ['还在开发中的网站,但是已经迫不及待的想分享给你啦'],
    footer: '云想衣裳花想容，春风拂槛露华浓。',
    avatar,
    randomAvatar: null,
    randomName: null,
    randomCover:
      '["https://file.plots.cn/randomCover/Sara11712577250859470.jpg","https://file.plots.cn/randomCover/Sara11712577251035194.jpg","https://file.plots.cn/randomCover/Sara11712577250806907.jpg","https://file.plots.cn/randomCover/Sara11712577250907813.jpg","https://file.plots.cn/randomCover/Sara11712577250984979.jpg","https://file.plots.cn/randomCover/Sara11712577319942497.jpg","https://file.plots.cn/randomCover/Sara11712577320021545.jpg","https://file.plots.cn/randomCover/Sara11712577320111170.jpg","https://file.plots.cn/randomCover/Sara1171257732029155.jpg","https://file.plots.cn/randomCover/Sara11712577320389639.jpg","https://file.plots.cn/randomCover/Sara11712577365966150.jpg","https://file.plots.cn/randomCover/Sara11712577366099546.jpg","https://file.plots.cn/randomCover/Sara11712577366148102.jpg","https://file.plots.cn/randomCover/Sara11712577366306101.jpg","https://file.plots.cn/randomCover/Sara1171257736645913.jpg"]',
    ext: '{"mouseover":[{"selector":"#live2d","text":["我是一个特别固执的人，我从来不会在意别人跟我说什么，让我去做，让我去怎么做，我不管。如果，你也可以像我一样，那我觉得，这件事情，太酷辣!!!","我厉害，你给我大拇哥！","那些说我们的网站土的人，说抄袭的人，说我们文章拉的人，说我吃饱了撑的人，你给我大拇哥！","喵喵喵？","好久不见，日子过得好快呢……","嘤嘤嘤～","嗨～快来逗我玩吧！","退、退、退","很喜欢上班，有种上坟的感觉。","很喜欢放假，有种刑满释放的感觉。","很喜欢看评论，有一种批阅奏折的感觉。","很喜欢发工资，有一种领低保的感觉。","记得把我加入 Adblock 白名单哦！"]},{"selector":"#waifu-tool .fa-street-view","text":["喜欢换装 PLAY 吗？","这次要扮演什么呢？","变装！","让我们看看接下来会发生什么！"]},{"selector":"#waifu-tool .fa-times","text":["到了要说再见的时候了吗？","呜呜 QAQ 后会有期……","不要抛弃我呀……","我们，还能再见面吗……","哼，你会后悔的！"]}],"click":[{"selector":"#live2d","text":["你看到我的小熊了吗？","半山腰上的人，他还好吗？","也许还没等他回过神，就又是一年春天过去","风轻轻拂过半山腰，他的眼睛总有些落寞","云轻轻盖过他头崖，他的眼睛总是有泪痕","他在等什么 他在盼着 什么","你看对面的高山多漂亮","风轻轻拂过半山腰，春天时刻万物苏醒了","云轻轻盖过他头崖，悲伤过去迎来朝阳","他终于笑了 他终于笑了 他笑得好看","传说你永远不会老去，永远不需要伪装","每颗年轻的心房都对你欲盖弥彰","如今北风吹，都是等待的脸庞","自由的Sara啊，你知道年少的我不懂得忍让","痴痴地向前望，十字路口摸不清方向","如今北风吹，吹变了我的模样","如今北风吹，吹散了纯粹的香味","如今北风吹，预言如现实来到身旁"]}],"seasons":[{"date":"01/01","text":"<span>元旦</span>了呢，新的一年又开始了，今年是{year}年～"},{"date":"02/14","text":"又是一年<span>情人节</span>，{year}年找到对象了嘛～"},{"date":"03/08","text":"今天是<span>国际妇女节</span>！"},{"date":"03/12","text":"今天是<span>植树节</span>，要保护环境呀！"},{"date":"04/01","text":"悄悄告诉你一个秘密～<span>今天是愚人节，不要被骗了哦～</span>"},{"date":"05/01","text":"今天是<span>五一劳动节</span>，计划好假期去哪里了吗～"},{"date":"06/01","text":"<span>儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…"},{"date":"09/03","text":"<span>中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。"},{"date":"09/10","text":"<span>教师节</span>，在学校要给老师问声好呀～"},{"date":"10/01","text":"<span>国庆节</span>到了，为祖国母亲庆生！"},{"date":"11/05-11/12","text":"今年的<span>双十一</span>是和谁一起过的呢～"},{"date":"12/20-12/31","text":"这几天是<span>圣诞节</span>，主人肯定又去剁手买买买了～"}],"pushArticleId":20}',
    status: true,
    historyAllCount: '97254',
    historyDayCount: '319',
    defaultStoreType: 'qiniu',
    articlePush: {
      cover: 'https://file.plots.cn/articleCover/Sara11666527482073253',
      id: '20',
      title: 'PLOTS - 最美博客完整版'
    },
    version: {
      pay: '1'
    },
    customCss: null
  })

  return { webInfo }
})

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

  const sortInfo = ref([
    {
      id: 2,
      sortName: '生活倒影',
      sortDescription: '记录美好生活',
      sortType: 0,
      priority: 1,
      countOfSort: 9,
      labels: [
        {
          id: 6,
          sortId: 2,
          labelName: '被偷走的那几年',
          labelDescription: '被偷走的那几年',
          goodId: null,
          countOfLabel: 6,
          goodInfo: null
        },
        {
          id: 20,
          sortId: 2,
          labelName: '人间百态',
          labelDescription: '人间百态',
          goodId: null,
          countOfLabel: 3,
          goodInfo: null
        }
      ]
    },
    {
      id: 3,
      sortName: '学习人生',
      sortDescription: '学到老，活到老',
      sortType: 1,
      priority: 4,
      countOfSort: 34,
      labels: [
        {
          id: 5,
          sortId: 3,
          labelName: 'Java',
          labelDescription: 'Java',
          goodId: null,
          countOfLabel: 7,
          goodInfo: null
        },
        {
          id: 8,
          sortId: 3,
          labelName: 'SpringBoot',
          labelDescription: 'SpringBoot',
          goodId: null,
          countOfLabel: 9,
          goodInfo: null
        },
        {
          id: 15,
          sortId: 3,
          labelName: '大数据',
          labelDescription: '大数据',
          goodId: null,
          countOfLabel: 4,
          goodInfo: null
        },
        {
          id: 23,
          sortId: 3,
          labelName: 'MySQL',
          labelDescription: 'MySQL',
          goodId: null,
          countOfLabel: 1,
          goodInfo: null
        },
        {
          id: 24,
          sortId: 3,
          labelName: 'Redis',
          labelDescription: 'Redis',
          goodId: null,
          countOfLabel: 2,
          goodInfo: null
        },
        {
          id: 25,
          sortId: 3,
          labelName: 'Dubbo',
          labelDescription: 'Dubbo',
          goodId: null,
          countOfLabel: 2,
          goodInfo: null
        },
        {
          id: 26,
          sortId: 3,
          labelName: 'SpringCloud',
          labelDescription: 'SpringCloud',
          goodId: null,
          countOfLabel: 6,
          goodInfo: null
        },
        {
          id: 27,
          sortId: 3,
          labelName: 'MyBatis',
          labelDescription: 'MyBatis',
          goodId: null,
          countOfLabel: 2,
          goodInfo: null
        },
        {
          id: 28,
          sortId: 3,
          labelName: 'MQ',
          labelDescription: 'MQ',
          goodId: null,
          countOfLabel: 1,
          goodInfo: null
        }
      ]
    },
    {
      id: 4,
      sortName: '寻国记',
      sortDescription: '你看这世界多奇妙',
      sortType: 1,
      priority: 3,
      countOfSort: 4,
      labels: [
        {
          id: 11,
          sortId: 4,
          labelName: '俄罗斯与乌克兰',
          labelDescription: '俄罗斯与乌克兰',
          goodId: null,
          countOfLabel: 3,
          goodInfo: null
        },
        {
          id: 18,
          sortId: 4,
          labelName: '儒释道',
          labelDescription: '儒释道',
          goodId: null,
          countOfLabel: 1,
          goodInfo: null
        }
      ]
    },
    {
      id: 5,
      sortName: '视听盛宴',
      sortDescription: '听音乐，看书，看电影',
      sortType: 0,
      priority: 2,
      countOfSort: 19,
      labels: [
        {
          id: 12,
          sortId: 5,
          labelName: '电影最TOP',
          labelDescription: '电影最TOP',
          goodId: null,
          countOfLabel: 0,
          goodInfo: null
        },
        {
          id: 13,
          sortId: 5,
          labelName: '动漫最TOP',
          labelDescription: '动漫最TOP',
          goodId: null,
          countOfLabel: 2,
          goodInfo: null
        },
        {
          id: 14,
          sortId: 5,
          labelName: '万卷书',
          labelDescription: '万卷书',
          goodId: null,
          countOfLabel: 1,
          goodInfo: null
        },
        {
          id: 19,
          sortId: 5,
          labelName: '西游记',
          labelDescription: '西游记',
          goodId: null,
          countOfLabel: 8,
          goodInfo: null
        },
        {
          id: 21,
          sortId: 5,
          labelName: '八次危机',
          labelDescription: '八次危机',
          goodId: null,
          countOfLabel: 1,
          goodInfo: null
        },
        {
          id: 22,
          sortId: 5,
          labelName: '我们应该怎样活着',
          labelDescription: '我们应该怎样活着',
          goodId: null,
          countOfLabel: 6,
          goodInfo: null
        },
        {
          id: 37,
          sortId: 5,
          labelName: '搞笑最TOP',
          labelDescription: '搞笑最TOP',
          goodId: null,
          countOfLabel: 1,
          goodInfo: null
        },
        {
          id: 38,
          sortId: 5,
          labelName: '音乐最TOP',
          labelDescription: '音乐最TOP',
          goodId: null,
          countOfLabel: 0,
          goodInfo: null
        }
      ]
    },
    {
      id: 6,
      sortName: 'PLOTS',
      sortDescription: '最美博客',
      sortType: 0,
      priority: 5,
      countOfSort: 16,
      labels: [
        {
          id: 30,
          sortId: 6,
          labelName: '部署文档',
          labelDescription: '部署文档',
          goodId: null,
          countOfLabel: 8,
          goodInfo: null
        },
        {
          id: 31,
          sortId: 6,
          labelName: '使用指南',
          labelDescription: '使用指南',
          goodId: null,
          countOfLabel: 8,
          goodInfo: null
        }
      ]
    }
  ])

  const sortArticles = ref({
    2: [
      {
        id: 108,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11722466015637477.jpg',
        articleTitle: '转载 | 大梦 & 漫长的季节',
        articleContent:
          ' 转载自：B站 - 钢镚小豆豆\n这才是人生！【大梦 & 漫长的季节】超还原剧情完整MV 【范伟&瓦依那_任素汐】（无观众声）（钢镚小豆豆自制）',
        viewCount: 351,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: false,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: null,
        viewType: 'public',
        subViewValue: null,
        subTips: null,
        subViewType: null,
        subContent: null,
        downloadStatus: false,
        createTime: '2024-08-01 06:49:04',
        updateTime: '2024-08-01 06:49:04',
        updateBy: null,
        sortId: 2,
        labelId: 20,
        commentCount: 0,
        username: 'Sara',
        sort: {
          id: 2,
          sortName: '生活倒影',
          sortDescription: '记录美好生活',
          sortType: 0,
          priority: 1,
          countOfSort: 9,
          labels: null
        },
        label: {
          id: 20,
          sortId: 2,
          labelName: '人间百态',
          labelDescription: '人间百态',
          goodId: null,
          countOfLabel: 3,
          goodInfo: null
        },
        hasVideo: true,
        goodInfo: null
      },
      {
        id: 107,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11719987054945367.jpg',
        articleTitle: '差不多先生',
        articleContent:
          ' 好运与坏运\n上半年偶然碰到一个面试，很顺利的通过了，待遇也还不错。然后我跑了很远去参加线下终面。开场面试官说我的冲锋衣外套的领口竖起来了，注意仪容仪表。',
        viewCount: 1097,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: false,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: null,
        viewType: 'public',
        subViewValue: null,
        subTips: null,
        subViewType: null,
        subContent: null,
        downloadStatus: false,
        createTime: '2024-07-03 14:21:20',
        updateTime: '2024-07-03 14:21:20',
        updateBy: null,
        sortId: 2,
        labelId: 6,
        commentCount: 6,
        username: 'Sara',
        sort: {
          id: 2,
          sortName: '生活倒影',
          sortDescription: '记录美好生活',
          sortType: 0,
          priority: 1,
          countOfSort: 9,
          labels: null
        },
        label: {
          id: 6,
          sortId: 2,
          labelName: '被偷走的那几年',
          labelDescription: '被偷走的那几年',
          goodId: null,
          countOfLabel: 6,
          goodInfo: null
        },
        hasVideo: false,
        goodInfo: null
      },
      {
        id: 106,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11719916284944947.jpg',
        articleTitle: '马喽的命也是命',
        articleContent:
          ' 【马喽的命】嘲笑马喽，理解马喽，成为马喽\n<div style="position: relative;width: 100%;padding-botto',
        viewCount: 811,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: false,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: null,
        viewType: 'public',
        subViewValue: null,
        subTips: null,
        subViewType: null,
        subContent: null,
        downloadStatus: false,
        createTime: '2024-07-02 18:32:11',
        updateTime: '2024-07-02 18:54:33',
        updateBy: 'Sara',
        sortId: 2,
        labelId: 20,
        commentCount: 0,
        username: 'Sara',
        sort: {
          id: 2,
          sortName: '生活倒影',
          sortDescription: '记录美好生活',
          sortType: 0,
          priority: 1,
          countOfSort: 9,
          labels: null
        },
        label: {
          id: 20,
          sortId: 2,
          labelName: '人间百态',
          labelDescription: '人间百态',
          goodId: null,
          countOfLabel: 3,
          goodInfo: null
        },
        hasVideo: false,
        goodInfo: null
      }
    ],
    5: [
      {
        id: 103,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11717819175488888.jpg',
        articleTitle: '转载 | 过去&未来',
        articleContent: ' 转载自：B站 - 今夜流星小铺\n2022最后一天，我接到了来自四年前的电话...... | 2022关于我的一切',
        viewCount: 476,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: false,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: null,
        viewType: 'public',
        subViewValue: null,
        subTips: null,
        subViewType: null,
        subContent: null,
        downloadStatus: false,
        createTime: '2024-06-08 12:10:48',
        updateTime: '2024-06-08 12:10:48',
        updateBy: null,
        sortId: 5,
        labelId: 22,
        commentCount: 2,
        username: 'Sara',
        sort: {
          id: 5,
          sortName: '视听盛宴',
          sortDescription: '听音乐，看书，看电影',
          sortType: 0,
          priority: 2,
          countOfSort: 19,
          labels: null
        },
        label: {
          id: 22,
          sortId: 5,
          labelName: '我们应该怎样活着',
          labelDescription: '我们应该怎样活着',
          goodId: null,
          countOfLabel: 6,
          goodInfo: null
        },
        hasVideo: true,
        goodInfo: null
      },
      {
        id: 102,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11717817313060387.jpg',
        articleTitle: '转载 | 不是三块买不起！！只是四块更有性价比！',
        articleContent: ' 转载自：B站 - 熬一耶ye',
        viewCount: 309,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: false,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: null,
        viewType: 'public',
        subViewValue: null,
        subTips: null,
        subViewType: null,
        subContent: null,
        downloadStatus: false,
        createTime: '2024-06-08 11:32:07',
        updateTime: '2024-06-08 11:34:23',
        updateBy: 'Sara',
        sortId: 5,
        labelId: 37,
        commentCount: 1,
        username: 'Sara',
        sort: {
          id: 5,
          sortName: '视听盛宴',
          sortDescription: '听音乐，看书，看电影',
          sortType: 0,
          priority: 2,
          countOfSort: 19,
          labels: null
        },
        label: {
          id: 37,
          sortId: 5,
          labelName: '搞笑最TOP',
          labelDescription: '搞笑最TOP',
          goodId: null,
          countOfLabel: 1,
          goodInfo: null
        },
        hasVideo: true,
        goodInfo: null
      },
      {
        id: 83,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11706322622923153.png',
        articleTitle: '你要多努力，才配拥有生活！',
        articleContent:
          '选择放弃梦想，还是为梦想竭尽全力\n\n可是很多时候，只会感受到生活的压力，也从未有过梦想\n\n我们真正想要什么呢\n\n或许迷茫者、痛苦着、艰难者前行，一点一点走出迷茫',
        viewCount: 3348,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: false,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: null,
        viewType: 'public',
        subViewValue: null,
        subTips: null,
        subViewType: null,
        subContent: null,
        downloadStatus: false,
        createTime: '2024-01-27 10:43:32',
        updateTime: '2024-01-27 10:43:32',
        updateBy: null,
        sortId: 5,
        labelId: 22,
        commentCount: 4,
        username: 'Sara',
        sort: {
          id: 5,
          sortName: '视听盛宴',
          sortDescription: '听音乐，看书，看电影',
          sortType: 0,
          priority: 2,
          countOfSort: 19,
          labels: null
        },
        label: {
          id: 22,
          sortId: 5,
          labelName: '我们应该怎样活着',
          labelDescription: '我们应该怎样活着',
          goodId: null,
          countOfLabel: 6,
          goodInfo: null
        },
        hasVideo: true,
        goodInfo: null
      }
    ],
    6: [
      {
        id: 105,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11719543212884964.jpg',
        articleTitle: 'PLOTS - 宝塔部署教程（兼容其他网站）',
        articleContent: '加密文章',
        viewCount: 735,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: false,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: '【完整版】限时折扣，您将获得：部署文档、技术支持和PLOTS交流群。详情请访问【https://plots.cn/article/20】。',
        viewType: 'userLv',
        subViewValue: null,
        subTips: null,
        subViewType: 'comment',
        subContent: null,
        downloadStatus: false,
        createTime: '2024-06-28 11:18:48',
        updateTime: '2024-06-28 11:32:40',
        updateBy: 'Sara',
        sortId: 6,
        labelId: 30,
        commentCount: 16,
        username: 'Sara',
        sort: {
          id: 6,
          sortName: 'PLOTS',
          sortDescription: '最美博客',
          sortType: 0,
          priority: 5,
          countOfSort: 16,
          labels: null
        },
        label: {
          id: 30,
          sortId: 6,
          labelName: '部署文档',
          labelDescription: '部署文档',
          goodId: null,
          countOfLabel: 8,
          goodInfo: null
        },
        hasVideo: false,
        goodInfo: null
      },
      {
        id: 100,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11718027163532836.jpg',
        articleTitle: 'PLOTS - 文档导航与网站美化',
        articleContent: ' 部署\n![部署.jpg](https://file.plots.cn/articlePicture/Sara11717458939228739.jp',
        viewCount: 4683,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: true,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: null,
        viewType: 'public',
        subViewValue: null,
        subTips: null,
        subViewType: null,
        subContent: null,
        downloadStatus: false,
        createTime: '2024-06-04 08:36:03',
        updateTime: '2024-06-28 14:12:39',
        updateBy: 'Sara',
        sortId: 6,
        labelId: 31,
        commentCount: 3,
        username: 'Sara',
        sort: {
          id: 6,
          sortName: 'PLOTS',
          sortDescription: '最美博客',
          sortType: 0,
          priority: 5,
          countOfSort: 16,
          labels: null
        },
        label: {
          id: 31,
          sortId: 6,
          labelName: '使用指南',
          labelDescription: '使用指南',
          goodId: null,
          countOfLabel: 8,
          goodInfo: null
        },
        hasVideo: false,
        goodInfo: null
      },
      {
        id: 98,
        userId: 1,
        articleCover: 'https://file.plots.cn/articleCover/Sara11717301378901990.jpg',
        articleTitle: 'PLOTS - 常见问题',
        articleContent: '加密文章',
        viewCount: 523,
        likeCount: 0,
        commentStatus: true,
        status: true,
        recommendStatus: false,
        videoUrl: null,
        viewValue: null,
        goodId: null,
        tips: '【完整版】限时折扣，您将获得：部署文档、技术支持和PLOTS交流群。详情请访问【https://plots.cn/article/20】。',
        viewType: 'userLv',
        subViewValue: null,
        subTips: null,
        subViewType: null,
        subContent: null,
        downloadStatus: false,
        createTime: '2024-06-02 12:36:37',
        updateTime: '2024-06-28 10:03:55',
        updateBy: 'Sara',
        sortId: 6,
        labelId: 30,
        commentCount: 0,
        username: 'Sara',
        sort: {
          id: 6,
          sortName: 'PLOTS',
          sortDescription: '最美博客',
          sortType: 0,
          priority: 5,
          countOfSort: 16,
          labels: null
        },
        label: {
          id: 30,
          sortId: 6,
          labelName: '部署文档',
          labelDescription: '部署文档',
          goodId: null,
          countOfLabel: 8,
          goodInfo: null
        },
        hasVideo: false,
        goodInfo: null
      }
    ]
  })

  return { webInfo, sortInfo, sortArticles }
})

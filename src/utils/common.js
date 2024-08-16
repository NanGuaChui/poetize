export default {
  isMobile() {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
    return flag && flag.length && flag.length > 0
  },
  isEmpty(value) {
    // 判断任意类型的value是否为空
    if (value === null || value === undefined || value === '') {
      return true
    } else if (Array.isArray(value) && value.length === 0) {
      return true
    } else if (Object.prototype.toString.call(value) === '[object Object]' && JSON.stringify(value) === '{}') {
      return true
    } else {
      return false
    }
  },

  tree_hole_color: [
    'rgb(180, 224, 255)',
    'rgb(180, 203, 255)',
    'rgb(246, 223, 255)',
    'rgb(255, 214, 198)',
    'rgb(255, 205, 143)',
    'rgb(238, 255, 143)',
    'rgb(220, 255, 165)',
    'rgb(164, 234, 192)',
    'rgb(202, 241, 233)',
    'rgb(230, 230, 250)'
  ],

  before_color_list: ['black', 'rgb(131, 123, 199)', '#ee7752', '#e73c7e', '#23a6d5', '#23d5ab']
}

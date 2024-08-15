import 'normalize.css'
import '@/assets/css/main.scss'
import './assets/css/font-awesome.min.css'

import { createApp } from 'vue'
import { createAppPinia } from './stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import CommonComponents from './components'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import common from '@/utils/common'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$common = common

app.use(createAppPinia())
app.use(router)

app.use(ElementPlus)
app.use(CommonComponents)

app.mount('#app')

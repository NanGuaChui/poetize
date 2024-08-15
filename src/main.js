import 'normalize.css'
import 'animate.css'
import '@/assets/css/main.scss'
import './assets/css/font-awesome.min.css'

import { createApp } from 'vue'
import { createAppPinia } from './stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import CommonComponents from './components'

const app = createApp(App)

app.use(createAppPinia())
app.use(router)

app.use(ElementPlus)
app.use(CommonComponents)

app.mount('#app')

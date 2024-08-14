import 'normalize.css'
import '@/assets/main.scss'

import { createApp } from 'vue'
import { createAppPinia } from './stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createAppPinia())
app.use(router)

app.use(ElementPlus)

app.mount('#app')

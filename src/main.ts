import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import {symbol as authSymbol, createAuthStore} from './store/authStore'
import ElementPlus from "element-plus"

const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.provide(authSymbol, createAuthStore())
app.mount('#app')

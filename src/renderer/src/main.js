import { createApp } from 'vue'
import App from './App.vue'
import TodolistUI from './components'

// 创建对象
const app = createApp(App)
// 全局挂载组件
app.use(TodolistUI)

app.mount('#app')

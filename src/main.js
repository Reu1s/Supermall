import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'/// mitt 总线程引入

const app = createApp(App).use(store).use(router)

app.config.globalProperties.bus = Bus

app.mount('#app')

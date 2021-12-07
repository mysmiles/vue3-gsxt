import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import router from './router/index'
import store from './store/index'

const app = createApp(App)
const vuetify = createVuetify() // Replaces new Vuetify(...)

app.use(vuetify)
app.use(router)
app.use(store)
app.mount('#app')

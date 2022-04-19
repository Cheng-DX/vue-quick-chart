import { createApp } from 'vue'
import App from './App.vue'

import './settings'

import VueEchart from 'vue-echarts'

const app = createApp(App)

app.component('v-chart', VueEchart)

app.mount('#app')

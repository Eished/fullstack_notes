import '@/assets/icons'
import svgIcon from '@/components/svgIcon/index.vue'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).component('svg-icon', svgIcon).mount('#app')

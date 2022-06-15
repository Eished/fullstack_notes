import '@/assets/icons'
import SvgIcon from '@/components/svgIcon/index.vue'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).component('svg-icon', SvgIcon).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false

// 数据共享
const store = {
  debug: true,
  state: {
    message: '',
  },
  setMessage(newValue) {
    if (this.debug) {
      console.log('setMessage triggered with', newValue)
    }
    this.state.message = newValue
  },
}

new Vue({
  router,
  data: store,
  render: (h) => h(App),
}).$mount('#app')

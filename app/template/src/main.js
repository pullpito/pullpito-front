import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
import axios from 'axios'

// import 'bootstrap/scss/mixins/'
// import 'bootstrap/scss/utilities/'
// import 'bootstrap/scss/bootstrap-grid.scss'
// import 'bootstrap/scss/bootstrap-reboot.scss'
// import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/scss/bootstrap.scss'
// import 'bootstrap-vue/src/index.scss'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'
import '@/assets/sass/main.scss'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueSession)
Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
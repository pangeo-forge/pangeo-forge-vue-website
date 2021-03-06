import Vue from 'vue'
import VueRouter from 'vue-router'
import '@mdi/font/css/materialdesignicons.css' // <-- Just here
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

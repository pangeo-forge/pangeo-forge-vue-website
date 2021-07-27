import Vue from 'vue'
// import VueRouter from 'vue-router'
import router from './router'
import '@mdi/font/css/materialdesignicons.css' // <-- Just here
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue'

// Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

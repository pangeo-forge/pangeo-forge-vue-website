import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@mdi/font/css/materialdesignicons.css' // <-- Just here
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// const URL = (HTTPS ? 'https://' : 'http://') + HTTP_HOST + (!HTTPS && HTTP_PORT != 80 ? ':' + HTTP_PORT : '') + HTTP_PATH;
const URL = 'https://raw.githubusercontent.com/pangeo-forge/pangeo-forge-catalog/dev/stac/pangeo-forge-catalog.json'

// Vue.use(Buefy)

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: URL,
  timeout: 10000,
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

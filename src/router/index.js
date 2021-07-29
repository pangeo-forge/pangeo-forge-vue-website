import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Browse from '../components/Browse.vue'
// import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
      path: '/catalog',
      component: Browse
  }/*,
  {
    path: '*',
    component: NotFound
  }*/
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name + " - Pangeo Forge"
  }
  else {
    document.title = "Pangeo Forge"
  }
  next()
})

export default router
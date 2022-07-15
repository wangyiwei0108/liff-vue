import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import liff from '@line/liff'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async() => {
  await initLiff()
})

async function initLiff() {
  try {
    await liff.init({
      liffId: '1657303150-4EAqJbgR',
      withLoginOnExternalBrowser: true,
    })

    const { userId } = await liff.getProfile()
    // localStorage.setItem('lineToken', userId)
    console.log(userId)

    store.commit('setIsInitLiff', true)
    console.log('init yes!!@!')

  } catch(err) {
    console.log(err)
  }
}

export default router

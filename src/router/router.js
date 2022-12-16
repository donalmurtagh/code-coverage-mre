import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,

  /*
  By default, the classes "router-link-exact-active" and "router-link-active" will be added to any links to the current
  route, causing them to be displayed with a different style.

  In our case we want all links to use the same style, so disable this feature
  https://stackoverflow.com/a/46085519/2648
   */
  linkActiveClass: '',
  linkExactActiveClass: '',

  scrollBehavior (to, from, savedPosition) {
    /*
    Scroll to the element with class 'ss-selected' if it exists. Pause for 250ms to give the element enough time to be
    created https://v3.router.vuejs.org/guide/advanced/scroll-behavior.html
     */
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          selector: '.ss-selected',
          behavior: 'smooth'
        })
      }, 250)
    })
  }
})

export default router

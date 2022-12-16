import Vue from 'vue'
import router from './router/router'
import App from './app'
import vuetify from './vuetify/vuetify'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

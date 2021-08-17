import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'

import App from './App.vue'

import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

Vue.use(Vuex)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

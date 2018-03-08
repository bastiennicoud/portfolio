import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

Vue.prototype.$firebase = firebase

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

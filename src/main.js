import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
//import CCapture from 'ccapture.js'
import App from './App.vue'

Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

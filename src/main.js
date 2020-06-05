import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
//import CCapture from './CCapture.all.min.js'
import App from './App.vue'

Vue.use(VueTypedJs)
Vue.config.productionTip = false
//Object.defineProperty(Vue.prototype, '$CCapture', { value: CCapture });

new Vue({
  render: h => h(App),
}).$mount('#app')

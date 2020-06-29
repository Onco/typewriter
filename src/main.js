import Vue from 'vue'
//import VueTypedJs from 'vue-typed-js'
//import VueHtml2Canvas from 'vue-html2canvas';
//import CCapture from 'ccapture.js'
//Object.defineProperty(Vue.prototype, '$CCapture', { value: CCapture })

import App from './App.vue'

//Vue.use(VueTypedJs)
//Vue.use(VueHtml2Canvas)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
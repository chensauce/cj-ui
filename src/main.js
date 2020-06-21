import Vue from 'vue'
import App from './App.vue'
import CjUI from '../packages'
Vue.use(CjUI)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.filter("Ucase", function (val) {
  return val.toUpperCase();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

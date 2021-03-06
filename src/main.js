import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui' // element-ui
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import 'normalize.css/normalize.css' // css
import './permission.js'
import './mock'
import './icons'

Vue.use(Element, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

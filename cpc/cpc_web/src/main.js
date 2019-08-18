// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入插件
import $ from 'jquery'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(vueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

$(() => {
  let ruler = `%cWelcome %cto %ccpc %cNACG %cassociation`
  let css1 = `color:red;font-size:18px;text-shadow:4px 4px 4px #ff8e8e`
  let css2 = `color:#ff00a5;font-size:18px;text-shadow:4px 4px 4px #ff68ca`
  let css3 = `color:#a900ff;font-size:18px;text-shadow:4px 4px 4px #dd95ff`
  let css4 = `color:#5600ff;font-size:18px;text-shadow:4px 4px 4px #b084fb`
  let css5 = `color:#00adff;font-size:18px;text-shadow:4px 4px 4px #84d7ff`
  console.log(ruler, css1, css2, css3, css4, css5)
})

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
  let css1 = `color:red;font-size:20px;`
  let css2 = `color:#ff00a5;font-size:20px;`
  let css3 = `color:#a900ff;font-size:20px;`
  let css4 = `color:#5600ff;font-size:20px;`
  let css5 = `color:#00adff;font-size:20px;`
  console.log(ruler, css1, css2, css3, css4, css5)
})

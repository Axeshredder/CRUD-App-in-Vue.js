// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import Details from './components/Details'
import Edit from './components/Edit'

Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
   mode:'history',
   base:__dirname,
   routes:[
     {path:'/',component:Customers},
     {path:'/about',component:About},
     {path:'/add',component:Add},
     {path:'/details/:name',component:Details},
     {
       path:'/edit',component:Edit
     }
   ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

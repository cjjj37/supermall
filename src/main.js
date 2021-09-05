import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入toast.js中的toast
import toast from 'components/common/toast'
//导入fastclick插件
import FastClick from 'fastclick'
//导入vue-lazyload插件
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
//给事件总线初始化（添加事件总线对象）
Vue.prototype.$bus=new Vue()

//安装toast插件
Vue.use(toast)

//解决移动端300ms延迟的问题
FastClick.attach(document.body)

//安装vue-lazyload插件
Vue.use(VueLazyLoad,{
  loading:require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

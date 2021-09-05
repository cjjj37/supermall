import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//安装vuex插件
Vue.use(Vuex)

//创建vuex实例
const state= {
  cartList:[]

}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})

export default store

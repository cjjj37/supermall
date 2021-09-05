import {
  ADD_COUNTER,
  ADD_CART_LIST
} from './mutations-types'
export default {
  [ADD_COUNTER](state,payload){
      payload.count++
  },
  [ADD_CART_LIST](state,payload){
    payload.checked=true
    state.cartList.push(payload)
  }
}
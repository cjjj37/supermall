import {
  ADD_COUNTER,
  ADD_CART_LIST
} from './mutations-types'
export default {
  addCart(context,payload){
    // const oldProduct=null
    // for (let item of state.cartList)
    // {
    //   if(item.iid===payload.iid)
    //       oldProduct=item
        
    // }
    //如果cartList中已经有新传入的这个商品则 商品数量加一 ，如果没有则直接加入该商品
   return new Promise((resolve,reject ) => {
    let oldProduct= context.state.cartList.find(item => item.iid===payload.iid)
    if(oldProduct)
        {
           context.commit(ADD_COUNTER,oldProduct)
          resolve('已有商品+1')
        }
     else
    { 
      payload.count=1
      context.commit(ADD_CART_LIST,payload)
      resolve('添加新商品到购物车')
    }
    

    })
  }
}
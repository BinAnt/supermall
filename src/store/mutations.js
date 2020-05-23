import {
    CART_ADD_COUNT,
    JOIN_CART
  } from './mutation-types'

export default {
    //加入购物车
    /**
     * 这个方法可以实现购物商品的数量+1 和 添加一个商品
     * 但是基于mutation一个方法只干一件事的原则 这里需要重构代码
     * @param {*} state 
     * @param {*} payload 
     */
    // addJoinCart(state, payload) {
    //   //判断是否已经存在
    //   let oldProduct = state.cartList.find(item => item.id === payload.id)
    //   if(oldProduct) {
    //     oldProduct.count += 1;
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }
    //购物车的商品数+1
    [CART_ADD_COUNT](state, payload) {
      payload.count++
    },
    //购物车添加一条数据
    [JOIN_CART](state, payload) {
      state.cartList.push(payload)
    }
  }
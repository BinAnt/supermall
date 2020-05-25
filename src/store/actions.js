import {
  CART_ADD_COUNT,
  JOIN_CART
} from './mutation-types'

export default {
    addJoinCart({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = state.cartList.find(item => item.id === payload.id)
        if(oldProduct) {
          commit(CART_ADD_COUNT, oldProduct)
          resolve('商品数量+1')
        } else {
          payload.count = 1
          commit(JOIN_CART, payload)
          resolve('购物车新增商品')
          // state.cartList.push(payload)
        }
      })
    }
  }
import {
  CART_ADD_COUNT,
  JOIN_CART
} from './mutation-types'

export default {
    addJoinCart({ commit, state }, payload) {
      let oldProduct = state.cartList.find(item => item.id === payload.id)
      if(oldProduct) {
        commit(CART_ADD_COUNT, oldProduct)
      } else {
        payload.count = 1
        commit(JOIN_CART, payload)
        // state.cartList.push(payload)
      }
    }
  }
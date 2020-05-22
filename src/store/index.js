import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    //加入购物车
    addJoinCart(state, payload) {
      //判断是否已经存在
      let oldProduct = state.cartList.find(item => item.id === payload.id)
      if(oldProduct) {
        oldProduct.count += 1;
      } else {
        payload.count = 1
        state.cartList.push(payload)
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addToShopCart(context, payload) {
      return new Promise((resolve,reject)=>{
        let oldProduct = context.state.cartList.find(item => {
          return item.iid === payload.iid
        })
        if (oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量加1')
        } else {
          payload.count = 1
          payload.checked = true
          context.commit('addCart', payload)
          resolve('商品已添加到购物车')
        }
      })
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})

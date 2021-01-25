import { createStore } from 'vuex'

export default createStore({
  state: {
    cartlist:[]
  },
  mutations: {
    addCart(state,payload){
      payload.counter = 0
      payload.checked = false
      //是否添加了同样的产品
      let oldproduct = state.cartlist.find(item => item.iid == payload.iid)

      if(oldproduct)
        oldproduct.counter++
      else{
        payload.counter++
        state.cartlist.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

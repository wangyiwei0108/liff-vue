import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isInitLiff: false
    }
  },
  getters: {
    isInitLiff(state) {
      return state.isInitLiff
    }
  },
  mutations: {
    setIsInitLiff(state, result) {
      state.isInitLiff = result
    }
  },
  actions: {
  },
  modules: {
  }
})

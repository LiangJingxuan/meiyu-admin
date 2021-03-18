import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false
  },
  mutations: {
    // 导航折叠功能
    [types.IS_COLLAPSED](state) {
      state.collapsed = !state.collapsed
    }
  },
  actions: {
  },
  modules: {
  }
})

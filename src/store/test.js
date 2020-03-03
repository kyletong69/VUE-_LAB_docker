import Vue from 'vue'
import Vuex from 'vuex'

import websocket from './websocket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    websocket: websocket
  }
})

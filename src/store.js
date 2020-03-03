import Vue from 'vue'
import Vuex from 'vuex'

import websocket from './store/websocket'
import schedule from './store/schedule'
// import user from './store/user'
import index from './store/index'
import stat from './store/stat'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    websocket,
    schedule,
    // user,
    index,
    stat
  }
})

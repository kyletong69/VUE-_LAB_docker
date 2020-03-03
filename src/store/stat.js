import { initState } from './schedule'
export default {
  namespaced: true,
  state: {
    hotGames: []
  },
  mutations: {
    setHotGames (state, data) {
      state.hotGames = data
    }
  },
  actions: {
    init (context) {
      initState('schedule/hot').then(res => {
        context.commit('setHotGames', res.payload)
      })
    }
  }
}

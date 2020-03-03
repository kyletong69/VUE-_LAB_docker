import axios from 'axios'

export default {
  namespaced: true,
  state: {
    navigation: '',
    leagueList: [],
    leagueInfo: []
  },
  mutations: {
    init (state) {
      state.navigation = 'home'
    },
    changeNav (state, data) {
      state.navigation = data
    },
    getLeagueList (state, data) {
      state.leagueList = data
    },
    getLeagueInfo (state, data) {
      console.log(data)
      state.leagueInfo = data
    }
  },
  actions: {
    init (content) {
      content.commit('init')
    },
    changeNav (content, data) {
      content.commit('changeNav', data)
    },
    getLeagueList (content, data) {
      axios.post(`http://192.168.1.232:8787/leagueList`)
        .then(function (res) {
          content.commit('getLeagueList', res.data)
        })
      // content.commit('getLeagueList', data)
    },
    getLeagueInfo (content, data) {
      console.log(`getLeagueInfo`)
      axios.post(`http://192.168.1.232:8787/leagueInfo`, `leagueUuid=0003060eaee01e80`)
        .then(function (res) {
          content.commit('getLeagueInfo', res.data)
        })
      // content.commit('getLeagueList', data)
    }
  }
}

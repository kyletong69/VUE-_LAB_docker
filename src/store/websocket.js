export default {
  namespaced: true,
  state: {
    userInfo: [],
    msgBox: []
  },
  mutations: {
    init (state, data) {
      console.log(`websocket state : ${state}`)
      console.log(`websocket data : ${data}`)
    },
    updateUserInfo (state, data) {
      state.userInfo = data
    },
    updateMsgBox (state, data) {
      state.msgBox.push(data)
    }
  },
  actions: {
    init (content, data) {
      content.commit('init', data)
    },
    updateUserInfo (content, data) {
      content.commit('updateUserInfo', data)
    },
    updateMsgBox (content, data) {
      content.commit('updateMsgBox', data)
    }
  }
}

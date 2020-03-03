import { groupBy } from 'ramda'
const port = 'http://192.168.1.232:8787/'

/**
 * 方式 post , 不需另傳參數使用
 * @param {*} api 網址
 * @returns json
 */
export function initState (api) {
  return fetch(port + api, {
    method: 'POST'
  }).then(res => res.json())
}

export default {
  namespaced: true,
  state: {
    homeSchedule: [],
    allSchedule: [],
    schedule: [],
    scheduleStatus: '',
    fifaList: []
  },
  mutations: {
    init (state, data) {
      console.log(`state : ${state}`)
      console.log(`data : ${data}`)
    },
    setHomeSchedule (state, data) {
      state.homeSchedule = data
    },
    setFifaList (state, data) {
      state.fifaList = data
    },
    setAllScheduleList (state, data) {
      state.allSchedule = data
    },
    changeStatus (state, data) {
      console.log(`change status : ${data}`)
      state.scheduleStatus = data
    }
  },
  actions: {
    init (content, data) {
      content.commit('init', data)
      // 首頁４場熱門賽事
      initState('schedule/homePage').then(res => content.commit('setHomeSchedule', res.payload.gameList))
      // 瀏覽全部近期賽事
      initState('schedule').then(res => content.commit('setAllScheduleList', res.payload))
      initState('rank/fifa').then(res => content.commit('setFifaList', res.payload))
    },
    changeStatus (content, data) {
      content.commit('changeStatus', data)
    }
  },
  getters: {
    /**
     * 依據subtitle 分類
     */
    groupHotList: state => groupBy(it => it.subtitle, state.allSchedule),
    /**
     * 計算長度
     */
    countAllSchedule: state => state.allSchedule.length
  }
}

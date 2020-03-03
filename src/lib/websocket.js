import axios from 'axios'
import store from '@/store.js'
// import websocket from '@/store/websocket.js'
// import { mapActions } from 'vuex'
// mapActions('websocket', ['updateUserInfo'])

var ws
const beta = process.env.VUE_APP_URL
const wsUrl = process.env.VUE_APP_WS

async function openSocket () {
  console.log(`openSocket`)
  if (!ws) {
    ws = new WebSocket(wsUrl)
  }
  ws.addEventListener('message', wsmessage)
  ws.addEventListener('open', wsopen)
  ws.addEventListener('error', retryConnect)
  // ws.addEventListener('close', retryConnect)
}

function wsopen () {
  axios.post(`${beta}/token`)
    .then(function (res) {
      let loginInfo = {
        cmd: '2',
        idem: '12345',
        payload: res.data.payload
      }
      wssend(loginInfo)
    })
}

function wssend (data) {
  ws.send(JSON.stringify(data))
}

function wsmessage (e) {
  var packet = JSON.parse(e.data)
  console.log(packet)
  switch (packet.cmd) {
    case '3': onPacketTokenChange(packet); break
    case '5': onPacketPlayerEnterRoom(packet); break
    case '7': onPacketPlayerSendMsg(packet); break
    case '1001': onPacketPlayerRoomMsg(packet); break
  }
}

// let clock
let retryCount = 0
function retryConnect (e) {
  console.log('斷線' + e.code)
  console.log(`重連次數 ${retryCount}`)
  // clearInterval(clock)
  if (retryCount > 4) return
  setTimeout(() => {
    ws = new WebSocket(wsUrl)
    ws.addEventListener('open', function () {
      wsopen()
      ws.addEventListener('message', wsmessage)
      ws.addEventListener('error', retryConnect)
      // ws.addEventListener('close', retryConnect)
      retryCount++
    })
    // store.commit('initState')
  }, 2000)
}
// function connectHeart() {
//   clock = setInterval(() => {
//     let msg = {
//       cmd: '26',
//       idem: '12345',
//   }
//   ws.send(JSON.stringify(msg))
//     if (ws.readyState != 1) {
//       clearInterval(clock)
//       ws = new WebSocket(wsUrl)
//       ws.addEventListener('open', function () {
//         ws.send(JSON.stringify(loginInfo))
//         ws.addEventListener('message', wsmessage)
//         ws.addEventListener('error', retryConnect, false)
//         ws.addEventListener('close', retryConnect, false)
//       })
//     }
//   }, 30000)
// }

function closeSocket () {
  if (ws) {
    console.log(`ws close`)
    ws.close()
    ws = null
  }
}

/** @summary 03 - 登入
* @param {String} cmd 封包編號
* @param {String} result ( "ok" || "err" )
* @param {Exception} exp 錯誤訊息和代碼
* @param {String} stamp 時間戳
* @param {String} idem 供客端識別用，Server 回覆會直接返回
* @param {UserInfo} payload 用戶資訊
* @return 上方參數
*/
function onPacketTokenChange (packet) {
  store.commit('websocket/updateUserInfo', packet.payload)
  let msg = {
    cmd: '4',
    idem: '12345',
    payload: '12345678'
  }
  wssend(msg)
}

/** @summary 05 - 加入房間
* @param {String} cmd 封包編號
* @param {String} result ( "ok" || "err" )
* @param {Exception} exp 錯誤訊息和代碼
* @param {String} stamp 時間戳
* @param {String} idem 供客端識別用，Server 回覆會直接返回
* @return 上方參數
*/
function onPacketPlayerEnterRoom (packet) {
  console.log(`cmd 5`)
  let msg = {
    cmd: '6',
    idem: '12345',
    payload: {
      chatTarget: '12345678',
      Style: 'string',
      Message: 'test'
    }
  }
  wssend(msg)
}

/** @summary 07 - 發送聊天訊息
* @param {String} cmd 封包編號
* @param {String} result ( "ok" || "err" )
* @param {Exception} exp 錯誤訊息和代碼
* @param {String} stamp 時間戳
* @param {String} idem 供客端識別用，Server 回覆會直接返回
* @return 上方參數
*/
function onPacketPlayerSendMsg (packet) {
  console.log(`cmd 7`)
}

/** @summary 1001 - 房間廣播
* @param {String} cmd 封包編號
* @param {String} result ( "ok" || "err" )
* @param {Exception} exp 錯誤訊息和代碼
* @param {String} stamp 時間戳
* @param {String} idem 供客端識別用，Server 回覆會直接返回
* @param {Object} payload 訊息資訊
* @return 上方參數
*/
function onPacketPlayerRoomMsg (packet) {
  console.log(`cmd 1001`)
  store.commit('websocket/updateMsgBox', packet.payload)
}

export default {
  ws: ws,
  open () {
    openSocket()
  },
  send (msg) {
    wssend(msg)
  },
  close () {
    closeSocket()
  }
}

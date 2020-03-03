import axios from 'axios'
var ws
const beta = 'http://192.168.1.232:8787'
const wsUrl = 'ws://192.168.1.232:7878/echo'

async function openSocket (onopen, onmessage, onerror, onclose) {
  if (!ws) {
    ws = new WebSocket(wsUrl)
  }
  ws.onopen = onopen || wsopen()
  ws.onmessage = onmessage || onMessage()
  ws.onerror = onerror || retryConnect()
  ws.onclose = onclose || retryConnect()
}

function wsopen () {
  console.log(`ws : ${ws.readyState}`)
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
  console.log(ws)
  ws.send(JSON.stringify(data))
}

function onMessage (e) {
  console.log(e)
  if (!e) return
  var packet = JSON.parse(e.data)
  console.log(packet)
  switch (packet.cmd) {
    case '3': onPacketTokenChange(packet); break
    case '5': onPacketPlayerEnterRoom(packet); break
    case '7': onPacketPlayerSendMsg(packet); break
  }
}

// let clock
let retryCount = 0
function retryConnect (e) {
  if (!e) return
  console.log('斷線' + e.code)
  console.log(`重連次數 ${retryCount}`)
  // clearInterval(clock)
  if (retryCount > 4) return
  setTimeout(() => {
    ws = new WebSocket(wsUrl)
    wsopen()
    ws.onmessage = onmessage || onMessage()
    ws.onerror = onerror || retryConnect()
    ws.onclose = onclose || retryConnect()
    retryCount++
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
  console.log(packet)
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
  console.log(packet)
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
  console.log(packet)
}

export default {
  ws: ws,
  open (onopen, onmessage, onerror, onclose) {
    openSocket(onopen, onmessage, onerror, onclose)
  },
  send () {
    wssend()
  },
  close () {
    closeSocket()
  }
}

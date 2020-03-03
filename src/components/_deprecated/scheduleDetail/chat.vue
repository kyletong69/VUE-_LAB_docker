<template>
  <div class="chat">
    <div class="chat__content">
      <div class="message">
        <div class="date">{{date}}</div>
        <ul>
          <li v-for="(item, index) in msgBox" :class="{'self': item.chatMessage.from.userUuid === userInfo.userUuid}" :key="index">
            <!-- <div v-if="['open', 'close'].indexOf(item.chatMessage.style) > -1" class="system">{{item.chatMessage.user}} {{item.chatMessage.msg}}</div> -->
            <img :src="getImg(item.chatMessage.style)" :class="{'system': item.chatMessage.style === 'sys'}" alt="icon">
            <div class="message__info">
              <!-- <div v-if="item.chatMessage.uuid !== '123'" class="user">{{item.chatMessage.nickname}}</div> -->
              <div class="msgBox">
                <div v-if="item.chatMessage.style === 'sys'" class="msgBox__text">
                  <!-- <div class="system"><p>{{item.chatMessage.nickname}}</p> {{item.chatMessage.msg}}</div> -->
                  <div class="system"><p>{{item.chatMessage.from.userUuid}}</p> {{item.chatMessage.message}}</div>
                </div>
                <div v-else class="msgBox__text">
                  <!-- <div v-if="item.chatMessage.from.userUuid !== userUuid" class="user"><p>{{item.chatMessage.nickname}}</p> {{item.chatMessage.msg}}</div> -->
                  <div v-if="item.chatMessage.from.userUuid !== userInfo.userUuid" class="user"><p>{{item.chatMessage.from.userUuid}}</p> {{item.chatMessage.message}}</div>
                  <p v-else>{{item.chatMessage.message}}</p>
                </div>
                <span>{{getTime(parseInt(item.chatMessage.stamp))}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="chat__footer">
      <input type="text" @keypress.enter="send('string', message)" v-model="message">
      <!-- <img src="@/assets/img/chatroom/emoji.svg" alt="emoji"> -->
      <img @click="send('string', message)" src="@/assets/img/send.png" alt="">
    </div>
  </div>
</template>

<script>
import ws from '@/lib/websocket'
import { mapState } from 'vuex'
export default {
  name: 'chat',
  components: {},
  props: {
    scheduleStatus: String
  },
  data () {
    return {
      weekday: {
        0: '(日)',
        1: '(一)',
        2: '(二)',
        3: '(三)',
        4: '(四)',
        5: '(五)',
        6: '(六)'
      },
      date: '',
      message: '',
      msgBox1: [
        { uuid: '111', nickname: '管理員', type: 'system', msg: '比赛马上开始哦！', time: '10:00:00' },
        { uuid: '3345678', nickname: '機器人', type: 'msg', msg: '123', time: '10:00:00' },
        { uuid: '3345678', nickname: '機器人', type: 'msg', msg: '123', time: '10:01:00' },
        { uuid: '3345678', nickname: '機器人', type: 'msg', msg: '123', time: '10:02:00' },
        { uuid: '123', nickname: '測試', type: 'msg', msg: '測試用', time: '10:03:00' },
        { uuid: '3345678', nickname: '機器人', type: 'msg', msg: '主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主', time: '10:04:00' },
        { uuid: '3345678', nickname: '機器人', type: 'msg', msg: '123', time: '10:05:00' },
        { uuid: '123', nickname: '測試', type: 'msg', msg: '主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主场必胜！主', time: '10:06:00' }
      ]
    }
  },
  computed: {
    ...mapState('websocket', ['userInfo', 'msgBox'])
  },
  methods: {
    send (type, text) {
      // let user = (this.username) ? this.username : '測試'
      // let d = new Date()
      // let h = this.checkTime(d.getHours())
      // let m = this.checkTime(d.getMinutes())
      // let s = this.checkTime(d.getSeconds())
      // let data = {
      //   uuid: '123',
      //   user: user,
      //   type: type,
      //   msg: text,
      //   time: `${h}:${m}:${s}`
      // }
      // // this.socket.emit('message', data)
      // this.msgBox.push(data)
      let msg = {
        cmd: '6',
        idem: '12345',
        payload: {
          chatTarget: '12345678',
          Style: type,
          Message: text
        }
      }
      ws.send(msg)
      this.message = ''
    },
    getTime (t) {
      let d = new Date(t)
      let h = this.checkTime(d.getHours())
      let m = this.checkTime(d.getMinutes())
      return `${h}:${m} ${(h > 12) ? 'PM' : 'AM'}`
    },
    // 日期&時間補到兩位數用
    checkTime (time) {
      if (time < 10) {
        time = `0${time}`
      }
      return time
    },
    /** @summary 抓 img
    * @param {string} type 判斷是否為系統
    * @return img path
    */
    getImg (type) {
      if (type === 'sys') {
        return `${require(`@/assets/img/Logo.png`)}`
      } else {
        return 'https://picsum.photos/30/30'
      }
    }
  },
  mounted () {
    console.log(this.userInfo)
    console.log(this.msgBox)
    console.log(`chat : ${this.scheduleStatus}`)
    this.date = `${new Date().getMonth() + 1} / ${new Date().getDate()} ${this.weekday[new Date().getDay()]}`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/color.scss";
.chat {
  height: 100%;
  &__content {
    padding: 10px 0;
    height: calc(100% - 40px);
    background: $ereie-black;
    overflow-x: auto;
    .date {
      @include text(12px, normal);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px auto;
      width: 88px;
      height: 20px;
      color: $white;
      border-radius: 11.5px;
      background: $charlestion-green-1;
    }
    .message {
      li {
        display: flex;
        align-items: flex-end;
        padding: 10px 0;
        img {
          margin: 0 10px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          &.system {
            border: 2px solid $corn;
          }
        }
        &.self {
          flex-direction: row-reverse;
          .msgBox {
            flex-direction: row-reverse;
            &__text {
              background: $white-06;
            }
          }
        }
      }
      &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 0 1 75%;
        text-align: left;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .msgBox {
        display: flex;
        align-items: flex-end;
        &__text {
          @include text(13px, normal);
          display: flex;
          padding: 5px;
          border-radius: 5px;
          background: $raisin-black;
          line-height: 18px;
        }
        p, .user {
          display: inline-block;
          color: $white;
        }
        .user {
          p {
            color: $dodger-blue;
          }
        }
        .system {
          color: $carnation-pink;
          p {
            color: $corn;
          }
        }
        // p {
        //   @include text(13px, normal);
        //   padding: 5px;
        //   color: $white;
        //   border-radius: 5px;
        //   background: $white-06;
        // }
        span {
          margin: 0 5px;
          flex: 0 0 55px;
          color: $taupe-gray;
          font-size: 12px;
          transform: scale(0.83) perspective(1px);
        }
      }
    }

  }
  &__footer {
    display: flex;
    align-items: center;
    height: 40px;
    // border-top: 1px solid gray;
    background: $charlestion-green-2;
    input {
      @include text(12px, normal);
      margin: 0 10px;
      padding: 6px 20px;
      flex: 1 1 auto;
      height: 28px;
      border-radius: 5px;
      border: none;
      background: $white-06;
      outline: none;
      box-sizing: border-box;
    }
    img {
      margin-right: 10px;
      width: 16px;
      // height: px;
    }
  }
}
</style>

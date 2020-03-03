<template>
  <div class="lineups">
    <div v-if="!checkStatus()"  class="lineups__content">
      <div class="lineups__Formation">
        <div class="title">
          <img src="@/assets/img/startLineups.png" alt="">
          首發陣容
        </div>
        <div class="lineups__Formation__info" v-for="(item, index) in lineupsList" :key="index">
          <div class="team">{{item.home_formation}}</div>
          <ul class="court" ref="court">
            <img class="court-img" src="~@/assets/img/court.png" alt="">
            <li v-for="(player, index) in item.home" :style="setPos(player)" :key="index">
              <img :src="getImg(player.logo)" alt="icon">
              {{player.name}}
            </li>
          </ul>
          <div class="team">{{item.away_formation}}</div>
        </div>
      </div>
      <div class="lineups__change">
        <div class="title">
          <img src="@/assets/img/changePlayer.png" alt="">
          本场换人
        </div>
        <table class="lineups__change__table" v-for="(item, index) in changeList" :key="index">
          <thead class="team">
            <img src="https://picsum.photos/50/50" alt="icon">
            {{item.team}}
          </thead>
          <tbody>
            <tr v-for="(desc, index) in item.info" :key="index">
              <td class="player">
                <img src="https://picsum.photos/20/20" alt="icon">
                {{desc.up}}
              </td>
              <td><img src="@/assets/img/change.png" alt="change"></td>
              <td class="player">
                <img src="https://picsum.photos/20/20" alt="icon">
                {{desc.down}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="lineups__sub">
        <div class="title">
          <img src="@/assets/img/subPlayer.png" alt="">
          本场替补
        </div>
        <ul v-for="(item, index) in subList" :key="index">
          <div class="team">
            <img src="https://picsum.photos/50/50" alt="icon">
            {{item.team}}
          </div>
          <li v-for="(desc, index) in item.info" :key="index">
            <div class="player">
              <img src="https://picsum.photos/20/20" alt="icon">
              {{desc.player}}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="lineups__content noStart"><p>双方阵容预计在赛前半小时公布，请稍后再来。</p></div>
  </div>
</template>

<script>
import { lineups } from '@/lib/faker'
export default {
  name: 'lineups',
  components: {},
  props: {
    scheduleStatus: String
  },
  data () {
    return {
      lineupsList: [],
      court: '',
      changeList: [
        { team: '广州富力',
          teamIcon: '',
          info: [
            { up: 'Miriam de Jesús', upIcon: '', down: 'Mariano Rasgado', downIcon: '' },
            { up: 'Mariano Rasgado', upIcon: '', down: 'Phakamile Sikali', downIcon: '' },
            { up: 'H·Popadiyn', upIcon: '', down: 'H·Popadiyn', downIcon: '' }
          ]
        },
        { team: '重庆斯威',
          teamIcon: '',
          info: [
            { up: 'Phakamile Sikali', upIcon: '', down: 'Miriam de Jesús', downIcon: '' },
            { up: 'H·Popadiyn', upIcon: '', down: 'Mariano Rasgado', downIcon: '' },
            { up: 'Phakamile Sikali', upIcon: '', down: 'H·Popadiyn', downIcon: '' }
          ]
        }
      ],
      subList: [
        { team: '广州富力',
          info: [
            { player: 'H·Popadiyn', playerIcon: '' },
            { player: 'H·Popadiyn', playerIcon: '' },
            { player: 'H·Popadiyn', playerIcon: '' }
          ]
        },
        { team: '重庆斯威',
          info: [
            { player: 'H·Popadiyn', playerIcon: '' },
            { player: 'H·Popadiyn', playerIcon: '' },
            { player: 'H·Popadiyn', playerIcon: '' }
          ]
        }
      ]
    }
  },
  updated () {
    this.court = this.$refs.court[0]
  },
  methods: {
    /** @summary 判斷 store scheduleStatus
    * @return 未開賽 => true, 已開賽、已結束 => false, 之後參數改英文
    */
    checkStatus () {
      if (this.scheduleStatus === '未開賽') return true
      return false
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    init () {
      let team = []
      let name = {
        0: '罗马',
        1: '塞帕罕',
        2: '布雷西亚',
        3: '谢菲尔德联',
        4: '门兴格拉德巴赫',
        5: 'AC米兰'
      }
      for (var i = 0; i < 10; i++) {
        team.push({
          id: '',
          frist: '',
          name: name[i % 5],
          logo: this.getRandomInt(10, 120),
          shirt_number: '',
          position: '',
          x: this.getRandomInt(0, 100),
          y: this.getRandomInt(0, 100),
          rating: '',
          incidents: []
        })
      }
      this.lineupsList.push({
        confirmed: 1,
        home_formation: '4-2-3-1',
        away_formation: '4-2-3-1',
        home: team,
        away: team
      })
      console.log(this.lineupsList)
    },
    /** @summary 抓 img
    * @param {string} url img 檔名
    * @return img path
    */
    getImg (url) {
      if (url === '') return
      // return `${require(`@/assets/img/teamLogo/asset ${url}.png`)}`
      return `http://cdn.sportnanoapi.com/football/player/${url}`
    },
    setPos (pos) {
      // NOTE 定位後還需位移自身一半的寬度置中
      if (pos.first === 0) return `display: none;`
      let courtWidth = this.court.offsetWidth
      let courtHeight = this.court.offsetHeight
      let x = courtWidth * (pos.x / 100)
      let y = (courtHeight / 2) * (pos.y / 100)
      return `top: ${Math.round(y)}px; left: ${Math.round(x)}px;`
      // let court = document.body.getElementsByClassName('court')
      // if (court.length === 0) return
      // console.log(this.$refs.court)
      // this.$nextTick(() => {
      //   // this.$forceUpdate()
      //   let courtWidth = this.$refs.court[0].offsetWidth
      //   let courtHeight = this.$refs.court[0].offsetHeight
      //   console.log(`width : ${courtWidth}`)
      //   console.log(`height : ${courtHeight}`)
      //   let x = courtWidth * (pos.x / 100)
      //   let y = (courtHeight / 2) * (pos.y / 100)
      //   console.log(`top: ${Math.round(x)}px; left: ${Math.round(y)}px;`)
      //   // return `top: ${Math.round(x)}px; left: ${Math.round(y)}px;`
      //   return `color: black;`
      // })
      // let courtWidth = court.offsetWidth
      // let courtHeight = court.offsetHeight
      // console.log(`width : ${courtWidth}`)
      // console.log(`height : ${courtHeight}`)
    }
  },
  mounted () {
    this.lineupsList = lineups
    console.log(lineups)
    console.log(`lineups : ${this.scheduleStatus}`)
    // this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/color.scss";
.lineups {
  height: 100%;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 10px 0;
  }
  .title {
    @include text(17px, 600);
    display: flex;
    align-items: center;
    padding: 15px 0px;
    width: 100%;
    color: $white;
    img {
      margin-right: 5px;
      height: 20px;
    }
    // &::before {
    //   content: '';
    //   display:block;
    //   width: 10px;
    //   height: 20px;
    //   border-left:2px solid red;
    // }
  }
  .team {
    display: flex;
    align-items: center;
    padding: 10px 0;
    img {
      margin-right: 10px;
      border-radius: 50%;
    }
  }
  .player {
    @include text(12px, normal);
    display: flex;
    align-items: center;
    padding: 10px 15px;
    flex: 1 0 40%;
    color: $white;
    img {
      margin-right: 5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
  // .playerIcon {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   margin-right: 10px;
  //   width: 35px;
  //   height: 35px;
  //   border-radius: 50%;
  // }
  &__Formation {
    padding: 0 10px;
    .court-img {
      width: 100%;
    }
    ul {
      position: relative;
      // width: 400px;
      // height: 400px;
      // background-image: url("~@/assets/img/court.png");
      // background-size: cover;
      // background-repeat: no-repeat;
    }
    li {
      position: absolute;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  &__content {
    height: 100%;
    overflow: auto;
  }
  &__change {
    padding: 0 10px;
    // border-top: 1px solid gray;
    // border-bottom: 1px solid gray;
    table {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
      width: 100%;
      border-radius: 10px;
      border: 1px solid $white-06;
      background: $white-06;
    }
    .team {
      @include text(17px, 600);
      margin: 0 15px;
      color: $white;
      border-bottom: 1px solid $white-06;
      img {
        width: 28px;
        height: 28px;
      }
      // border: 1px solid gray;
    }
    tr {
      display: flex;
      align-items: center;
      td {
        &:nth-child(2) {
          flex: 0 1 20%;
        }
      }
    }
    // .changeIcon {
    //   padding: 2px;
    //   color: white;
    //   border-radius: 2px;
    //   background: red;
    // }
  }
  &__sub {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px 10px;
    .team {
      @include text(15px, 600);
      padding: 8px 15px;
      color: $white;
      border-bottom: 1px solid $white-06;
      img {
        margin-right: 5px;
        width: 20px;
        height: 20px;
      }
    }
    ul {
      width: 50%;
      // NOTE first-child 沒反應，要用 nth-child(2)，找時間解
      // &:first-child {
      //   border-top-left-radius: 10px;
      //   border-bottom-left-radius: 10px;
      //   border: 1px solid $white-06;
      //   border-right-width: 0px;
      // }
      &:nth-child(2) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: 1px solid $white-06;
        border-right-width: 0px;
      }
      &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 1px solid $white-06;
        .team, .player {
          display: flex;
          flex-direction: row-reverse;
        }
        img {
          margin-right: 0px;
          margin-left: 5px;
        }
      }
      // border: 1px solid gray;
    }
  }
  .noStart {
    margin: 200px 0;
    p {
      @include text(12px, normal);
      display: flex;
      align-items: center;
      justify-content: center;
      color: $white;
      &::before {
        content: url("~@/assets/img/talk.png");
        margin-right: 10px;
      }
    }
  }
}
</style>

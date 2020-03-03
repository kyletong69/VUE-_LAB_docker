<template>
  <div class="subscribe">
    <div class="subscribe__header">
      <div class="title">请选择您的主队</div>
      <div class="nextStep">
        <p @click="back" v-if="selectTeam.length === 0">skip <img src="@/assets/img/arrow-right.png" alt=""></p>
        <p @click="save" v-else style="color: #FDF064">Done</p>
      </div>
    </div>
    <div class="subscribe__content">
      <div class="subscribe__content__leagueList">
        <li v-for="(item, index) in leagueTEST"
          :key="index"
          :class="{'active': item.LeagueCore.leagueUuid === league}"
          @click="changeLeague(item.LeagueCore.leagueUuid, item.teamCount)">
          <p>{{item.LeagueCore.leagueName}} ({{item.teamCount}})</p>
        </li>
      </div>
      <div v-if="infoTEST.length !== 0" class="subscribe__content__leagueInfo">
        <!-- <li v-for="(item, index) in leagueInfo.payload.teamList" -->
        <li v-for="(item, index) in infoTEST[0].teamList"
          :key="index">
          <input type="checkbox" name="tag" :id="`team-tag-${item.teamUuid}`"
              :value="item"
              v-model="selectTeam" />
          <label :for="`team-tag-${item.teamUuid}`">
            <div class="logo">
              <img :src="getImg(item.icon)" alt="icon">
            </div>
            {{item.name}}
          </label>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import * as R from 'ramda'
import { setCookie } from '@/lib/cookie'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'subscribe',
  data () {
    return {
      leagueTEST: [
        { teamCount: 21, LeagueCore: { leagueUuid: '0003060eaee01e80', leagueName: '熱門', leagueIcon: '' } },
        { teamCount: 23, LeagueCore: { leagueUuid: '0003060eaee01e81', leagueName: '中超', leagueIcon: '' } },
        { teamCount: 42, LeagueCore: { leagueUuid: '0003060eaee01e82', leagueName: '英超', leagueIcon: '' } },
        { teamCount: 34, LeagueCore: { leagueUuid: '0003060eaee01e83', leagueName: '意甲', leagueIcon: '' } },
        { teamCount: 52, LeagueCore: { leagueUuid: '0003060eaee01e84', leagueName: '西甲', leagueIcon: '' } },
        { teamCount: 37, LeagueCore: { leagueUuid: '0003060eaee01e85', leagueName: '德甲', leagueIcon: '' } },
        { teamCount: 57, LeagueCore: { leagueUuid: '0003060eaee01e86', leagueName: '法甲', leagueIcon: '' } },
        { teamCount: 32, LeagueCore: { leagueUuid: '0003060eaee01e87', leagueName: '國家隊', leagueIcon: '' } }
      ],
      league: '0003060eaee01e80',
      infoTEST: [],
      selectTeam: []
    }
  },
  computed: {
    ...mapState('index', ['navigation', 'leagueList', 'leagueInfo'])
  },
  methods: {
    ...mapActions('index', ['getLeagueList', 'getLeagueInfo']),
    back () {
      console.log(`nav : ${this.navigation}`)
      this.$router.go(-1)
    },
    save () {
      setCookie('subscribe', true, 18000000)
      this.back()
    },
    changeLeague (val, count) {
      this.league = val
      this.getTEST(val, count)
    },
    /** @summary 抓 img
    * @param {string} url img 檔名
    * @return img path
    */
    getImg (url) {
      if (url === '') return
      return `${require(`@/assets/img/teamLogo/asset ${url}.png`)}`
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getTEST (uuid, count) {
      let team = {
        0: '罗马',
        1: '塞帕罕',
        2: '布雷西亚',
        3: '谢菲尔德联',
        4: '门兴格拉德巴赫',
        5: 'AC米兰'
      }
      let teamList = []
      this.infoTEST = []
      // this.infoTEST.push({
      //   LeagueCore: {
      //     leagueUuid: uuid,
      //     leagueName: '',
      //     leagueIcon: ''
      //   },
      //   teamList: []
      // })
      for (var i = 0; i < count; i++) {
        teamList.push({
          teamUuid: `0003060eaee01e${i + 10}`,
          name: team[i % 5],
          icon: this.getRandomInt(10, 120)
        })
      }
      this.infoTEST.push({
        LeagueCore: {
          leagueUuid: uuid,
          leagueName: '',
          leagueIcon: ''
        },
        teamList: teamList
      })
      console.log(this.infoTEST)
    }
  },
  mounted () {
    if (this.leagueList.length === 0) {
      this.getLeagueList()
    }
    if (this.leagueInfo.length === 0) {
      this.getLeagueInfo()
    }
    // axios.post(`http://192.168.1.232:8787/leagueList`)
    //   .then(function (res) {
    //     console.log(res.data)
    //   })
    console.log(this.leagueTEST)
    // let match = R.filter(n => n.leagueUuid === this.league, this.leagueTEST.map(it => it['LeagueCore']))
    // console.log(match)
    this.getTEST(this.league, 21)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';
@import '@/assets/scss/fonts.scss';
.subscribe {
  &__header {
    @include text(17px, normal);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 54px;
    background: $black-chocolate;
    .title {
      margin-left: 42px;
      width: calc(100% - 62px);
      color: $white;
    }
    .nextStep {
      p {
        width: 42px;
        color: $white-30;
      }
    }
  }
  &__content {
    display: flex;
    &__leagueList {
      display: flex;
      flex-direction: column;
      width: 100px;
      height: calc(100vh - 54px);
      background-color: $charlestion-green;
      box-shadow: 0 2px 3px 0 $jet;
      li {
        @include text(12px, normal);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 52px;
        color: $white;
        &.active {
          background: $ereie-black;
          // p {
          //   padding-bottom: 5px;
          //   border-bottom: 2px solid $dodger-blue;
          // }
          &::after {
            content: '';
            display: block;
            margin: 5px auto;
            width: 60px;
            border-bottom: 2px solid $dodger-blue;
          }
        }
      }
      p {
        color: $white;
      }
    }
    &__leagueInfo {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: calc(100vh - 54px);
      background-color: $ereie-black;
      overflow-x: auto;
      li {
        margin: 10px 0;
        flex: 0 1 33%;
        height: 60px;
        @include text(12px, normal);
      }
      input {
        display: none;
      }
      input:checked + label {
        opacity: 1;
        .logo {
          position: relative;
          border: 3px solid $blue-jeans;
          background: $white;
          &::after {
            content: url("~@/assets/img/check.png");
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: -3px;
            right: -7px;
            width: 19px;
            height: 19px;
            // top: -5px;
            // right: -8px;
            // color: white;
            // border-radius: 50%;
            // background: $dodger-blue;
          }
        }
      }
      label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $white;
        opacity: 0.48;
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: $white-67;
        }
        img {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
}
</style>

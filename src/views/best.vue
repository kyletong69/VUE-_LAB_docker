<template>
  <div class="best">
    <div class="banner">
      <header class="banner-header">
        <div class="back-btn" @click.prevent="backPage">
          <i class="material-icons">arrow_back_ios</i>
          <span>back</span>
        </div>
        <div class="character">
          <figure>
            <img src="https://picsum.photos/200/300" alt="icon">
          </figure>
          <h2 v-if="type==='integral'">世界杯</h2>
          <h2 v-else-if="type==='team'">比利时</h2>
          <h2 v-else>球元</h2>
        </div>
      </header>
      <nav class="page-group">
        <ul>
          <li class="page-btn"
          :class="{active: index === activeIndex}"
          v-for="(item,index) in setList" :key="index">
            <a href="javascript:;" @click.prevent="changeTabs(item.router, item.tag, index)">{{item.tag}}</a>
            <!-- <router-link v-if="item.query"
            :to="{'path':item.router, query: { name : item.query }}">{{item.tag}}</router-link>
            <router-link v-else :to="item.router">{{item.tag}}</router-link> -->
          </li>
        </ul>
      </nav>
    </div>
    <!-- <router-view :key="$route.fullPath" /> -->
    <component :is="componentId" :tag="tag" />
  </div>
</template>

<script>
import points from '../components/integral/points'
import match from '../components/integral/match'
import teamInfo from '../components/bestTeam/teamInfo'
import teamRanking from '../components/bestTeam/teamRanking'
import teamMatch from '../components/bestTeam/teamMatch'
import teamLineups from '../components/bestTeam/teamLineups'
import playerInfo from '../components/bestPlayer/playerInfo'
import playerAnalysis from '../components/bestPlayer/playerAnalysis'
import playerMatch from '../components/bestPlayer/playerMatch'
import dataList from '../components/share/dataList'
export default {
  name: 'best', // 上下頁面使用
  components: {
    points,
    match,
    teamInfo,
    teamRanking,
    teamMatch,
    teamLineups,
    playerInfo,
    playerAnalysis,
    playerMatch,
    dataList
  },
  data () {
    return {
      type: '',
      componentId: '',
      tag: '',
      activeIndex: 0,
      typeList: ['integral', 'player', 'team'],
      typeIndexPage: ['points', 'playerInfo', 'teamInfo'],
      playerList: [
        {
          tag: '基本信息',
          router: 'playerInfo',
          query: ''
        },
        {
          tag: '技术统计',
          router: 'playerAnalysis',
          query: ''
        },
        {
          tag: '比赛',
          router: 'playerMatch',
          query: ''
        }
      ],
      teamList: [
        {
          tag: '基本信息',
          router: 'teamInfo',
          query: ''
        },
        {
          tag: '积分榜',
          router: 'teamRanking',
          query: ''
        },
        {
          tag: '比赛',
          router: 'teamMatch',
          query: ''
        },
        {
          tag: '阵容',
          router: 'teamLineups',
          query: ''
        },
        {
          tag: '最佳球员',
          router: 'dataList',
          query: ''
        }
      ],
      integralList: [
        {
          tag: '积分榜',
          router: 'points',
          query: ''
        },
        {
          tag: '比赛',
          router: 'match',
          query: ''
        },
        {
          tag: '最佳球员',
          router: 'dataList',
          query: 'player'
        },
        {
          tag: '最佳球队',
          router: 'dataList',
          query: 'team'
        }
      ]
    }
  },
  computed: {
    setList: function () {
      return this.type === 'player' ? this.playerList : this.type === 'team' ? this.teamList : this.integralList
    }
  },
  methods: {
    setType: function () {
      this.type = this.$route.query.type
    },
    backPage: function () {
      this.$router.back()
    },
    changeTabs: function (tab, tag, index) {
      this.componentId = tab
      this.tag = tag
      this.activeIndex = index
    }
  },
  mounted () {
    this.setType() // 進入頁面時需帶type參數
  },
  watch: {
    '$route.path': function (val, old) { // 避免跳頁時未抓取type
      if (val.split('/')[1] !== old.split('/')[1]) this.setType()
    },
    type: function (val) {
      let index = this.typeList.indexOf(val)
      this.componentId = this.typeIndexPage[index]
      this.activeIndex = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.best{
  .banner{
    .banner-header{
      padding: 20px 10px;
      width: 100%;
      box-sizing: border-box;
      background-color: #131415;
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      .back-btn{
        width: 60px;
        padding: 3px 0;
        cursor: pointer;
        i{
          font-size: 12px;
        }
        i,span{
          color: #399FFF;
        }
      }
      .character{
        width: 30%;
        margin: 0 35% 0 calc( 35% - 60px);
        @include imgObjectFit(60px);
        figure{
          margin:0 auto 5px;
        }
        h2{
          font-size: 22px;
          color: $white;
        }
      }
    }
    .page-group{
      background-color: #131415;
      padding: 10px;
      box-sizing: border-box;
      ul{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        .page-btn{
          a{
            color: $white-30;
          }
          &:hover{
            a{
              text-decoration: underline;
              color: $white;
            }
          }
          .router-link-exact-active{
            text-decoration: underline;
          }
        }
        .active{
          a{
            color: $white;
          }
        }
      }
    }
  }
}
</style>

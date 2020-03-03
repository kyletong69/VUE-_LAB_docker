<template>
  <router-link to="/scheduleDetail/" tag="li" class="matchItem">
    <div class="stage-item-header">
      <figure>
        <img src="@/assets/img/video.png" alt="icon">
      </figure>
      <p>{{setDate}}</p>
      <div class="follow-btn">
        <i class="material-icons">{{setFollow}}</i>
      </div>
    </div>
    <div class="stage-item-body">
      <div class="team-item">
        <figure class="team-info">
          <img :src="cdn+guestTeamUuid+'.png'" alt="icon">
        </figure>
        <p>松本山雅ＦＣ</p>
      </div>
      <div class="game-info" :class="matchState">
        <p class="game-info-point" v-if="matchState !== 'notPlay'">{{homeScore}}－{{guestScore}}</p>
        <p class="game-info-playing" v-if="matchState === 'playing'">进行中</p>
        <template v-if="matchState === 'notPlay'">
          <p class="game-info-vs">V.S</p>
          <p class="game-info-time">14:55開球</p>
        </template>
      </div>
      <div class="team-item">
        <figure class="team-info">
          <img :src="cdn+homeTeamUuid+'.png'" alt="icon">
        </figure>
        <p>松本山雅ＦＣ</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { formatData } from '@/lib/formatDate'
export default {
  name: 'matchItem',
  props: {
    matchState: {
      tpye: String,
      default: 'played'
    },
    // 是否關注
    followed: {
      tpye: Boolean,
      default: false
    },
    homeScore: {
      tpye: Number,
      default: 0
    },
    guestScore: {
      tpye: Number,
      default: 0
    },
    guestTeamUuid: {
      tpye: String,
      default: '00030649f3a01e81'
    },
    homeTeamUuid: {
      tpye: String,
      default: '00030649f3a01e80'
    },
    startTime: {
      tpye: Number
    }
  },
  data () {
    return {
      // 未開始 開始
      state: true,
      // 星星樣式 => 未關注 , 關注
      followStar: ['star_border', 'star'],
      // 比賽狀態 playing => 進行中 notPlay => 尚未開始 played => 已結束
      matchStateList: ['playing', 'notPlay', 'played'],
      // 根據比賽狀態使用的class名稱 playing => 進行中 notPlay => 尚未開始 played => 已結束
      // 未來使用狀態找class名稱
      matchStateClass: ['playing', 'notPlay', 'played'],
      cdn: process.env.VUE_APP_CDN
    }
  },
  computed: {
    /**
     * @returns googleicon 圖標名稱
     */
    setFollow: function () {
      return this.followed ? this.followStar[1] : this.followStar[0]
    },
    setDate () {
      return formatData(this.startTime, 'ymd', '/', '週')
      // let time = new Date(this.startTime)
      // return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} 週${time.getDay() + 1}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
p,span,div{
  color: #fff;
}
.matchItem{
  background-color: $ereie-black;
  border: 1px solid $white-6;
  border-radius: 10px;
  margin-bottom: 5px;
  .stage-item-header{
    background-color: $white-6;
    border-bottom: 1px solid $white-6;
    padding:5px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    @include imgObjectFit(20px);
    figure{
      margin: 0;
      img{
        border-radius: 0;
      }
    }
    p{
      font-size: 15px;
      line-height: 20px;
      color: $white;
    }
    .follow-btn{
      margin-left: auto;
      cursor: pointer;
      i{
        color: #FDF064;
      }
    }
  }
  .stage-item-body{
    padding: 15px 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    .game-info{
      .game-info-time{
        font-size: 12px;
        color: #FDF064;
      }
      .game-info-point{
        font-size: 28px;
        line-height: 1.5;
        font-weight: bold;
        color: rgba(255,255,255,0.48);
      }
      .game-info-playing{
        font-size: 12px;
        color: #CB2525;
      }
      .game-info-vs{
        font-size: 28px;
        line-height: 1.5;
      }
    }
    .playing{
      .game-info-point{
        color: #7ED3F9;
      }
    }
    .team-item{
      @include imgObjectFit(35px);
      figure{
        margin:0 auto 5px;
      }
      p{
        font-size: 12px;
        line-height: 1.5;
      }
    }
  }
}
</style>

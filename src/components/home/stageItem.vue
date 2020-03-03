<template>
<router-link to="/scheduleDetail/" class="stageItem" tag="div">
  <div class="item-header">
    <span class="spot" :class="{active : state}"></span>
    <h5 class="title van-ellipsis">{{subtitle}}</h5>
    <span class="state" v-if="state">
      <img src="@/assets/img/live.png" alt="live">
    </span>
    <div class="time" v-else>
      <p>06/29</p>
      <p>17:00</p>
    </div>
  </div>
  <div class="stage-item-body">
    <div class="team-item">
      <figure class="team-item-icon">
        <img :src="cdn+guestTeamUuid+'.png'" alt="icon">
      </figure>
      <div class="team-item-name">松本山雅FC</div>
    </div>
    <div class="team-item">
      <figure class="team-item-icon">
        <img :src="cdn+homeTeamUuid+'.png'" alt="icon">
      </figure>
      <div class="team-item-name">大阪钢巴</div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  name: 'stageItem',
  props: {
    subtitle: String,
    guestTeamUuid: {
      tpye: String,
      default: '00030649f3a01e81'
    },
    homeTeamUuid: {
      tpye: String,
      default: '00030649f3a01e80'
    }
  },
  data () {
    return {
      live: true,
      state: true,
      cdn: 'http://192.168.1.232/cdn/teamIcon/'
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
@import '@/assets/scss/transition';
.stageItem{
  background-color: $white-6;
  border: 1px solid $white-6;
  border-radius: 10px;
  box-sizing: border-box;
  padding:0 5px;
  cursor: grab;
  .item-header{
    padding: 5px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid $white-6;
    position: relative;
    .spot{
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      right: 0;
      top: 25%;
      background-color: rgba(255,255,255,0.57);
    }
    .active{
      background-color: #f00;
      animation: spotLight 1.5s infinite alternate;
    }
    .time{
      margin: 0 10px 0 0;
      p{
        color: #8B8B8B;
        font-size: 10px;
      }
    }
    .title{
      color: $white;
      font-weight: bold;
      font-size: 17px;
      line-height: 1.5;
      font-family: "PingFang SC";
    }
    .state{
      color: $white;
    }
  }
  .stage-item-body{
    .team-item{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      padding: 5px 0;
      @include imgObjectFit(20px);
      .team-item-icon{
      }
      .team-item-name{
        color: $white;
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
}
</style>

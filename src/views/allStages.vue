<template>
  <div class='allStages'>
    <div class="header-area">
      <div class="backHeader">
        <van-row>
          <van-col span="4" class="back-btn" @click="backPage">
            <i class="material-icons">arrow_back_ios</i>
            <span>back</span>
          </van-col>
          <van-col span="10" offset="3">
            <h3 class="title">{{today}}比賽賽事({{countAllSchedule}}場)</h3>
          </van-col>
        </van-row>
      </div>
    </div>
    <section class="stages-area" v-for="(group, index) in Object.entries(groupHotList)" :key="index">
      <h4 class="detail">{{group[0]}}</h4>
      <ul class="today-stage">
        <matchItem
        v-for="(item, index) in group[1]"
        :homeScore="item.homeScore"
        :guestScore="item.guestScore"
        :matchState="item.state"
        :guestTeamUuid="item.guestTeamUuid"
        :homeTeamUuid="item.homeTeamUuid"
        :startTime="item.startTime"
        :key="index" />
      </ul>
    </section>
  </div>
</template>

<script>
import { Col, Row } from 'vant'
import matchItem from '../components/share/matchItem'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'allStages',
  components: {
    matchItem,
    [Col.name]: Col,
    [Row.name]: Row
  },
  data () {
    return {
      today: `${new Date().getMonth() + 1}-${new Date().getDate()}`
    }
  },
  methods: {
    backPage () {
      this.$router.back()
    }
  },
  computed: {
    ...mapState('schedule', ['groupHotList']),
    ...mapGetters('schedule', ['countAllSchedule', 'groupHotList'])
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.allStages{
  background-color: #131415;
  min-height: 100vh;
  .header-area{
    padding: 10px 0;
  }
  .stages-area{
    background-color: $ereie-black;
    .detail{
      width: 95%;
      margin: auto;
      text-align: left;
      font-size: 17px;
      line-height: 1.5;
      color: $white;
    }
  }
  .today-stage{
    padding: 3px;
  }
}

.backHeader{
  .back-btn{
    padding: 3px 0;
    cursor: pointer;
    i{
      font-size: 12px;
    }
    i,span{
      color: #399FFF;
    }
  }
  .title{
    color: #fff;
    font-size: 17px;
    line-height: 22px;
    font-weight: bold;
  }
}
</style>

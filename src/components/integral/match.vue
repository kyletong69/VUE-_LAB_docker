<template>
  <div class="match">
    <div class="selection">
      <div class="select-btn" @click="show = !show">
        <figure>
          <img src="@/assets/img/calender.png" alt="calender">
        </figure>
        <p>选择日期 {{date}}</p>
        <div class="pull-icon">
          <i class="material-icons">arrow_drop_down</i>
        </div>
      </div>
    </div>
    <h3 class="match-head">中超第一轮</h3>
    <ul class="match-panels">
      <matchItem
      :type=type
      v-for="(item, index) in 5" :key="index" />
    </ul>
    <!-- 日期元件 -->
    <van-calendar
    v-model="show"
    color="#07c160"
    :min-date="minDate"
    :max-date="maxDate"
    :show-confirm="false"
    :default-date="defaultDay"
    :formatter="formatter"
    @confirm="onConfirm" />
  </div>
</template>

<script>
import { Calendar } from 'vant'
import matchItem from '../share/matchItem'
export default {
  name: 'match',
  components: {
    matchItem,
    [Calendar.name]: Calendar
  },
  data () {
    return {
      date: '',
      show: false,
      type: false,
      defaultDay: new Date()
    }
  },
  methods: {
    /**
     * 對日曆上每一個進行操作
     */
    formatter (day) {
      const month = day.date.getMonth() + 1
      const date = day.date.getDate()
      if (month === this.defaultDay.getMonth() + 1 && date === this.defaultDay.getDate()) {
        day.text = '今天'
      }
      return day
    },
    formatDate (date) {
      return `${date.getMonth() + 1}-${date.getDate()}`
    },
    onConfirm (date) {
      this.show = false
      this.date = this.formatDate(date)
    },
    mouthCheck: function (date) {
      if (date.getMonth() <= 8) {
        return false
      } else {
        return true
      }
    }
  },
  computed: {
    maxDate () {
      return new Date(this.defaultDay.getFullYear(), this.defaultDay.getMonth() + 1, this.defaultDay.getDate())
    },
    minDate () {
      return new Date(this.defaultDay.getFullYear(), this.defaultDay.getMonth() - 1, this.defaultDay.getDate())
    }
  },
  mounted () {
    let today = new Date()
    let startNumber = 6
    if (this.mouthCheck(today)) startNumber = 5
    this.date = today.toISOString().slice(startNumber, 10)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.match{
  background-color: #1D1E20;
  min-height: calc( 100vh - 163px);
  .selection{
    padding: 10px 0;
    border-bottom: 1px solid $white-6;
    .select-btn{
      width: 80%;
      margin: auto;
      background-color: $white-6;
      border-radius: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      padding: 5px;
      figure{
        margin: 0 10px 0 0;
      }
      p{
        color: $white-57;
      }
      .pull-icon{
        margin-left: auto;
      }
    }
  }
  .match-head{
    font-size: 17px;
    line-height: 22px;
    text-align: left;
    padding: 5px;
    color: #A18832;
  }
  .match-title{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #333;
  }
  .match-player{
    padding: 15px 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    .player-item{
      @include imgObjectFit(40px);
      figure{
        margin: 0 auto 10px;
      }
    }
    .match-info{
      .match-points{
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
  .match-panels{
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>

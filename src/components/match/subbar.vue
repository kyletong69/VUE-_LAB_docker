<template>
  <div class="subbar">
    <div class="subbar__header" :class="{'on': menu}">
      <div class="back" @click="back"><i class="material-icons">chevron_left</i>back</div>
      <div class="title">{{title}}</div>
      <div class="tools">
        <img @click="menu = !menu" src="@/assets/img/filter.png" alt="filter">
      </div>
    </div>
    <div class="subbar__content" :class="{'on': menu}">
      <div class="subbar__filter">
        <div class="subbar__filter__league">
          <li v-for="(item, index) in leagueList" :key="index">
            <input type="checkbox" name="status" :id="`status-${item.value}`"
              :value="item"
              v-model="selectLeague" />
            <label :for="`status-${item.value}`">
              {{item.title}}
            </label>
          </li>
        </div>
        <div class="subbar__filter__date">
          <ul>
            <li @click="changeDate(item.date)" v-for="(item, index) in dateList" :class="{'active': date === item.date}" :key="index">
              <p v-if="index !== 0">{{item.date}}</p>
              {{item.week}}
            </li>
            <li><img @click="show = true" src="@/assets/img/date.png" alt="date"></li>
          </ul>
          <!-- <i @click="show = true" class="material-icons md-24">date_range</i> -->
          <!-- <img @click="show = true" src="@/assets/img/date.png" alt="date"> -->
        </div>
        <div class="subbar__filter__status">
          <li v-for="(item, index) in statusList" :key="index">
            <input type="checkbox" name="status" :id="`status-${item.value}`"
              :value="item"
              v-model="selectStatus" />
            <label :for="`status-${item.value}`">
              {{item.title}}
            </label>
          </li>
        </div>
      </div>
      <div @click="filterBtn" class="btn">确认</div>
    </div>
    <van-calendar
      v-model="show"
      color="#07c160"
      :min-date="minDate"
      :max-date="maxDate"
      :show-confirm="false"
      :default-date="defaultDay"
      @confirm="onConfirm" />
  </div>
</template>

<script>
import { Calendar } from 'vant'
import { formatData } from '@/lib/formatDate'
export default {
  name: 'subbar',
  components: {
    [Calendar.name]: Calendar
  },
  props: {
    league: String
  },
  data () {
    return {
      translateList: {
        'CSL': '中超',
        'SerieA': '意甲',
        'LaLiga': '西甲',
        'Bundesliga': '德甲',
        'Ligue1': '法甲',
        'EFL': '英超'
      },
      selectLeague: [],
      leagueList: [
        { title: '中超', value: 'CSL', menu: true },
        { title: '意甲', value: 'SerieA', menu: true },
        { title: '西甲', value: 'LaLiga', menu: true },
        { title: '德甲', value: 'Bundesliga', menu: true },
        { title: '法甲', value: 'Ligue1', menu: true },
        { title: '英超', value: 'EFL', menu: true }
      ],
      menu: false,
      date: '',
      dateList: [],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2020, 11, 31),
      show: false,
      defaultDay: new Date(),
      selectStatus: [],
      statusList: [
        { title: '即時', value: 'now' },
        { title: '進行中', value: 'ing' },
        { title: '未開始', value: 'future' },
        { title: '完場', value: 'close' }
      ],
      title: '賽程'
    }
  },
  methods: {
    filterBtn () {
      console.log(`selectLeague`)
      console.log(this.selectLeague)
      console.log(`selectStatus`)
      console.log(this.selectStatus)
      console.log(`date : ${this.date}`)
      this.menu = false
    },
    back () {
      this.$router.go(-1)
      // this.$emit('changeFilter', 'status')
    },
    changeDate (date) {
      this.date = date
    },
    init () {
      this.date = formatData(false, 'md', '-').split(' ')[0]
      for (var i = 0; i < 5; i++) {
        if (i === 0) {
          this.dateList.push({
            date: this.date,
            week: '今天'
          })
        } else {
          let date = formatData(false, 'md', '-', '星期', i)
          this.dateList.push({
            date: date.split(' ')[0],
            week: date.split(' ')[1]
          })
        }
      }
    },
    onConfirm (date) {
      this.show = false
      this.date = formatData(date, 'md', '-')
    }
  },
  mounted () {
    this.init()
    if (this.$route.path === '/match/follow') {
      this.title = '我的关注'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/color.scss";
.subbar {
  background: $black-chocolate;
  &__header {
    @include text(17px, normal);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid $white-06;
    &.on {
      img {
        display: none;
      }
    }
    .back, i {
      display: flex;
      align-items: center;
      width: 60px;
      color: $dodger-blue;
    }
    .title {
      @include text(17px, 600);
      // margin-right: 38px;
      // width: calc(100% - 98px);
      color: $white;
    }
    .tools {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
      width: 60px;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
  &__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 50px;
    // width: calc(100% - 40px);
    width: 100%;
    height: 0px;
    background: $black-chocolate;
    transition: height .5s;
    overflow-x: hidden;
    &.on {
      height: calc(100vh - 50px);
      transition: height .5s;
    }
    .btn {
      @include text(17px, normal);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 46px;
      color: $white;
      background: $fire-engine-red-50;
    }
  }
  &__filter {
    padding: 0 20px;
    height: 100%;
    background: $white-06;
    &__league, &__date, &__status {
      display: flex;
      padding: 25px 0;
      border-bottom: 1px solid $white-06;
    }
    &__league, &__status {
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 30px;
      }
      label {
        @include text(15px, normal);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: $white-30;
        border-radius: 5px;
        border: 1px solid $white-30;
        cursor: pointer;
      }
      input {
        display: none;
      }
      input:checked+label {
        color: $white;
        border: 1px solid $blue-jeans;
        background-color: $blue-jeans-15;
      }
      // NOTE disabled 顏色配置
      // input[disabled]+label {
      //   color: $white;
      //   border: 1px solid $white;
      //   cursor: no-drop;
      // }
    }
    &__league {
      flex-wrap: wrap;
      padding-bottom: 0px;
      li {
        margin-bottom: 25px;
        &:not(:nth-child(4n)) {
          margin-right: calc((100% - 240px) / 3);
        }
      }
    }
    &__date {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1 0 auto;
      }
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: $white-30;
        height: 38px;
        p {
          color: $white-30;
        }
        &.active {
          color: $white;
          border-bottom: 2px solid $dodger-blue;
          p {
            color: $white;
          }
        }
        &:first-child {
          display: flex;
          align-items: center;
          font-size: 18px;
        }
        &:not(:first-child) {
          font-size: 14px;
          line-height: 1.3;
        }
      }
      i {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        color: $white-30;
        &::before {
          content: '';
          display:block;
          width: 10px;
          height: 28px;
          border-left:1px solid $white-30;;
        }
      }
    }
    &__status {
      justify-content: space-between;
    }
  }
}
</style>

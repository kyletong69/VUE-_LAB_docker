<template>
  <div class="scheduleDetail">
    <div class="scheduleDetail__header">
      <div class="scheduleDetail__navbar">
        <div class="back" @click="back"><i class="material-icons">chevron_left</i>back</div>
        <div class="title">{{title}}</div>
        <div class="tools">
          <img src="@/assets/img/star.png" alt="follow">
          <!-- <img src="@/assets/img/share.png" alt="share"> -->
        </div>
      </div>
      <div class="scheduleDetail__content">
        <div class="date">
          2019-07-16 18:00
        </div>
        <div class="detail">
          <div class="home">
            <img src="https://picsum.photos/60/60" alt="icon">
            巴塞罗纳
          </div>
          <div class="result">
            <p>4 - 1</p>
            <span>進行中</span>
          </div>
          <div class="away">
            <img src="https://picsum.photos/60/60" alt="icon">
            切尔西
          </div>
        </div>
      </div>
      <div class="scheduleDetail__tabbar">
        <li @click="changeTab(item.value)" v-for="(item, index) in tabList" :class="{active: item.value === tabValue}" :key="index">
          {{item.title}}
        </li>
      </div>
    </div>
    <div class="scheduleDetail__container">
      <!-- <router-view :scheduleStatus="scheduleStatus"/> -->
      <component :is="tabValue" :scheduleStatus="scheduleStatus"/>
    </div>
  </div>
</template>

<script>
import live from '../components/scheduleDetail/live'
import chat from '../components/scheduleDetail/chat'
import situation from '../components/scheduleDetail/situation'
import lineups from '../components/scheduleDetail/lineups'
import ws from '@/lib/websocket'
import { mapState } from 'vuex'
export default {
  name: 'scheduleDetail',
  components: { live, chat, situation, lineups },
  props: {},
  data () {
    return {
      tabList: [
        { title: '图文直播', router: '/scheduleDetail/', value: 'live' },
        { title: '聊天室', router: '/scheduleDetail/chat', value: 'chat' },
        { title: '赛况', router: '/scheduleDetail/situation', value: 'situation' },
        { title: '阵容', router: '/scheduleDetail/lineups', value: 'lineups' }
      ],
      tabValue: 'live',
      title: '中超赛程'
    }
  },
  computed: {
    ...mapState('schedule', ['scheduleStatus'])
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    changeTab (val) {
      this.tabValue = val
    }
  },
  mounted () {
    // this.$router.push({ name: 'live' })
    setTimeout(() => {
      console.log(`detail : ${this.scheduleStatus}`)
    }, 10)
    ws.open()
  },
  beforeDestroy () {
    ws.close()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/element.scss";
.scheduleDetail {
  background: $ereie-black;
  &__header {

  }
  &__navbar {
    @include text(17px, normal);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 50px;
    background: $black-chocolate;
    .back, i {
      display: flex;
      align-items: center;
      width: 60px;
      color: $dodger-blue;
    }
    .title {
      @include text(17px, 600);
      color: $white;
    }
    .tools {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 60px;
    }
    img {
      width: 18px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: space-around;
    // padding: 20px 0px;
    height: 152px;
    background-image: url("~@/assets/img/scheduleBanner.png");
    background-size: cover;
    background-repeat: no-repeat;
    .date {
      @include text(15px, 600);
      padding: 10px 0;
      color: $white;
    }
    .detail {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }
    .result {
      p {
        @include text(28px, 600);
        color: $light-sky-blue;
      }
      span {
        @include text(15px, normal);
        color: $fire-engine-red;
      }
    }
    .home, .away {
      @include text(15px, normal);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $white;
      img {
        margin-bottom: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
  }
  &__tabbar {
    display: flex;
    justify-content: space-around;
    height: 33px;
    background: $black-chocolate;
    li {
      @include text(17px, 600);
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 1 25%;
      color: $white-30;
      // border: 1px solid black;
      &.active {
        color: $white;
        // background: gray;
      }
    }
  }
  &__container {
    height: calc(100vh - 235px);
  }
}
</style>

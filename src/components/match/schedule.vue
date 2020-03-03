<template>
  <div class="schedule">
    <ul v-for="(item, index) in scheduleList" :key="index">
      <div class="schedule__title">{{item.header}}</div>
      <li v-for="(match, index) in item.match" :key="index">
        <div class="schedule__date">
            <p>
              <img src="@/assets/img/video.png" alt="icon">
              {{match.date}}
            </p>
            <i class="material-icons md-18">{{match.follow}}</i>
        </div>
        <router-link @click.native="changeStatus(match.status)" :to="{ path: '/scheduleDetail/' }" class="schedule__container">
          <div class="schedule__home">
            <img src="https://picsum.photos/35/35" alt="icon">
            {{match.Chome}}
          </div>
          <div class="schedule__detail">
            <!-- <div class="schedule__detail__header">
              {{match.time}} {{match.type}} {{match.live}}
            </div> -->
            <div class="schedule__detail__content">
              {{match.result}}
            </div>
            <div class="schedule__detail__footer">
              {{match.status}}
            </div>
          </div>
          <div class="schedule__away">
            <img src="https://picsum.photos/35/35" alt="icon">
            {{match.Caway}}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'schedule',
  components: {},
  props: {
    league: String
  },
  data () {
    return {
      scheduleList: [
        { header: '中超第17轮',
          match: [
            { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '進行中', result: '1 - 5', live: true, follow: 'star_border' },
            { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '已結束', result: '1 - 5', live: true, follow: 'star' },
            { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '未開賽', result: '1 - 5', live: true, follow: 'star_border' },
            { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '進行中', result: '1 - 5', live: true, follow: 'star' },
            { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '進行中', result: '1 - 5', live: true, follow: 'star_border' },
            { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '進行中', result: '1 - 5', live: true, follow: 'star_border' },
            { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '進行中', result: '1 - 5', live: true, follow: 'star_border' },
            { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '進行中', result: '1 - 5', live: true, follow: 'star_border' }
          ] }
      ]
    }
  },
  methods: {
    ...mapActions('schedule', ['changeStatus'])
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/color.scss";
.schedule {
  ul {
    padding: 5px;
    background: $ereie-black;
  }
  &__title {
    @include text(17px, normal);
    padding: 5px 0;
    color: $metallic-sunburst;
    text-align: left;
  }
  li {
    margin: 5px 0 10px;
    border-radius: 10px;
    border: 1px solid $white-06;
    // background: $ereie-black;
    overflow: hidden;
  }
  &__date {
    @include text(15px, normal);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    flex: 1 1 100%;
    height: 27px;
    border-bottom: 1px solid $white-06;
    background: $white-06;
    img {
      padding-right: 5px;
    }
    p {
      display: flex;
      align-items: center;
      color: $white;
    }
    i {
      color: $corn;
    }
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;
    flex: 1 1 auto;
  }
  &__home, &__away {
    @include text(13px, normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $white;
    img {
      margin-bottom: 10px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  &__detail {
    &__content {
      @include text(22px, normal);
      color: $white;
    }
    &__footer {
      @include text(12px, normal);
      color: $white;
    }
  }
}
</style>

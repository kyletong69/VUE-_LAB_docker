<template>
  <div class="detail">
    <div class="detail__header">
      <i @click="back" class="material-icons">chevron_left</i>
      <div class="title">我的關注</div>
      <!-- <i @click="menu = !menu" class="material-icons">expand_more</i> -->
    </div>
    <div v-if="subscribe" class="detail__content">
      <div class="detail__content__schedule">
        <div class="title">
          <p>賽事</p>
          <p>20 <i @click="back" class="material-icons">chevron_right</i></p>
        </div>
        <li v-for="(item, index) in schedule" :key="index" class="schedule">
          <div class="schedule__date">
            <p>
              <img src="@/assets/img/video.png" alt="icon">
              {{item.date}}
            </p>
            <i class="material-icons md-18">{{item.follow}}</i>
          </div>
          <router-link @click.native="changeStatus(item.status)" :to="{ path: '/scheduleDetail/' }" class="schedule__container">
            <div class="schedule__home">
              <img src="https://picsum.photos/50/50" alt="icon">
              {{item.Chome}}
            </div>
            <div class="schedule__detail">
              <!-- <div class="schedule__detail__header">
                {{item.time}} {{item.type}} {{item.live}}
              </div> -->
              <div class="schedule__detail__content">
                {{item.result}}
              </div>
              <div class="schedule__detail__footer">
                {{item.status}}
              </div>
            </div>
            <div class="schedule__away">
              <img src="https://picsum.photos/50/50" alt="icon">
              {{item.Caway}}
            </div>
          </router-link>
        </li>
      </div>
      <div class="detail__content__team">
        <div class="title">
          <p>球隊</p>
          <p>23 <i @click="back" class="material-icons">chevron_right</i></p>
        </div>
        <ul class="team">
          <li v-for="(item, index) in team" :key="index">
            <img src="https://picsum.photos/50/50" alt="icon">
            {{item.team}}
            <i class="material-icons md-18">{{item.follow}}</i>
          </li>
        </ul>
      </div>
      <div class="detail__content__player">
        <div class="title">
          <p>球員</p>
          <p>53 <i @click="back" class="material-icons">chevron_right</i></p>
        </div>
        <ul class="player">
          <li v-for="(item, index) in player" :key="index">
            <p>
              <img src="https://picsum.photos/50/50" alt="icon">
              {{item.player}}
            </p>
            <i class="material-icons md-18">{{item.follow}}</i>
            <div class="player__team">
              <img src="https://picsum.photos/50/50" alt="icon">
              {{item.team}}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="detail__default">
      <p>您还没有收藏相关的比赛...</p>
      <router-link to="/subscribe">立即关注</router-link><p>>>您可能想看的比赛</p>
    </div>
  </div>
</template>

<script>
import { getCookie } from '@/lib/cookie'
export default {
  name: 'detail',
  data () {
    return {
      subscribe: false,
      schedule: [
        { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '進行中', result: '1 - 5', live: true, follow: 'star_border' },
        { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '已結束', result: '1 - 5', live: true, follow: 'star' },
        { date: '2018/7/18 週四', Chome: '松本山雅FC', Ehome: 'MYFC', Caway: '磐田喜悦', Eaway: 'JI', time: '14:55', type: '中超', status: '未開賽', result: '1 - 5', live: true, follow: 'star_border' }
      ],
      team: [
        { team: '比利时', teamIcon: '', follow: 'star_border' },
        { team: '比利时', teamIcon: '', follow: 'star' },
        { team: '比利时', teamIcon: '', follow: 'star_border' }
      ],
      player: [
        { player: '克里斯蒂安', playerIcon: '', team: '比利时', follow: 'star_border' },
        { player: '克里斯蒂安', playerIcon: '', team: '比利时', follow: 'star' },
        { player: '克里斯蒂安', playerIcon: '', team: '比利时', follow: 'star_border' }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (getCookie('subscribe') === 'true') {
      this.subscribe = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout.scss';
@import '@/assets/scss/color.scss';
@import '@/assets/scss/fonts.scss';
.detail {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 50px;
    .title {
      margin-right: 24px;
      width: calc(100% - 24px);
      color: red;
    }
    i {
      color: red;
    }
  }
  &__content {
    padding-bottom: 10px;
    background: $ereie-black;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-top: 1px solid $white;
      border-bottom: 1px solid $white;
      i {
        color: $white;
      }
      p {
        display: flex;
        align-items: center;
        color: $white;
        &:first-child::before {
          content: '';
          display:block;
          width: 10px;
          height: 20px;
          border-left:1px solid $white;
        }
      }
    }
    .schedule {
      margin: 5px;
      border-radius: 10px;
      border: 1px solid $white-06;
      background: $ereie-black;
      overflow: hidden;
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
        padding: 20px 0;
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
          width: 50px;
          height: 50px;
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
    .team {
      display: flex;
      justify-content: space-between;
      margin: 5px;
      li {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        flex: 0 1 33%;
        color: $white;
        // background: $white-06;
        border-radius: 10px;
        border: 1px solid $white-06;
      }
      i {
        position: absolute;
        top: 5px;
        right: 10px;
        color: $corn;
      }
      img {
        margin-bottom: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .player {
      display: flex;
      justify-content: space-between;
      margin: 5px 5px 0 5px;
      li {
        position: relative;
        padding: 10px 0 0;
        flex: 0 1 33%;
        // background: $white-06;
        border-radius: 10px;
        border: 1px solid $white-06;
      }
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;
        color: $white;
      }
      i {
        position: absolute;
        top: 5px;
        right: 10px;
        color: $corn;
      }
      img {
        margin-bottom: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      &__team {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px 0;
        width: 100%;
        color: $white;
        border-top: 1px solid $white-06;
        img {
          margin: 0;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  &__default {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 250px;
    p:first-child {
      margin-bottom: 15px;
      flex: 1 0 100%;
    }
    a {
      color: red;
    }
  }
}
</style>

<template>
  <div class="home">
    <searchBar
    :type="type" />
    <main class="home__body">
      <heroImg/>
    </main>
    <div class="wrapper">
      <div class="stages">
        <swiper :options="swiperOption">
          <swiper-slide class="stage-item" v-for="(item,index) in homeSchedule" :key="index">
            <stageItem
            :guestTeamUuid="item.guestTeamUuid"
            :homeTeamUuid="item.homeTeamUuid"
            :subtitle="item.subtitle" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="view-all">
      <router-link to="/allStages" class="view-btn">
        <figure>
          <img src="@/assets/img/video.png" alt="fifa">
        </figure>
        <p>共有{{countAllSchedule}}場賽事</p>
        <span class="icon">
          <i class="material-icons">play_arrow</i>
        </span>
      </router-link>
    </div>
    <div class="ranking">
      <rank/>
    </div>
    <footer class="more-link">
      <a href="javascript:;" @click.prevent="changePage('stat')">查看更多排名 ></a>
    </footer>
  </div>
</template>

<script>
import searchBar from '@/components/home/searchBar'
import heroImg from '@/components/home/heroImg'
import stageItem from '@/components/home/stageItem'
import rank from '@/components/home/rank'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      type: 'home',
      folderState: true,
      swiperOption: {
        // 一次顯示個數
        slidesPerView: 2.5,
        // 中間間隔
        spaceBetween: 10
      },
      live: [true, false, true, false, true]
    }
  },
  components: {
    searchBar,
    heroImg,
    stageItem,
    rank
  },
  props: {},
  methods: {
    ...mapActions('index', ['changeNav']),
    ...mapActions('schedule', ['init']),
    changePage (page = 'home') {
      this.changeNav(page)
      this.$router.push('/' + page)
    }
  },
  computed: {
    ...mapState('schedule', ['homeSchedule']),
    ...mapGetters('schedule', ['countAllSchedule'])
  },
  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.home {
  background-color: #1D1E20;
  min-height: calc( 100vh - 50px );
  &__body{
    padding:0 10px;
    box-sizing: border-box;
  }
  .wrapper{
    padding: 0 10px;
    box-sizing: border-box;
  }
  .view-all{
    padding: 5px 0;
    .view-btn{
      padding: 10px;
      box-sizing: border-box;
      display: block;
      text-decoration: none;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      box-shadow: 0 4px 18px 3px rgba(0,0,0,0.59);
      @include imgObjectFit(18px);
      p{
        color: $white;
        font-weight: 600;
        font-family: "PingFang SC";
        font-size: 17px;
        line-height: 1.5;
      }
      .icon{
        margin-left: auto;
        i{
          color: $white;
          font-size: 12px;
        }
      }
      &:hover{
        cursor: pointer;
        opacity: .8;
      }
    }
    .folder-back{
      display: block;
      text-decoration: none;
      padding: 5px 0;
    }
  }
  .more-link{
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    a{
      font-size: 17px;
      line-height: 1.5;
      color: #A3D2FF;
    }
  }
}
</style>

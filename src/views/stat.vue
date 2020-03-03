<template>
  <div class="stat">
    <searchBar :type="type" />
    <div class="hot-games">
      <div class="hot-games-title">
        <h3>热门赛事</h3>
        <fifaLogo />
      </div>
      <div class="world-cup-group">
        <swiper :options="swiperOption">
          <swiper-slide
          v-for="(item,index) in hotGames"
          :key="index">
            <router-link
            :to="{ path:'/integral', query:{type: 'integral'}}"
            class="world-cup-item">
              <figure>
                <img src="https://picsum.photos/seed/picsum/50/50" alt="icon">
              </figure>
              <p>{{type}}</p>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- <div class="row view-detail">
      <router-link to="/ranking" class="view-detail-rank">
        <figure>
          <img src="https://picsum.photos/seed/picsum/50/50" alt="icon">
        </figure>
          <span>FIFA世界排名</span>
        <i class="material-icons">arrow_right_alt</i>
      </router-link>
    </div> -->
    <div class="all-games">
      <div class="all-games-title">
        <h3>全部賽事</h3>
        <div class="reload-btn">
          <figure>
            <img src="@/assets/img/reload.png" alt="reloadicon">
          </figure>
          <span>刷新</span>
        </div>
      </div>
    </div>
    <div class="collapse-area" v-for="(item, index) in 5" :key="index">
      <collapse @popModal="pop"/>
    </div>
    <div class="dialog-bg" v-if="show">
      <div class="dialog">
        <div class="dialog-title">
          <p>国际赛事</p>
        </div>
        <ul class="dialog-content">
          <li
          @click="changePage"
          class="dialog-item"
          v-for="(item, index) in 6" :key="index">
            <figure>
              <img src="https://picsum.photos/seed/picsum/38/38" alt="cion">
            </figure>
            <p class="cup-name">FIFA</p>
            <div class="arrow">
              <i class="material-icons">keyboard_arrow_right</i>
            </div>
          </li>
        </ul>
        <div class="dialog-btn">
          <input type="button"
          @click="close"
          value="关闭"
          class="check">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import collapse from '../components/stat/collapse'
import fifaLogo from '../components/home/fifaLogo'
import searchBar from '@/components/home/searchBar'
import gamer from '@/lib/faker'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'stat',
  components: {
    searchBar,
    fifaLogo,
    collapse
  },
  props: {},
  data () {
    return {
      type: 'stat',
      Games: ['欧冠杯', '欧冠杯', '杯杯杯', '飛機杯', '氏族杯'],
      activeNames: [0, 1, 2, 3, 4],
      show: false,
      swiperOption: {
        // 一次顯示個數
        slidesPerView: 5.2,
        // 中間間隔
        spaceBetween: 5
      }
    }
  },
  methods: {
    ...mapActions('stat', ['init']),
    pop () {
      document.body.style.overflow = 'hidden'
      this.show = true
    },
    close () {
      document.body.style.overflow = 'auto'
      this.show = false
    },
    changePage () {
      this.close()
      this.$router.push({
        path: '/integral',
        query: {
          type: 'integral'
        }
      })
    }
  },
  computed: {
    ...mapState('stat', ['hotGames'])
  },
  mounted: function () {
    this.list = gamer
    this.init()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.stat {
  background-color: #232527;
  min-height: calc( 100vh - 50px );
  img{
    vertical-align: middle;
  }
  .hot-games{
    background-color: #232527;
    .hot-games-title{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 20px;
      h3{
        @include subTitle;
      }
    }
    .world-cup-group{
      padding: 10px 0 20px;
      .world-cup-item{
        @include imgObjectFit(38px);
        figure{
          margin:0 auto 5px;
        }
        p{
          color: #fff;
        }
      }
    }
  }
  .view-detail{
    .view-detail-rank{
      text-decoration: none;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      @include imgObjectFit(30px);
      i{
        margin-left: auto;
      }
    }
  }
  .all-games{
    background-color: #232527;
    .all-games-title{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 20px;
      h3{
        @include subTitle;
      }
      .reload-btn{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        @include imgRectangle(16px, 19px);
        cursor: pointer;
        img{
          vertical-align: middle;
        }
        span{
          @include subTitle;
          font-weight: 400;
        }
      }
    }
  }
  .collapse-area{
    padding: 0 5px 5px;
  }
  .pop-row-content{
    max-height: 60vh;
    overflow-y: scroll;
    .pop-row{
      @include imgObjectFit(30px);
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      box-sizing: border-box;
      padding: 20px;
      .logo{
        margin-left: auto;
      }
    }
  }
  .dialog-bg{
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100vh;
    z-index: 200;
    .dialog{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      background: #1F1F1F;
      border-radius: 10px;
      border: 2px solid rgba(255,255,255,.1);
      padding:0 20px;
      .dialog-title{
        padding: 15px 0;
        border-bottom: 1px solid $white-6;
        p{
          font-size: 22px;
          line-height: 28px;
          color: $white;
        }
      }
      .dialog-content{
        padding: 5px 0;
        height: 280px;
        overflow-y: scroll;
        .dialog-item{
          background-color: #292A2B;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          @include imgObjectFit(28px);
          padding: 11px 15px;
          margin-bottom: 5px;
          .cup-name{
            margin-right: auto;
            color: $white;
          }
          .arrow{
            i{
              color: $white;
            }
          }
        }
      }
      .dialog-btn{
        padding: 5px 0;
        .check{
          width: 100%;
          height: 100%;
          padding: 15px 0;
          font-size: 17px;
          line-height: 22px;
          background-color: rgba(57,159,255,0.48);
          border-radius: 5px;
          border: none;
          color: $white;
        }
      }
    }
  }
}
</style>

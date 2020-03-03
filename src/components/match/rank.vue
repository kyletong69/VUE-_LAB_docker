<template>
  <div class="rank">
    <div class="rank__header">
      <p @click="back"><i class="material-icons">chevron_left</i>back</p>
      <div class="title">积分榜</div>
    </div>
    <swiper class="rank__swiper" :options="swiperOption">
      <swiper-slide class="rank__swiper__slide"
        v-for="(item, index) in barList" :key="index">
        <li @click="changeBar(item.value)" :class="{active: item.value === league}">{{item.title}}</li>
      </swiper-slide>
    </swiper>
    <div class="rank__content">
      <table class="rank__table">
        <tbody>
          <tr v-for="(item, index) in teamList" :key="index"
            :style="setStyle(index)">
            <td>{{(index === 0) ? '排名' : index}}</td>
            <td>{{item.team}}</td>
            <td>{{item.count}}</td>
            <td>{{item.victory}}</td>
            <td>{{item.tie}}</td>
            <td>{{item.defeat}}</td>
            <td>{{item.gl}}</td>
            <td>{{item.integral}}</td>
          </tr>
        </tbody>
      </table>
      <div class="rank__footer">
        比赛进行中，您将看到依据各支球队实时进行调整的动态排名，
        这可能与比赛结束后的几分榜排序稍有不同。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rank',
  components: {},
  props: {
  },
  data () {
    return {
      swiperOption: {
        roundLengths: true, // NOTE 防止文字模糊
        slidesPerView: 6
      },
      // NOTE value 先預留之後點擊功能使用
      barList: [
        { title: '中超', value: 'CSL', menu: true },
        { title: '意甲', value: 'SerieA', menu: true },
        { title: '西甲', value: 'LaLiga', menu: true },
        { title: '德甲', value: 'Bundesliga', menu: true },
        { title: '法甲', value: 'Ligue1', menu: true },
        { title: '英超', value: 'EFL', menu: true }
      ],
      league: 'CSL',
      teamList: [
        { team: '球隊', teamIcon: '', count: '場次', victory: '勝', defeat: '敗', tie: '平', gl: '進/失', integral: '積分' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' },
        { team: '广州富力', teamIcon: '', count: '38', victory: '32', defeat: '2', tie: '2', gl: '95/32', integral: '98' }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    changeBar (val) {
      this.league = val
    },
    setStyle (index) {
      switch (index) {
        case 0:
          return 'background: rgba(255, 255, 255, 0.06);'
        case 1:
        case 2:
        case 3:
        case 4:
          return 'background: #2669a8;'
        case 5:
          return 'background: rgba(38, 105, 168, 0.71);'
        default:
          break
      }
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/color.scss";
@import "~@/assets/scss/fonts.scss";
.rank {
  &__header {
    @include text(17px, normal);
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 54px;
    background: $black-chocolate;
    i, p {
      color: $dodger-blue;
    }
    p {
      display: flex;
      align-items: center;
    }
    .title {
      width: calc(100% - 80px);
      color: $white;
    }
  }
  &__swiper {
    // border-bottom: 1px solid black;
    background: $ereie-black;
    &__slide {
      padding: 10px;
    }
    li {
      @include text(17px, 600);
      padding: 5px 0;
      color: $white-30;
      &.active {
        color: $white;
        border-bottom: 2px solid $dodger-blue;
      }
    }
  }
  &__content {
    background: $ereie-black;
  }
  &__table {
    margin: 0 auto;
    padding: 5px;
    width: calc(100% - 10px);
    border: 1px solid $white-06;
    font-size: 14px;
    td {
      padding: 10px 5px;
      color: $white;
    }
    tr {
      @include text(13px, normal);
      border-bottom: 1px solid $white-06;
      &:first-child {
        background: $white-06;
      }
    }
  }
  &__footer {
    @include text(12px, normal);
    padding: 10px 20px;
    color: $white-48;
    text-align: center;
    line-height: 16px;
  }
}
</style>

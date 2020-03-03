<template>
  <div class="situation">
    <div v-if="!checkStatus()" class="situation__content">
      <div class="situation__title">-  技术统计  -</div>
      <table class="situation__table">
        <tbody>
          <tr v-for="(item, index) in analyticsList" :key="index">
            <td>{{item.home}}</td>
            <td>{{item.analytics}}</td>
            <td>{{item.away}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="situation__content noStart"><p>本场比赛暂无赛况信息</p></div>
  </div>
</template>

<script>
export default {
  name: 'situation',
  components: {},
  props: {
    scheduleStatus: String
  },
  data () {
    return {
      analyticsList: [
        { home: '广州富力', analytics: '', away: '重庆斯威' },
        { home: '46%', analytics: '控球率', away: '56%' },
        { home: '8', analytics: '射門', away: '6' },
        { home: '4', analytics: '射正', away: '2' },
        { home: '8', analytics: '封堵', away: '6' },
        { home: '8', analytics: '任意球', away: '6' },
        { home: '4', analytics: '角球', away: '2' },
        { home: '8', analytics: '越位', away: '6' },
        { home: '8', analytics: '換人', away: '6' },
        { home: '4', analytics: '犯規', away: '2' },
        { home: '8', analytics: '黃牌', away: '6' }
      ]
    }
  },
  methods: {
    /** @summary 判斷 store scheduleStatus
    * @return 未開賽 => true, 已開賽、已結束 => false, 之後參數改英文
    */
    checkStatus () {
      if (this.scheduleStatus === '未開賽') return true
      return false
    }
  },
  mounted () {
    console.log(`situation : ${this.scheduleStatus}`)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/color.scss";
.situation {
  height: 100%;
  &__title {
    @include text(17px, normal);
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px;
    color: $white;
  }
  &__table {
    @include text(13px, normal);
    margin: 0 5px;
    width: calc(100% - 10px);
    border: 1px solid $white-06;
    tr {
      border-bottom: 1px solid $white-06;
      &:first-child {
        background: $white-06;
      }
    }
    td {
      padding: 10px 5px;
      color: $white;
      // border: 1px solid black;
    }
  }
  .noStart {
    margin: 200px 0;
    p {
      @include text(12px, normal);
      display: flex;
      align-items: center;
      justify-content: center;
      color: $white;
      &::before {
        content: url("~@/assets/img/talk.png");
        margin-right: 10px;
      }
    }
  }
}
</style>

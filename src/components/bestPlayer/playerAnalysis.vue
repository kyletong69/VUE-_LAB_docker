<template>
  <div class="playerAnalysis">
    <div class="club-table">
      <historyTable
      :data="club.data"
      :nav=club.nav />
    </div>
    <div class="country-team-table">
      <historyTable
      :data="countryTeam.data"
      :nav="countryTeam.nav" />
    </div>
  </div>
</template>

<script>
import historyTable from './playerAnalysis/historyTable'
export default {
  name: 'playerAnalysis',
  components: {
    historyTable
  },
  data () {
    return {
      club: {
        nav: ['俱乐部', '出场', '首发', '时间(分)', '进球', '助攻'],
        data: ['圣挨蒂安', '35', '50', '2978', '14', '8']
      },
      countryTeam: {
        nav: ['国家队', '出场', '首发', '时间(分)', '进球', '助攻'],
        data: ['圣挨蒂安', '35', '33', '2978', '14', '8']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.playerAnalysis{
  padding: 5px;
  .club-table{
    margin-bottom: 5px;
  }
}
</style>

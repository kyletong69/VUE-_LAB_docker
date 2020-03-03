<template>
  <div class="dataList">
    <aside class="sort">
      <tabs :tabsItem = setTabs />
    </aside>
    <main class="show">
      <dataTable
      :title = setTableTitle
      :type = setTag />
    </main>
  </div>
</template>

<script>
import tabs from '../share/dataList/tabs'
import dataTable from '../share/dataList/dataTable'
export default {
  name: 'dataList',
  props: {
    tag: String
  },
  components: {
    tabs,
    dataTable
  },
  data () {
    return {
      tagList: ['最佳球员', '最佳球队'],
      tagListInEnglish: ['player', 'team'],
      playerCategory: ['射手榜', '助攻榜', '射门', '射正', '传球', '成功传球', '关键传球', '拦截', '封堵', '解围', '扑救', '黄牌', '红牌', '出场时间'],
      playerTitle: ['排名', '球员', '球队', '总数'],
      teamCategory: ['进球', '失球', '获得点球', '射门', '射正', '关键传球', '拦截', '封堵', '解围', '黄牌', '红牌'],
      teamTitle: ['排名', '球队', '总数']
    }
  },
  computed: {
    setTabs () {
      if (this.getPageName === 'integral') {
        return this.setTag === 'player' ? this.playerCategory : this.teamCategory
      } else if (this.getPageName === 'team') {
        return this.playerCategory
      }
      return this.teamCategory
    },
    setTableTitle () {
      if (this.getPageName === 'integral') {
        return this.setTag === 'player' ? this.playerTitle : this.teamTitle
      } else if (this.getPageName === 'bestTeam') {
        return this.playerTitle
      }
      return this.teamTitle
    },
    setTag () {
      return this.tagListInEnglish[this.tagList.indexOf(this.tag)]
    },
    getPageName () {
      return this.$store.state.route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.dataList{
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  .sort{
    width: 100px;
    flex-shrink: 0;
    background-color: #242628;
    min-height: calc(100vh - 163px);
  }
  .show{
    width: 100%;
    background-color: #1D1E20;
    min-height: calc(100vh - 163px);
  }
}
</style>

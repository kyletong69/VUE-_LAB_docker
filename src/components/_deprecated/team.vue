<template>
  <div class="team">
    <aside class="sort">
      <tabs
      :tabsItem = category
      :type = name />
    </aside>
    <main class="show">
      <dataTable
      :title = title
      :type = name />
    </main>
  </div>
</template>

<script>
import tabs from '../share/dataTable/tabs'
import dataTable from '../share/dataTable/dataTable'
export default {
  name: 'team',
  components: {
    tabs,
    dataTable
  },
  data () {
    return {
      category: ['进球', '失球', '获得点球', '射门', '射正', '关键传球', '拦截', '封堵', '解围', '黄牌', '红牌'],
      title: ['排名', '球队', '总数'],
      name: 'team'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.team{
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  height: calc( 100vh - 264px);
  .sort{
    background-color: #ddd;
    height: 100%;
    width: 100px;
    flex-shrink: 0;
    overflow-y: scroll;
  }
  .show{
    width: 100%;
    height: 100%;
    border-left: 1px solid #ccc;
  }
}
</style>

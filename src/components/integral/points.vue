<template>
  <div class='points'>
    <h3>分组赛</h3>
    <section class="tables">
      <pointsTable
      v-for="(item, index) in tableTitle" :key="index"
      :detail=points
      :game=item />
    </section>
    <div class="tip">
      <explanation />
    </div>
  </div>
</template>

<script>
import explanation from '../share/explanation'
import pointsTable from '@/components/share/pointsTable'
import { points } from '@/lib/faker'
export default {
  name: 'points',
  components: {
    pointsTable,
    explanation
  },
  data () {
    return {
      tableTitle: ['A', 'B'],
      points: []
    }
  },
  mounted () {
    this.points = points
  }
}
</script>

<style lang='scss' scoped>
.points{
  background: #1D1E20;
  padding: 5px;
  box-sizing: border-box;
  min-height: calc( 100vh - 163px);
  h3{
    font-size: 17px;
    line-height: 22px;
    padding: 0 5px;
    box-sizing: border-box;
    text-align: left;
    color: #A18832;
  }
}
</style>

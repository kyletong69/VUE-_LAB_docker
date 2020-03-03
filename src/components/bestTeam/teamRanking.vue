<template>
  <div class="teamRanking">
    <van-popup v-model="show"
    position="bottom">
      <van-picker
      show-toolbar
      :default-index="nowIndex"
      @confirm="onConfirm"
      @cancel="show=false"
      :columns="columns"/>
    </van-popup>
    <div class="packer" @click="show=true">
      <p>{{setGameTitle}}</p>
      <div class="pull-btn">
        <i class="material-icons">arrow_right_alt</i>
      </div>
    </div>
    <div class="ranking-panel" v-for="(item, index) in 5" :key="index">
      <pointTable
      :detail=data />
    </div>
    <explanation />
  </div>
</template>

<script>
import { Popup, Picker } from 'vant'
import { points } from '@/lib/faker'
import pointTable from '../share/pointsTable'
import explanation from '../share/explanation'
export default {
  name: 'teamRanking',
  components: {
    pointTable,
    explanation,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  data () {
    return {
      data: [],
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州', '2019-2020 欧洲杯 外围赛'],
      show: false,
      nowIndex: 5,
      game: '555'
    }
  },
  methods: {
    onConfirm (value, index) {
      console.log(`当前值：${value}`)
      this.nowIndex = index
      this.show = false
    }
  },
  computed: {
    setGameTitle: function () {
      return this.columns[this.nowIndex]
    }
  },
  mounted () {
    this.data = points
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.teamRanking{
  padding: 5px;
  box-sizing: border-box;
  .packer{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 15px 10px;
    cursor: pointer;
    margin-bottom: 10px;
  }
}
</style>

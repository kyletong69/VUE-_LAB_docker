<template>
  <div class="match">
    <subbar v-if="checkRouter()" @changeLeague=changeLeague @changeFilter="changeFilter"/>
    <router-view />
    <!-- <matchbar v-if="filter !== 'schedule'" :league=league @changeLeague=changeLeague @changeFilter="changeFilter"/>
    <subbar v-else :league=league @changeLeague=changeLeague @changeFilter="changeFilter"/>
    <ranking v-if="filter === 'ranking'"/>
    <schedule v-else :league=league /> -->
  </div>
</template>

<script>
// import matchbar from '@/components/match/matchbar.vue'
import subbar from '@/components/match/subbar.vue'
// import schedule from '@/components/match/schedule.vue'
// import ranking from '@/components/match/ranking.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'match',
  components: {
    subbar
    // matchbar, schedule, ranking, subbar
  },
  props: {},
  computed: {
    // NOTE 前面是 store modules 的名稱, 後面是該 store 內的 state 參數
    ...mapState('schedule', ['schedule', 'scheduleStatus'])
    // ...mapState('websocket', ['test'])
  },
  data () {
    return {
      league: 'hot',
      filter: 'tools'
    }
  },
  methods: {
    // NOTE 前面是 store modules 的名稱, 後面是該 store 內的 actions 名稱
    ...mapActions('schedule', ['init']),
    checkRouter () {
      // console.log(this.$route)
      if (['/match/follow', '/match/schedule'].indexOf(this.$route.path) > -1) {
        return true
      }
      return false
    },
    changeLeague (val) {
      console.log(`match : ${val}`)
      this.league = val
    },
    changeFilter (val) {
      console.log(`match : ${val}`)
      this.filter = val
    }
  },
  mounted () {
    this.init('tttt')
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.match {

}
</style>

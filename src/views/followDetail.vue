<template>
  <div class="followDetail">

  </div>
</template>

<script>
export default {
  name: 'followDetail',
  data () {
    return {
      menuList: [
        { title: '中超', value: 'CSL', menu: true },
        { title: '意甲', value: 'SerieA', menu: true },
        { title: '西甲', value: 'LaLiga', menu: true },
        { title: '德甲', value: 'Bundesliga', menu: true },
        { title: '法甲', value: 'Ligue1', menu: true },
        { title: '英超', value: 'EFL', menu: true }
      ],
      league: ''
    }
  },
  methods: {
    changeBar (val) {
      // this.$emit('changeLeague', val)
      this.league = val
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout.scss';
.followDetail {

}
</style>

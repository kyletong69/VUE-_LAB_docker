<template>
  <div class="follow">
    <div class="follow__header">
      <i @click="back" class="material-icons">chevron_left</i>
      <div class="title">我的關注 &lt; {{translateList[league]}} &gt;</div>
      <i @click="menu = !menu" class="material-icons">expand_more</i>
    </div>
    <div class="follow__menu" :class="{'on': menu}">
      <li @click="changeBar(item.value)" v-for="(item, index) in menuList" :key="index">
        {{item.title}}
      </li>
    </div>
    <div class="test">
      <p>您还没有收藏相关的比赛...</p>
      <router-link to="/subscribe">立即关注</router-link><p>>>您可能想看的比赛</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'follow',
  data () {
    return {
      translateList: {
        'CSL': '中超',
        'SerieA': '意甲',
        'LaLiga': '西甲',
        'Bundesliga': '德甲',
        'Ligue1': '法甲',
        'EFL': '英超'
      },
      menuList: [
        { title: '中超', value: 'CSL', menu: true },
        { title: '意甲', value: 'SerieA', menu: true },
        { title: '西甲', value: 'LaLiga', menu: true },
        { title: '德甲', value: 'Bundesliga', menu: true },
        { title: '法甲', value: 'Ligue1', menu: true },
        { title: '英超', value: 'EFL', menu: true }
      ],
      menu: false,
      league: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    changeBar (val) {
      // this.$emit('changeLeague', val)
      this.league = val
    }
  },
  mounted () {
    console.log(this.$route.query.league)
    this.league = (this.$route.query.league) ? this.$route.query.league : 'CSL'
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout.scss';
.follow {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid;
  }
  &__menu {
    display: flex;
    flex-wrap: wrap;
    max-height: 0px;
    transition: max-height .5s;
    overflow-x: hidden;
    &.on {
      max-height: 100px;
      border-bottom: 1px solid;
      transition: max-height .5s;
    }
    li {
      padding: 15px 0;
      flex: 0 0 20%;
    }
  }
  .test {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 250px;
    p:first-child {
      margin-bottom: 15px;
      flex: 1 0 100%;
    }
    a {
      color: red;
    }
  }
}
</style>

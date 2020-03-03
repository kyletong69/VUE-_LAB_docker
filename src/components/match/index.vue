<template>
  <div class="index">
    <div class="index__menu">
      <router-link :to="item.router" v-for="(item, index) in menuList" :key="index">{{item.title}}</router-link>
    </div>
    <schedule />
  </div>
</template>

<script>
import schedule from '@/components/match/schedule'
export default {
  name: 'index',
  components: {
    schedule
  },
  props: {},
  data () {
    return {
      menuList: [
        { title: '熱門', value: 'hots', router: '/match/index' },
        { title: '賽程', value: 'schedule', router: '/match/schedule' },
        { title: '關注', value: 'follow', router: '/match/follow' },
        { title: '積分榜', value: 'rank', router: '/match/rank' }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/color.scss";
@import "~@/assets/scss/fonts.scss";
.index {
  &__menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 0 5px;
    height: 54px;
    background: $black-chocolate;
    a {
      @include text(17px, 600);
      flex: 0 1 25%;
      height: 29px;
      color: $white;
      &:first-child {
        color: $dodger-blue;
        &::after {
          content: '';
          display: block;
          margin: 5px auto;
          width: 60px;
          border-bottom: 2px solid $dodger-blue;
        }
      }
    }
  }
}
</style>

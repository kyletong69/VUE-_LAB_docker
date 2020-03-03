<template>
  <div class="matchbar">
    <div class="matchbar__menu">
      <div class="matchbar__menu__filter">
        <p>
          {{filterValue}}
        </p>
      </div>
      <li @click="clickTools(item.value)" v-for="(item, index) in menuList" :key="index">
        {{item.title}}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'matchbar',
  components: {
  },
  props: {
    league: String
  },
  data () {
    return {
      swiperOption: {
        roundLengths: true, // NOTE 防止文字模糊
        slidesPerView: 6
      },
      // NOTE value 先預留之後點擊功能使用
      matchbarList: [
        { title: '熱門', value: 'hot', menu: false },
        { title: '中超', value: 'CSL', menu: true },
        { title: '意甲', value: 'SerieA', menu: true },
        { title: '西甲', value: 'LaLiga', menu: true },
        { title: '德甲', value: 'Bundesliga', menu: true },
        { title: '法甲', value: 'Ligue1', menu: true },
        { title: '英超', value: 'EFL', menu: true }
      ],
      menuList: [
        // { title: '即時', value: 'tools', router: false },
        { title: '賽程', value: 'schedule', router: false },
        { title: '關注', value: 'follow', router: false },
        { title: '積分榜', value: 'ranking', router: true }
      ],
      filterMenu: false,
      filterList: [
        { title: '熱門', value: 'now' },
        { title: '進行中', value: 'ing' },
        { title: '未開始', value: 'future' },
        { title: '完場', value: 'close' }
      ],
      columns: [ '即時', '進行中', '未開始', '完場' ],
      filterValue: '熱門'
    }
  },
  methods: {
    changeBar (val) {
      this.$emit('changeLeague', val)
      if (val === 'hot') {
        this.filterMenu = false
      }
    },
    clickTools (str) {
      this.$emit('changeFilter', str)
      switch (str) {
        case 'tools' :
          this.filterMenu = !this.filterMenu
          break
        case 'follow' :
          this.$router.push({ path: 'follow', query: { league: this.league } })
          break
        default:
          this.filterMenu = false
          break
      }
    },
    changeFilter (str) {
      this.filterValue = str
      this.filterMenu = false
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/color.scss";
@import "~@/assets/scss/fonts.scss";
.matchbar {
  background: $black-chocolate;
  &__swiper {
    // border-bottom: 1px solid black;
    &__slide {
      padding: 10px;
    }
    li {
      @include text(17px, normal);
      padding: 5px 0;
      color: $white-30;
      &.active {
        color: $white;
        border-bottom: 2px solid $dodger-blue;
      }
    }
  }
  &__menu {
    display: flex;
    align-items: center;
    // border-bottom: 1px solid black;
    // background: $white-06;
    &__filter {
      position: relative;
      flex: 0 1 25%;
      &.on {
        img {
          transform:rotate(180deg);
        }
        ul {
          max-height: 0px;
          transition: max-height .5s;
        }
      }
      p {
        @include text(13px, normal);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        color: $corn;
        img {
          margin-left: 5px;
        }
      }
      ul {
        position: absolute;
        width: 100%;
        max-height: 150px;
        background: $ereie-black;
        transition: max-height .5s;
        overflow-x: hidden;
      }
      li {
        &.on {
          color: $corn;
          background: $white-06;
        }
      }
    }
    li {
      @include text(13px, normal);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      flex: 0 1 25%;
      color: $white;
      // &:first-child {
      //   color: red;
      // }
    }
  }
  &__tools {
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    border-bottom: 1px solid gainsboro;
    li {
      padding: 8px 20px;
      border: 1px solid gainsboro;
    }
  }
  .packer{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    flex: 0 1 20%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
}
</style>

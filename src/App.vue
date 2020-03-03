<template>
  <div id="app">
    <div id="nav" v-if="checkRouter()">
      <router-link v-for="(item, index) in navbar" :key="index"
        @click.native="changeNav(item.icon)"
        :to="item.router"
        :class="{'active': item.icon === navigation}">
        <img :src="getImg(item.icon)" alt="">
        {{item.title}}
        <!-- <router-link :to="item.router">{{item.title}}</router-link> -->
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      navbar: [
        { title: '首頁', icon: 'home', router: '/home' },
        { title: '比賽', icon: 'match', router: '/match/' },
        { title: '數據', icon: 'stat', router: '/stat' },
        { title: '個人', icon: 'profile', router: '/profile/' }
      ]
    }
  },
  computed: {
    ...mapState('index', ['navigation'])
  },
  methods: {
    ...mapActions('index', ['init', 'changeNav']),
    /** @summary 抓 img
    * @param {string} url img 檔名
    * @return img path
    */
    getImg (url) {
      if (url === '') return
      let str = (url === this.navigation) ? `${url}-active` : url
      return `${require(`@/assets/img/${str}.png`)}`
    },
    checkRouter () {
      // console.log(this.$route)
      if (['/home', '/match/index', '/stat', '/profile/index'].indexOf(this.$route.path) > -1) {
        return true
      }
      return false
    }
  },
  mounted () {
    this.init()
    // var config = {
    //   headers: { 'Access-Control-Allow-Origin': '*' }
    // }
    // axios.get('http://192.168.1.232:8787/announcement/LS', config)
    //   .then(function (response) {
    //     console.log(response.data)
    //   })
    this.$router.push({ path: 'home' })
    console.log(process.env)
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/color.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  border-bottom: 1px solid black;
  background-color: $raisin-black;
  // color: white;
  // background: #211E55;
  // li {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   flex: 0 0 25%;
  //   &.active {
  //     a {
  //       color: $dodger-blue;
  //     }
  //   }
  // }
  a {
    @include text(12px, normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 25%;
    color: $taupe-gray;
    text-decoration: none;
    &.active {
      color: $dodger-blue;
    }
  }
  img {
    margin-bottom: 3px;
    width: 24px;
  }
  // padding: 30px;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>

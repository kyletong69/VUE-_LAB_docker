<template>
  <div class="ranking">
    <header>
      <router-link to="/stat">
        <div class="back-btn">
          <i class="material-icons">arrow_right_alt</i>
        </div>
      </router-link>
      <h2>{{pageName}}</h2>
    </header>
    <nav class="ranking-nav">
      <ul>
        <li v-for="(item, index) in nav"
        :key="index">
          <a href="javascript:;" @click.prevent="changeTab(index+1)">{{item}}</a>
        </li>
      </ul>
    </nav>
    <main>
      <table class="country-list">
        <thead>
          <tr>
            <td v-for="(item, index) in title" :key="index">{{item}}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in setFifaList" :key="index">
            <td>{{index+1}}</td>
            <td>
              <div class="country-info">
                <figure>
                  <img :src="cdn+item.teamCore.teamUuid+'.png'" :alt="item.teamCore.name">
                </figure>
                <p>{{item.teamCore.name}}</p>
              </div>
            </td>
            <td>{{item.score}}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ranking',
  data () {
    return {
      title: ['排名', '國家', '積分'],
      pageName: 'FIFA国际排名',
      nav: ['国际排名', '亚洲排名'],
      nowPage: 1,
      cdn: 'http://192.168.1.232/cdn/teamIcon/'
    }
  },
  methods: {
    changeTab: function (tab) {
      console.log(tab)
    }
  },
  computed: {
    setFifaList () {
      return this.$store.state.schedule.fifaList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout.scss';
.ranking{
  header{
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #000;
    h2{
      margin: auto;
    }
  }
  .ranking-nav{
    ul{
      padding: 10px 0;
      text-align: left;
      li{
        display: inline-block;
        margin: 0 10px;
      }
    }
  }
  main{
    .country-list{
      width: 95%;
      margin: auto;
      tr,td{
        border: 1px solid #ccc;
        font-size: 16px;
        line-height: 1.5;
        padding: 5px;
      }
    }
    .country-info{
      @include imgObjectFit(30px);
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

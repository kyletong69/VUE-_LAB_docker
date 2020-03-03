<template>
  <header class= "searchBar">
    <figure class="icon" v-if="setType">
      <img src="https://picsum.photos/38/38" alt="球球icon">
    </figure>
    <div class="search-area">
      <label>
        <i class="material-icons">search</i>
        <input type="text"
          x-webkit-speech
          class="search"
          placeholder="搜索赛事|球队|球员"
          @keyup.enter="submitHandler"
          v-model="search">
        <i class="material-icons" @click="goWelcome">mic</i>
      </label>
    </div>
    <div class="canel-btn" @click.stop="clear" v-if="setCancelBtn">
      <p>取消</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'searchBar',
  props: {
    type: String
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    submitHandler: function () {
      this.$router.push({
        path: '/searchResult',
        query: {
          keyword: this.search
        }
      })
    },
    clear: function () {
      this.search = ''
    },
    goWelcome () {
      this.$router.push({
        path: '/welcome'
      })
    }
  },
  computed: {
    setType: function () {
      return this.type === 'home'
    },
    setCancelBtn () {
      return this.type === 'result'
    }
  },
  mounted () {
    if (this.$route.query.keyword) this.search = this.$route.query.keyword
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
@import '@/assets/scss/color';
.searchBar{
  background-color: #131415;
  box-shadow: 0 2px 4px rgba(0,0,0,.4);
  width: 100%;
  box-sizing: border-box;
  padding:10px 15px 10px 25px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  @include imgObjectFit(38px);
  .search-area{
    width: 100%;
    label{
      width: 100%;
      height: 100%;
      background-color: #000000;
      border-radius: 10px;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      i{
        flex-shrink: 0;
        color: rgba(255,255,255,0.57);
      }
      .search{
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        padding:0 5px;
        box-sizing: border-box;
        color: rgba(255,255,255,0.57);
        line-height: 1.5;
        &::placeholder{
          color: rgba(255,255,255,0.57);
        }
      }
    }
  }
  .canel-btn{
    flex-shrink: 0;
    cursor: pointer;
    margin: 0 5px;
    p{
      color: $white;
      font-size: 16px;
      line-height: 1.5;
    }
  }
}
</style>

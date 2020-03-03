<template>
  <div class="bannerBack">
    <header class="integral-header">
      <a href="javascript:;" @click.prevent="backPage">
        <div class="back-btn">
          <i class="material-icons">arrow_right_alt</i>
        </div>
      </a>
      <div class="character">
        <figure>
          <img src="https://picsum.photos/200/300" alt="icon">
        </figure>
        <h2 v-if="type==='integral'">世界杯</h2>
        <h2 v-else-if="type==='team'">比利时</h2>
        <h2 v-else>球元</h2>
      </div>
    </header>
    <nav class="page-group">
      <ul>
        <li class="page-btn" v-for="(item,index) in nav" :key="index">
          <router-link v-if="item.query"
          :to="{'path':item.router, query: { name : item.query }}">{{item.tag}}</router-link>
          <router-link v-else :to="item.router">{{item.tag}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'bannerBack',
  props: {
    type: String,
    nav: Array
  },
  methods: {
    backPage: function () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.bannerBack{
  .integral-header{
    width: 100%;
    padding: 20px 20px 30px 20px;
    box-sizing: border-box;
    background-image: url('https://picsum.photos/1000/1000');
    background-position: center;
    background-size: cover;
    .back-btn{
      text-align: left;
    }
    .character{
      @include imgObjectFit(50px);
      figure{
        margin:0 auto 30px;
      }
    }
  }
  .page-group{
    background-color: #ccc;
    padding: 10px 10px 2px;
    box-sizing: border-box;
    ul{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      .page-btn{
        &:hover{
          a{
            text-decoration: underline;
          }
        }
        .router-link-exact-active{
          text-decoration: underline;
        }
      }
    }
  }
}
</style>

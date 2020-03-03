<template>
  <div class="index">
    <div class="index__banner">
      <div class="index__info">
        <img src="https://picsum.photos/75/75" alt="icon">
        Jiansu 1.0
      </div>
      <i class="material-icons">arrow_right_alt</i>
    </div>
    <div class="index__center">
      <ul v-for="(item, index) in settingList" :key="index">
        <div class="title">{{item.title}}</div>
        <router-link v-for="(desc, index) in item.ctrl" :to="desc.router" :key="index">
          <img src="https://picsum.photos/50/50" alt="icon">
          {{desc.desc}}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
      settingList: [
        { title: '球球中心',
          ctrl: [
            // { desc: '個人設置', descIcon: '', router: '' },
            { desc: '我的關注', descIcon: '', router: '/profile/follow/' },
            // { desc: '邀請朋友', descIcon: '', router: '' },
            { desc: '消息中心', descIcon: '', router: '/profile/msgCenter' }
          ] },
        { title: '管理與反饋',
          ctrl: [
            { desc: '關於我們', descIcon: '', router: '/profile/aboutUs' },
            { desc: '意見反饋', descIcon: '', router: '/profile/feedback' },
            // { desc: '清除緩存', descIcon: '', router: '' },
            { desc: '在線客服', descIcon: '', router: '' }
          ] }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index {
  &__banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 30px 30px;
    border-bottom: 1px solid black;
    background: gainsboro;
  }
  &__info {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      border-radius: 50%;
    }
  }
  &__center {
    .title {
      display: flex;
      align-items: center;
      padding: 15px;
      flex: 1 1 100%;
      border-bottom: 1px solid gainsboro;
      text-align: left;
      &::before {
        content: '';
        display:block;
        width: 10px;
        height: 20px;
        border-left:2px solid black;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 10px;
      border-radius: 10px;
      border: 1px solid gainsboro;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 25px 10px;
      flex: 0 0 25%;
      img {
        margin-bottom: 10px;
        width: 40px;
        height: 25px;
      }
    }
  }
}
</style>

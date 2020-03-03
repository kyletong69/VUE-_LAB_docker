<template>
  <div class="profile">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'profile',
  components: {},
  props: {},
  data () {
    return {
      settingList: [
        { title: '球球中心',
          ctrl: [
            { desc: '個人設置', descIcon: '', router: '' },
            { desc: '我的關注', descIcon: '', router: '' },
            { desc: '邀請朋友', descIcon: '', router: '' },
            { desc: '消息中心', descIcon: '', router: '' }
          ] },
        { title: '管理與反饋',
          ctrl: [
            { desc: '關於我們', descIcon: '', router: '' },
            { desc: '意見反饋', descIcon: '', router: '' },
            { desc: '清除緩存', descIcon: '', router: '' },
            { desc: '在線客服', descIcon: '', router: '' }
          ] }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile {
}
</style>

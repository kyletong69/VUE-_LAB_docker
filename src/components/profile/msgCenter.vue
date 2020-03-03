<template>
  <div class="msgCenter">
    <div class="msgCenter__header">
      <i @click="back" class="material-icons">chevron_left</i>
      <div class="title">消息中心</div>
      <i class="material-icons">check_circle_outline</i>
    </div>
    <div class="msgCenter__content">
      <li v-for="(item, index) in msgList" :key="index">
        <img src="https://picsum.photos/40/40" alt="">
        <div class="msgCenter__msgBox ">
          <div class="msgCenter__msgBox__header">
            <div class="type">{{item.type}}</div>
            <div class="date">{{item.date}}</div>
          </div>
          <div class="msgCenter__msgBox__msg">{{item.msg}}</div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'msgCenter',
  components: {},
  props: {},
  data () {
    return {
      msgList: [
        { icon: '', type: '通知消息', date: '04-30 11:04', msg: '欧冠半决赛正式开打，热刺坐镇主场迎战阿贾克斯！asdfasdfsdf', read: false },
        { icon: '', type: '系統消息', date: '04-30 11:04', msg: '欧冠半决赛正式开打，热刺坐镇主场迎战阿贾克斯！', read: false }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.msgCenter {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid;
    i:first-child, .title {
      color: red;
    }
    .title {
      width: calc(100% - 44px);
    }
  }
  &__content {
    li {
      display: flex;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid gray;
    }
    img {
      margin-right: 10px;
      border-radius: 50%;
    }
  }
  &__msgBox {
    width: calc(100% - 40px);
    font-size: 14px;
    line-height: 1.5;
    &__header {
      display: flex;
      justify-content: space-between;
    }
    &__msg {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>

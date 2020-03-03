<template>
  <div class="feedback">
    <div class="feedback__header">
      <i @click="back" class="material-icons">chevron_left</i>
      <div class="title">意見反饋</div>
    </div>
    <div class="feedback__content">
      <textarea cols="30" rows="10" v-model="msg"></textarea>
      <p>手機／QQ／郵箱</p>
      <input type="text" v-model="contact">
      <div class="btn">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feedback',
  components: {},
  props: {},
  data () {
    return {
      msg: '',
      contact: ''
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
@import "~@/assets/scss/element.scss";
.feedback {
  &__header {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid;
    .title {
      width: calc(100% - 44px);
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    textarea {
      width: 100%;
      height: 200px;
      resize: none;
      border: 1px solid gray;
      box-sizing: border-box;
    }
    input {
      padding: 10px;
      width: 100%;
      border: 1px solid gray;
      box-sizing: border-box;
    }
    p {
      margin: 15px 0;
      font-weight: bold;
    }
    .btn {
      @include btn(100%, 50px, 5px);
      margin-top: 20px;
      color: white;
      background: blue;
    }
  }
}
</style>

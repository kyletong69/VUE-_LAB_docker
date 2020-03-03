<template>
  <div class="aboutUs">
    <div class="aboutUs__header">
      <i @click="back" class="material-icons">chevron_left</i>
      <div class="title">關於我們</div>
    </div>
    <div class="aboutUs__content">
      <img src="https://picsum.photos/100/100" alt="icon">
      球球體育 1.0
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  components: {},
  props: {},
  data () {
    return {
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
.aboutUs {
  &__header {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid;
    i, .title {
      color: red;
    }
    .title {
      width: calc(100% - 44px);
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 125px 0;
    img {
      margin: 20px 0;
    }
  }
}
</style>

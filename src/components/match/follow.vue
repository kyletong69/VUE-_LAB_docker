<template>
  <div class="follow">
    <div class="follow__content">
      <p>您还没有收藏相关的比赛...</p>
      <div class="text">
        <router-link to="/subscribe">立即关注</router-link><p>>>您可能想看的比赛</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'follow',
  components: {},
  props: {},
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/color.scss";
@import "~@/assets/scss/fonts.scss";
.follow {
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 50px);
    background: $black-chocolate;
    p:first-child {
      @include text(20px, 600);
      color: $white;
    }
    a {
      color: $dodger-blue;
    }
    .text {
      @include text(17px, normal);
      display: flex;
      margin-top: 12px;
      p {
        color: $white-57;
      }
    }
  }
}
</style>

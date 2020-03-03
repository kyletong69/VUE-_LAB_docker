<template>
  <div class="collapse">
    <div class="collapse-title" @click="state = !state">
      <div class="cup">
        <img src="@/assets/img/cup.png" alt="cup">
        <h4>国际</h4>
      </div>
      <div class="arrow-btn">
        <img src="@/assets/img/arrow.png" alt="arrow">
      </div>
    </div>
    <transition name="van-fade">
      <div class="collapse-content " v-if="state">
        <div class="collapse-item"
        @click.stop="pop"
        v-for="(item, index) in 2" :key="index">
          <figure>
            <img src="https://picsum.photos/seed/picsum/38/38" alt="icon">
          </figure>
          <p>国际赛事</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'folder',
  props: {
    title: {
      type: String
    },
    stage: {
      type: Array
    }
  },
  data () {
    return {
      // 開關狀態
      state: true
    }
  },
  methods: {
    pop: function () {
      console.log('pop')
      this.$emit('popModal')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
@import '@/assets/scss/transition';
.collapse{
  background-color: $white-6;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px 5px;
  border: 1px solid $white-6;
  .collapse-title{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    cursor: pointer;
    .cup{
      width: 55px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      h4{
        color: #fff;
        font-size: 17px;
        line-height: 1.5;
        font-weight: bold;
      }
    }
    .arrow-btn{
      transition: .5s;
    }
  }
  .collapse-content{
    border-top: 1px solid $white-6;
    padding: 5px 0;
    .collapse-item{
      background-color: #292A2B;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      @include imgObjectFit(28px);
      padding: 5px 0 5px 50px;
      margin-bottom: 2px;
      p{
        font-size: 17px;
        line-height: 1.5;
        color: #fff;
      }
    }
  }
}
</style>

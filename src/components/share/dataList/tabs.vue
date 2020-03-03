<template>
  <ul class="tabs">
    <li class="tabs-item"
    v-for="(item, index) in tabsItem"
    :key="index"
    :class="{active: index === activeItem}"
    @click="activeItem = index">
      <span>{{item}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    tabsItem: Array
  },
  data () {
    return {
      activeItem: 0
    }
  },
  watch: {
    tabsItem () {
      this.activeItem = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.tabs{
  .tabs-item{
    padding: 10px 0;
    position: relative;
    span{
      color: $white;
      font-size: 12px;
      line-height: 16px;
    }
    &::before{
      content: '';
      position: absolute;
      width: 80%;
      height: 2px;
      background-color: #399FFF;
      bottom: 5px;
      left: 10%;
      transform: scale(0);
      transition: transform .3s;
    }
  }
  .active{
    &::before{
      transform: scale(1);
    }
    background-color: #1D1E20;
  }
}
</style>

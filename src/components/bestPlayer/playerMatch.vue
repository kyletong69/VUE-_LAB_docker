<template>
  <div class="playerMatch">
    <ul>
      <matchItem
      :type=type
      v-for="(item, index) in 6" :key="index" />
    </ul>
  </div>
</template>

<script>
import matchItem from '../share/matchItem'
export default {
  name: 'playerMatch',
  components: {
    matchItem
  },
  data () {
    return {
      type: true
    }
  }
}
</script>

<style lang="scss" scoped>
.playerMatch{
  padding: 5px;
  box-sizing: border-box;
}
</style>

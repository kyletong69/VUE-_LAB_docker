<template>
  <div class="follow">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'follow',
  data () {
    return {
    }
  },
  methods: {
    changeBar (val) {
      // this.$emit('changeLeague', val)
      this.league = val
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout.scss';
.follow {
}
</style>

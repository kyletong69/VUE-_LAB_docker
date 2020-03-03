<template>
  <div class="backHeader">
    <van-row>
      <van-col span="4" class="back-btn" @click="backPage">
        <i class="material-icons">arrow_back_ios</i>
        <span>back</span>
      </van-col>
      <van-col span="10" offset="3">
        <h3 class="title">6-29比賽賽事(12場)</h3>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row } from 'vant'
export default {
  name: 'backHeader',
  components: {
    [Col.name]: Col,
    [Row.name]: Row
  },
  data () {
    return {

    }
  },
  methods: {
    backPage () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.backHeader{
  .back-btn{
    padding: 3px 0;
    cursor: pointer;
    i{
      font-size: 12px;
    }
    i,span{
      color: #399FFF;
    }
  }
  .title{
    color: #fff;
    font-size: 17px;
    line-height: 22px;
    font-weight: bold;
  }
}
</style>

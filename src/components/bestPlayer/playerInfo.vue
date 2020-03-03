<template>
  <div class="playerInfo">
    <div class="player-base-data">
      <div class="player-name">
        <figure>
          <img src="https://picsum.photos/100/100" alt="icon">
        </figure>
        <div class="detail">
          <p class="name">切尔西</p>
          <p class="deadline">合同到期：2023-06-30</p>
        </div>
      </div>
      <div class="player-count">
        <p>1600000000000000000000万欧元</p>
      </div>
      <div class="player-body-data">
        <div class="country">
          <figure>
            <img src="https://picsum.photos/120/120" alt="icon">
          </figure>
          <p>法国</p>
        </div>
        <div class="age">
          <p class="upper">28岁</p>
          <p class="downer">1991-03-29</p>
        </div>
        <div class="body">
          <p class="upper">169CM/68KG</p>
          <p class="downer">身高/体重</p>
        </div>
      </div>
    </div>
    <!-- 預留區塊 -->
    <div class="ability"></div>
    <!-- 預留區塊結束 -->
    <section class="row">
      <h5 class="sub-title">转会记录</h5>
      <table class="change-table">
        <thead>
          <tr>
            <th class="time">时间</th>
            <th class="change-to">转会至</th>
            <th class="tip">转会费</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in 9" :key="index">
            <td>2018-07-16</td>
            <td>圣挨蒂安</td>
            <td>700万欧元</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="row">
      <h5 class="sub-title">职业生涯</h5>
      <table class="career-table">
        <thead>
          <tr>
            <th>球队</th>
            <th>进球</th>
            <th>助攻</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in 9" :key="index">
            <td>圣挨蒂安</td>
            <td>10</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'playerInfo',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.playerInfo{
  padding: 5px;
  box-sizing: border-box;
  .player-base-data{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    .player-name{
      width: 70%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      @include imgObjectFit(30px);
      padding: 15px;
      box-sizing: border-box;
      border-right: 1px solid #ccc;
      .detail{
        width: 80%;
        text-align: left;
        p{
          line-height: 1.5;
          font-size: 12px;
        }
      }
    }
    .player-count{
      width: 30%;
      flex-shrink: 0;
      p{
        word-wrap: break-word;
      }
    }
    .player-body-data{
      border-top: 1px solid #ccc;
      padding: 15px 0;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      .country,.age,.body{
        width: 30%;
        @include imgObjectFit(30px);
        figure{
          margin:0 auto 10px;
        }
      }
      .upper,.downer{
        line-height: 1.5;
      }
      .upper{
        font-size: 16px;
      }
      .downer{
        font-size: 12px;
      }
    }
  }
  .row{
    .sub-title{
      line-height: 2;
      font-size: 20px;
      text-align: left;
    }
    .career-table,.change-table{
      width: 100%;
      thead{
        background-color: #ccc;
      }
      th,td{
        border: 1px solid #aaa;
        padding: 10px 0;
      }
      th{
        width: 37.5%;
      }
      th:nth-child(1){
        width: 25%;
      }
    }
  }
}
</style>

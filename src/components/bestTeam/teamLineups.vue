<template>
  <div class="teamLineups">
    <section class="leader">
      <div class="row">
        <h5>主教练</h5>
      </div>
      <div class="content row">
        <figure>
          <img src="https://picsum.photos/id/27/60/60" alt="icon">
        </figure>
        <p>切尔切索夫</p>
      </div>
    </section>
    <section class="category"
    v-for="(item, index) in 5" :key="index">
      <table class="category-table">
        <thead>
          <tr>
            <th class="table-title">
              <p>前峰</p>
            </th>
            <th v-for="(item, index) in title" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in 5" :key="index">
            <td class="player-info">
              <figure>
                <img src="https://picsum.photos/id/257/60/60" alt="icon">
              </figure>
              <div class="detail">
                <p class="name">切尔切索夫</p>
                <p class="sub-detail">7号-尼日利亚</p>
              </div>
            </td>
            <td>7</td>
            <td>0</td>
            <td>1</td>
            <td>1500万</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'teamLineups',
  data () {
    return {
      section: ['前峰', '中场', '后卫', '门将'],
      title: ['出场', '进攻', '助攻', '身价(欧元)']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.teamLineups{
  padding: 5px;
  box-sizing: border-box;
  .leader,.category{
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px 0;
  }
  .leader{
    .row{
      padding: 5px;
      &:not(:last-child){
        border-bottom: 1px solid #ccc;
      }
      h5{
        text-align: left;
        text-indent: 15px;
        position: relative;
        @include titleLine(5px,#fa8);
      }
    }
    .content{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      @include imgObjectFit(30px);
    }
  }
  .category{
    .category-table{
      width: 100%;
      thead tr th{
        padding: 10px 0;
        &:first-child{
          width: 50%;
        }
      }
      thead tr,tr:not(:last-child){
        border-bottom: 1px solid #ccc;
      }
      tbody tr{
        background-color: #fff;
        transition: background-color .5s;
        &:hover{
          cursor: pointer;
          background-color: #ccc;
        }
      }
      .player-info{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        @include imgObjectFit(30px);
        padding:0 5px;
        .detail{
          text-align: left;
          padding: 2px 0;
          p{
            font-size: 14px;
            line-height: 1.5;
          }
          .sub-detail{
            color: #aaa;
          }
        }
      }
      .table-title{
        text-align: left;
        p{
          text-indent: 20px;
          position: relative;
          @include titleLine(10px,#fa8);
        }
      }
    }
  }
}
</style>

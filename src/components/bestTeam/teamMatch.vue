<template>
  <div class="teamMatch">
    <section class="match" v-for="(item, index) in 2" :key="index">
      <header class="match-title">
        <figure>
          <img src="https://picsum.photos/200/200" alt="icon">
        </figure>
        <h5>欧洲国家杯</h5>
      </header>
      <div class="match-content">
        <div class="row" v-for="(item, index) in 3" :key="index">
          <div class="match-time">19-07-25 02:45</div>
          <div class="country-item">
            <figure>
              <img src="https://picsum.photos/60/60" alt="icon">
            </figure>
            <div class="country-name">比利时</div>
          </div>
          <div class="match-score">
            <p class="score">4 VS 2</p>
            <span class="result" :class="setClass">{{setResult}}</span>
          </div>
          <div class="country-item">
            <figure>
              <img src="https://picsum.photos/61/61" alt="icon">
            </figure>
            <div class="country-name">克罗地亚</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'teamMatch',
  data () {
    return {
      state: 0
    }
  },
  computed: {
    setResult: function () {
      switch (this.state) {
        case 0:
          return '胜'
        case 1:
          return '负'
        default:
          return '平'
      }
    },
    setClass: function () {
      return this.state === 0 ? 'win' : this.state === 1 ? 'lose' : 'deal'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.teamMatch{
  padding: 5px;
  box-sizing: border-box;
  .match{
    border: 1px solid #333;
    margin-bottom: 10px;
    .match-title{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      @include imgObjectFit(30px);
      padding:15px;
      box-sizing: border-box;
      border-bottom: 1px solid #333;
    }
    .match-content{
      .row{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        &:last-child{
          border-bottom: none;
        }
        .match-time{
          width: 100%;
          padding: 15px;
          box-sizing: border-box;
          text-align: left;
        }
        .country-item{
          @include imgObjectFit(30px);
          padding: 15px 0;
          figure{
            margin:0 auto 5px;
            img{
              border-radius: 0;
            }
          }
          .country-name{
            font-size: 16px;
            line-height: 1.5;
          }
        }
        .match-score{
          .score{
            font-size: 20px;
            line-height: 1.5;
            font-weight: bold;
          }
          .result{
            color: #fff;
          }
          .win{
            background-color: #f00;
          }
          .deal{
            background-color: #ccc;
          }
          .lose{
            background-color: green;
          }
        }
      }
    }
  }
}
</style>

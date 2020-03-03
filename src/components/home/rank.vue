<template>
  <div class='rank'>
    <div class="rank-btns">
      <fifaLogo />
      <div class="btns">
        <div class="rank-btn"
          v-for="(item, index) in btnName" :key="index"
          :class="{rankBtnActive:activeItem === index}"
          @click="activeItem=index">
          <p>{{item}}</p>
        </div>
      </div>
    </div>
    <keep-alive>
      <table class="rank-table">
        <thead class="rank-title">
          <tr>
            <th v-for="(item, index) in title" :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <!-- 未來使用activeItem值判斷使用list -->
          <tr class="rank-row"
          v-for="(item,index) in (activeItem === 0 ? setFifa : setFifa)"
          :key="index">
            <td>{{index+1}}</td>
            <td>
              <p>{{item.teamName}}</p>
            </td>
            <td>{{activeItem === 0 ? item.score : score[1]}}</td>
          </tr>
        </tbody>
      </table>
    </keep-alive>
  </div>
</template>

<script>
import fifaLogo from './fifaLogo'
export default {
  name: 'rank',
  components: {
    fifaLogo
  },
  data () {
    return {
      btnName: ['国际排名', '亚洲排名'],
      activeItem: 0,
      country: ['比利時', '日本'],
      score: [2016, 555],
      title: ['排名', '球隊', '本月積分']
    }
  },
  computed: {
    setCountry: function () {
      return this.country[this.activeItem]
    },
    setScore: function () {
      return this.score[this.activeItem]
    },
    setFifa () {
      return this.$store.state.schedule.fifaList
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.rank{
  border: 1px solid $white-6;
  border-radius: 10px;
  padding: 5px 0;
  .rank-btns{
    border-bottom: 1px solid $white-6;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    .logo{
      @include imgRectangle(40px, 22px);
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      figure{
        background-color: $white;
        margin: 0;
      }
      h5{
        background-color: #2050B7;
        color: $white;
        font-size: 17px;
        font-family: "PingFang SC";
        line-height: 22px;
        font-weight: bold;
        padding: 0 3px;
      }
    }
    .btns{
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      .rank-btn{
        width: 30%;
        padding: 3px 0 5px;
        position: relative;
        &::before{
          content: '';
          transform: scale(0);
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #FDF064;
          bottom: 0;
          left: 0;
          transition: .5s transform;
        }
        p{
          color: rgba(255,255,255,0.3);
          line-height: 1.5;
          font-family: "PingFang SC";
          font-weight: bold;
        }
        &:hover{
          cursor: pointer;
          opacity: .8;
        }
      }
      .rankBtnActive{
        &::before{
          content: '';
          transform: scale(1)
        }
        p{
          color: $white;
        }
      }
    }
  }
  .rank-table{
    width: 100%;
    th,td{
      font-size: 12px;
      line-height: 16px;
    }
    thead{
      th{
        color: #7ED3F9;
        &:nth-child(1){
          width: 20%;
        }
        &:nth-child(2){
          width: 60%;
          text-align: left;
        }
      }
    }
    tbody{
      .rank-row{
        p{
          color: $white;
          text-align: left;
          @include nowrap;
        }
        td{
          padding: 5px 0;
          color: $white;
        }
        figure{
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          img{
            flex-shrink: 0;
          }
        }
      }
    }
  }
}
</style>

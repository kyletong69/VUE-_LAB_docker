<template>
  <div class='pointsTable'>
    <h4 class="table-name">- {{game}}組 -</h4>
    <table class="game-table">
      <thead>
        <tr>
          <th v-for="(item, index) in title" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="row"
        :class="{active: activeRow.indexOf(index) !== -1}"
        v-for="(item, index) in detail" :key="index">
          <td class="rank">{{index+1}}</td>
          <td class="team">
            <div class="team-info">
              <figure>
                <img src="https://picsum.photos/50/50" alt="icon">
              </figure>
              <p>{{item.team}}</p>
            </div>
          </td>
          <td class="range">{{item.range}}</td>
          <td class="win">{{item.win}}</td>
          <td class="get">{{item.get}}</td>
          <td class="point">{{item.point}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'pointsTable',
  components: {
  },
  props: {
    game: String,
    detail: Array
  },
  data () {
    return {
      activeRow: [0, 1],
      title: ['排名', '球队', '赛', '胜/负/平', '进/失', '积分']
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.pointsTable{
  margin-bottom: 10px;
  .table-name{
    font-size: 17px;
    line-height: 22px;
    color: $white;
    font-weight: bold;
  }
  .game-table{
    width: 100%;
    text-align: center;
    // 設定圓角
    thead tr th{
      &:first-child{
        border-top-left-radius: 10px;
      }
    }
    td,th{
      padding: 10px 5px;
      color: $white;
    }
    tr{
      border: 1px solid rgba(255,255,255,0.1);
    }
    .row{
      .team-info{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        @include imgObjectFit(20px);
        figure{
          margin: 0 2px 0 0;
        }
        p{
          color: $white;
        }
      }
    }
    .active{
      background-color: rgba(38,105,168,0.71);
    }
  }
}
</style>

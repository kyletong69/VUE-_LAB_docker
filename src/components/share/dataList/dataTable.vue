<template>
  <div class="dataTable">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(item, index) in title" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <router-link
        v-for="(item, index) in 5" :key="index"
        :to="{'path': setRouterTo, query:{type: seQuery}}"
        tag="tr">
          <td>{{index + 1}}</td>
          <td class="player-col">
            <figure>
              <img src="https://picsum.photos/100/100" alt="icon">
            </figure>
            <p class="van-ellipsis">凯恩</p>
          </td>
          <td class="team-name" v-if="type === 'player'">
            <figure>
              <img src="https://picsum.photos/120/120" alt="icon">
            </figure>
          </td>
          <td>
            {{Math.floor(Math.random() * 10)}}
          </td>
        </router-link>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'dataTable',
  props: {
    title: Array,
    type: String
  },
  data () {
    return {
    }
  },
  computed: {
    setRouterTo: function () {
      return this.type === 'player' ? '/bestPlayer/00514' : '/bestTeam/556178'
    },
    seQuery: function () {
      return this.type === 'player' ? 'player' : 'team'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
.dataTable{
  @include imgObjectFit(30px);
  width: 100%;
  height: 100%;
  padding: 10px 0 0;
  .table{
    width: 100%;
    td,th,p{
      padding: 5px;
      font-size: 12px;
      line-height: 16px;
      color: $white;
    }
    thead tr th{
      color: #7ED3F9;
      &:nth-child(2){
        width: 50%;
        padding: 5px 20px;
        text-align: left;
      }
    }
    .player-col{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      figure{
        margin: 0 3px 0 0;
      }
    }
    tbody tr:hover{
      background-color: #ccc;
      cursor: pointer;
    }
    .team-name{
      figure{
        margin: auto;
      }
    }
  }
}
</style>

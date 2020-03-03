<template>
  <div class="teamInfo">
    <h5 class="sub-title">最近比赛</h5>
    <ul>
      <matchItem />
    </ul>
    <h5 class="sub-title">球队资料</h5>
    <div class="team-detail">
      <table>
        <tr v-for="(item, index) in data" :key="index">
          <th>{{item.title}}</th>
          <td>{{item.content}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import matchItem from '../share/matchItem'
export default {
  name: 'teamInfo',
  components: {
    matchItem
  },
  data () {
    return {
      data: [
        {
          title: '主教练:',
          content: '切尔切索夫'
        },
        {
          title: '成立时间:',
          content: '1912年'
        },
        {
          title: 'FIFA排名:',
          content: '43位'
        },
        {
          title: '球场:',
          content: '卢日尼基体育场'
        },
        {
          title: '球场容量:',
          content: '81000观众'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.teamInfo{
  padding: 5px;
  box-sizing: border-box;
  .sub-title{
    text-align: left;
    line-height: 2;
    font-size: 18px;
    text-indent: 4px;
  }
  .team-detail{
    border: 1px solid #ccc;
    border-bottom: none;
    border-radius: 5px;
    table{
      width: 100%;
    }
    tr,th{
      text-align: left;
      border-bottom: 1px solid #ccc;
      font-size: 18px;
      line-height: 2;
      padding: 0 10px;
      box-sizing: border-box;
    }
    th{
      width: 30%;
    }
    td{
      width: 70%;
    }
  }
}
</style>

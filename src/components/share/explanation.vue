<template>
  <div class="explanation">
    <article class="msg">
      <h3>賽制說明</h3>
      <h4>- 世界杯赛事规则 -</h4>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <p>{{item}}</p>
        </li>
      </ul>
      <h4>- 世界杯小组赛积分规则 -</h4>
      <ul>
        <li v-for="(item, index) in list2" :key="index">
          <p>{{item}}</p>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'explanation',
  data () {
    return {
      list: [
        '1.比赛包括小组赛、1/8决赛、1/4决赛、半决赛，三四名决赛及决赛。',
        '2.除小组赛外，其它各轮采取单场淘汰赛形式决出胜负，未能分出胜负，双方须完成上、下半场各15分钟的加时赛，加时赛进球较多者胜出；若仍未分出胜负，则双方互罚点球决出胜负',
        '3.小组赛阶段共32支出球队参加，小组赛分成8组，每组4队，4支球队进行单循环的6场比赛，小组前两名晋级十六强'
      ],
      list2: [
        '1.每队胜一场得3分，平一场得1分，负一场得0分',
        '2.小组赛结束，积分多的队名次靠前',
        '3.如果两队或两队以上几分相当，依下列顺序排列名次（同分情况下有一条排名规则写一条）',
        'a）净胜球',
        'b）总进球数',
        'c）相互战绩（相互对战几分，相互对战净胜球，相互对战总进球。）',
        'd）公平竞赛积分（比赛中得到的红黄牌会减少公平竞赛分数，黄牌减1分，第二张黄牌导致的红牌减3分，直接红牌减4分，黄牌加直接红牌减5分，单场比赛中一位球员只会因上述始终情况之一扣分）',
        'e）以上方法仍无法决定名次时，将由国际足球抽签决定'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.explanation{
  .msg{
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
    h3{
      font-size: 17px;
      line-height: 22px;
      padding: 0;
      color: #8B8B8B;
    }
    h4{
      font-size: 12px;
      line-height: 16px;
      color: #8B8B8B;
      padding: 10px 0;
    }
    ul{
      li{
        padding: 5px 0;
        p{
          font-size: 12px;
          line-height: 16px;
          color: #8B8B8B;
        }
      }
    }
  }
}
</style>

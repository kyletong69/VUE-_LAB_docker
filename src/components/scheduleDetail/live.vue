<template>
  <div class="live">
      <div class="live__tabs">
        <li v-for="(item, index) in tabList" :class="{active: item.value === tabValue}" :key="index">
          <p @click="changeTab(item.value)">{{item.title}}</p>
          <!-- <router-link :to="item.value">{{item.title}}</router-link> -->
        </li>
      </div>
      <!-- NOTE 有資料狀態 -->
      <div v-if="!checkStatus()" class="live__content">
        <div v-if="tabValue === 'text'" class="live__content__text">
          <li v-for="(item, index) in textList" :key="index">
            <img :src="getImg(item.icon)" alt="">
            <p>{{item.msg}}</p>
            <!-- <p :style="setColor(item.style)">{{item.msg}}</p> -->
          </li>
        </div>
        <table v-else class="live__content__event">
          <tbody>
            <tr v-for="(item, index) in eventList" :key="index">
              <td>
                <div v-if="checkEmpty(item.home)" class="homePlayer">
                  {{item.home}}
                  <img :src="getImg(item.homeIcon)" alt="">
                </div>
              </td>
              <td :class="{ timeline: !checkEmpty(item.status) }">
                <div class="status">
                  <div v-if="checkEmpty(item.status)">
                    <img v-if="item.status !== 'red'" :src="getImg(item.statusIcon)" alt="">
                    <div v-else class="red"></div>
                  </div>
                  <div v-else class="time">{{item.time}}</div>
                </div>
              </td>
              <td>
                <div v-if="checkEmpty(item.away)" class="awayPlayer">
                  <img :src="getImg(item.awayIcon)" alt="">
                  {{item.away}}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- NOTE 無資料狀態 -->
      <div v-else class="live__content noStart">
        <div v-if="tabValue === 'text'" class="live__content__text">
          <li v-for="(item, index) in textList" :key="index">
            <img :src="getImg(item.icon)" alt="">
            <p>{{item.msg}}</p>
          </li>
        </div>
        <div v-else class="live__content__event ">
          <img src="@/assets/img/water.png" alt="icon">
          <p>比赛尚未开始，喝口水等待一下</p>
        </div>
      </div>
      <!-- QA footer 部分 未開賽是否要顯示待討論 -->
      <div v-if="!checkStatus()" class="live__footer">
        <li v-for="(item, index) in footerList" :key="index">
          <img :src="getImg(item.icon)" alt="">
          <p>{{item.title}}</p>
          <!-- <router-link :to="item.value">{{item.title}}</router-link> -->
        </li>
      </div>
  </div>
</template>

<script>
import { checkEmpty } from '@/lib/checker'
export default {
  name: 'live',
  components: {},
  props: {
    scheduleStatus: String
  },
  data () {
    return {
      tabList: [
        { title: '文字直播', value: 'text' },
        { title: '重要事件', value: 'event' }
      ],
      tabValue: 'text',
      textList: [],
      // NOTE home, homeIcon => 改成 homeTarget: [], away, awayIcon 也一樣，可能有多筆球員同時觸發事件
      eventList: [
        { status: 'start', statusIcon: 'talk', home: '', homeIcon: '', time: '', away: '', awayIcon: '' },
        { status: 'red', statusIcon: 'u1988', home: '', homeIcon: '', time: '', away: '', awayIcon: '' },
        { status: '', statusIcon: '', home: '奥布里安', homeIcon: 'u1864', time: '29', away: '', awayIcon: '' },
        { status: '', statusIcon: '', home: '', homeIcon: '', time: '39', away: 'H·曼西拉', awayIcon: 'u1864' },
        { status: '', statusIcon: '', home: 'J·埃斯科巴', homeIcon: 'u1868', time: '43', away: '', awayIcon: '' },
        { status: '', statusIcon: '', home: '', homeIcon: '', time: '45', away: 'H·曼西拉', awayIcon: 'u1844' },
        { status: '', statusIcon: '', home: 'J·埃斯科巴', homeIcon: 'u1836', time: '75', away: '', awayIcon: '' },
        { status: 'red', statusIcon: 'u1988', home: '', homeIcon: '', time: '', away: '', awayIcon: '' },
        { status: 'end', statusIcon: 'talk', home: '', homeIcon: '', time: '', away: '', awayIcon: '' }
      ],
      footerList: [
        { title: '進球', icon: 'u1836' },
        { title: '點球', icon: 'u1840' },
        { title: '點球未進', icon: 'u1844' },
        { title: '烏龍球', icon: 'u1848' },
        { title: '助攻', icon: 'u1852' },
        { title: '角球', icon: 'u1856' },
        { title: '換人', icon: 'u1860' },
        { title: '黃牌', icon: 'u1864' },
        { title: '紅牌', icon: 'u1868' },
        { title: '兩黃一紅', icon: 'u1872' }
      ]
    }
  },
  methods: {
    changeTab (val) {
      this.tabValue = val
    },
    /** @summary 抓 img
    * @param {string} url img 檔名
    * @return img path
    */
    getImg (url) {
      if (url === '') return
      return `${require(`@/assets/img/${url}.png`)}`
    },
    setColor (str) {
      return `background: ${str};`
    },
    checkEmpty (str) {
      return checkEmpty(str)
    },
    /** @summary 判斷 store scheduleStatus
    * @return 未開賽 => true, 已開賽、已結束 => false, 之後參數改英文
    */
    checkStatus () {
      if (this.scheduleStatus === '未開賽') return true
      return false
    }
  },
  mounted () {
    console.log(`live : ${this.scheduleStatus}`)
    setTimeout(() => {
      if (this.checkStatus()) {
        this.textList = [{ msg: `大家好，欢迎收看球球体育直播，球员们正在热身，比赛即将开始`, icon: 'talk', style: 'gainsboro' }]
      } else {
        this.textList = [
          { msg: `本场比赛结束，最终比分为3-2，感谢大家关注球球体育，下次再会！`, icon: 'talk', style: 'gainsboro' },
          { msg: `90'-随着裁判一声哨响，下半场结束，目前比分3-2`, icon: 'talk', style: 'gainsboro' },
          { msg: `90'-第八个角球-（维多萨）`, icon: 'u1856', style: '' },
          { msg: `89'-第5张黄牌-（索菲亚斯拉维亚）`, icon: 'u1864', style: '' },
          { msg: `88'-第5个进球-（索菲亚斯拉维亚）`, icon: 'u1836', style: '' },
          { msg: `0:0角球数70:00-79：59`, icon: 'talk', style: 'gainsboro' },
          { msg: `0:0角球数70:00-79：59`, icon: 'talk', style: 'gainsboro' },
          { msg: `本场比赛场地情况：良好。`, icon: 'talk', style: 'gainsboro' },
          { msg: `大家好，欢迎收看球球体育直播，球员们正在热身，比赛即将开始`, icon: 'talk', style: 'gainsboro' }
        ]
      }
    }, 10)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/color.scss";
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/element.scss";
.live {
  height: 100%;
  &__tabs {
    display: flex;
    justify-content: center;
    padding: 15px 0;
    li {
      @include btn(100px, 25px, 0px);
      margin: 0;
      border: 1px solid $white-30;
      p {
        @include text(15px, 600);
        color: $white-30;
      }
      &.active {
        // background: $dodger-blue;
        border-color: $dodger-blue;
        p {
          color: $white;
        }
      }
    }
  }
  &__content {
    padding-bottom: 10px;
    height: calc(100% - 127px);
    overflow-x: auto;
    &__text {
      li {
        display: flex;
        align-items: center;
        margin: 10px 20px;
        padding-bottom: 2px;
        min-height: 32px;
        border-bottom: 1px solid $white-06;
        p {
          @include text(12px, normal);
          display: flex;
          align-items: center;
          padding-right: 20px;
          color: $white;
          // padding: 10px;
          // border-radius: 5px;
          // border: 1px solid gray;
          text-align: left;
          line-height: 16px;
        }
      }
      img {
        margin-right: 10px;
        // margin: 10px 20px 10px 10px;
        height: 25px;
        border-radius: 50%;
      }
    }
    &__event {
      margin: 5px;
      width: calc(100% - 10px);
      .homePlayer, .awayPlayer {
        @include text(12px, normal);
        display: flex;
        align-items: center;
        padding: 10px;
        color: $white;
        // border-radius: 5px;
        // border: 1px solid gainsboro;
        img {
          margin: 0 10px;
          width: 16px;
          border-radius: 50%;
        }
      }
      .time {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 20px;
        height: 20px;
        color: $taupe-gray;
        border-radius: 50%;
        // border: 1px solid gainsboro;
        background: $jet-1;
        box-shadow: 0 4px 5px 0 $black-14, 0 1px 10px 0 $black-12, 0 2px 4px -1px $black-20;
        font-size: 12px;
        transform: scale(0.83);
      }
      .homePlayer {
        justify-content: flex-end;
      }
      .awayPlayer {
        justify-content: flex-start;
      }
      .status {
        position: relative;
        display: flex;
        justify-content: center;
        z-index: 1;
        img {
          margin: 5px 0;
          height: 25px;
        }
        .red {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: $fire-engine-red;
        }
      }
      .timeline {
        position: relative;
        padding: 20px 0;
        &::after {
          content: '';
          position: absolute;
          margin-left: -1px;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background-color: $white-06;
        }
      }
    }
    &.noStart {
      .live__content__event {
        img {
          margin: 90px 0 28px;
        }
        p {
          @include text(12px, normal);
          display: flex;
          align-items: center;
          justify-content: center;
          color: $white;
          &::before {
            content: url("~@/assets/img/talk.png");
            margin-right: 10px;
          }
        }
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 10px;
    // margin: 5px;
    // border-radius: 5px;
    // border: 1px solid gainsboro;
    background: $white-06;
    li {
      display: flex;
      align-items: center;
      padding: 10px 0;
      flex: 0 1 20%;
      p {
        margin-left: 5px;
        color: $taupe-gray;
        font-size: 12px;
        transform: scale(0.83);
      }
      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }
  }
}
</style>

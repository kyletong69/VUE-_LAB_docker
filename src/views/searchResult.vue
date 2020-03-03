<template>
  <div class="searchResult">
    <searchBar
    :type="type" />
    <div class="result">
      <ul class="sort-bar">
        <li class="sort-btn"
          v-for="(item, index) in sort"
          :class="{active : activeItem === index}"
          @click="activeItem = index"
          :key="index">
          <p>{{item.name}}</p>
        </li>
      </ul>
      <ul class="result-area">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <router-link
          to="#"
          tag="li"
          class="result-item"
          replace
          v-for="(item, index) in list" :key="index">
          <figure>
            <img src="https://picsum.photos/60/60" alt="icon">
          </figure>
          <div class="detail">
            <h6>中国超级联赛</h6>
            <p>Zhongguo Chaoji Liansai</p>
          </div>
        </router-link>
      </van-list>
      </ul>
    </div>
  </div>
</template>

<script>
import searchBar from '../components/home/searchBar'
import { List } from 'vant'
export default {
  name: 'searchResult',
  components: {
    searchBar,
    [List.name]: List
  },
  data () {
    return {
      keyWord: this.$route.query.keyword,
      type: 'result',
      list: 5,
      sort: [
        {
          name: '全部',
          type: 'all'
        },
        {
          name: '赛事',
          type: 'schedule'
        },
        {
          name: '球队',
          type: 'team'
        },
        {
          name: '球员',
          type: 'player'
        }
      ],
      activeItem: 0,
      history: ['中超', '江苏苏宁', '江苏苏宁'],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        this.finished = true
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.searchResult{
  .result{
    padding: 5px;
    box-sizing: border-box;
  }
  .sort-bar{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .sort-btn{
      width: 25%;
      padding: 10px 0;
      border-top:  1px solid #333;
      border-bottom:  1px solid #333;
      border-left:  1px solid #333;
      &:last-child{
        border-right:  1px solid #333;
      }
    }
    .active{
      background-color: #fa8;
    }
  }
  .result-area{
    .result-item{
      padding: 5px;
      box-sizing: border-box;
      margin-bottom: 4px;
      border: 1px solid #ccc;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      @include imgObjectFit(60px);
      figure{
        margin: 0 20px 0 0;
      }
      .detail{
        text-align: left;
        h6{
          font-size: 16px;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>

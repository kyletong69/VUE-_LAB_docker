<template>
  <div class="welcome">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in forwardImg" :key="index">
        <div class="hero" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="hero" :style="{ backgroundImage: 'url(' + lastImg.url + ')' }">
          <div class="hero-warp">
            <figure>
              <img src="https://picsum.photos/164/164" alt="logo">
            </figure>
            <h1>球球体育</h1>
            <p>带你走进一场体育赛事盛宴</p>
          </div>
          <a href="javascript:;" @click.prevent="goHome" class="start-btn">立即开启</a>
          <div class="notify-area">
            <van-checkbox v-model="checked" class="notify">
              <span class="text">您已阅读并同意</span>
            </van-checkbox>
            <a href="http://192.168.1.232" target="_blank" class="declare">《球球用户隐私声明》</a>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Checkbox } from 'vant'
export default {
  name: 'welcome',
  components: {
    [Checkbox.name]: Checkbox
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          // 客制小圓點樣式
          renderBullet: this.renderBullet
        }
      },
      imgSrc: 'https://picsum.photos/414/736',
      // 勾選狀態
      checked: true,
      forwardImg: [],
      lastImg: {}
    }
  },
  methods: {
    renderBullet: function (index, className) {
      return `<span style="background: #fff;width: 10px;height: 10px" class="dots ${className}"></span>`
    },
    goHome () {
      if (!this.checked) return
      this.$router.push({
        path: '/home'
      })
    }
  },
  mounted () {
    fetch('http://192.168.1.232:8787/' + 'announcement/LS').then(res => res.json()).then(obj => {
      let list = obj.payload
      this.lastImg = list.pop()
      this.forwardImg = list
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout';
.welcome{
  width: 100%;
  height: 100vh;
  .hero{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-image: url('https://picsum.photos/414/736');
    padding: 100px 0 0;
    background-position: center;
    background-size: cover;
    .hero-warp{
      @include imgObjectFit(164px);
      figure{
        margin: auto;
        img{
          border-radius: 10px;
        }
      }
      h1,p{
        color: #fff;
        font-size: 16px;
        line-height: 1.5;
      }
      h1{
        font-size: 20px;
        line-height: 2;
        font-weight: bold;
      }
    }
    a.start-btn{
      margin: 10px auto;
      display: block;
      width: 120px;
      box-sizing: border-box;
      border: 1px solid #58BFFF;
      background: rgba(88,191,255,0.15);
      color: #fff;
      padding:15px 20px;
      border-radius: 5px;
      &:hover{
        opacity: .8;
      }
    }
  }
  .swiper-pagination{
    bottom: 10%;
  }
  .notify-area{
    margin-top: 200px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .notify{
      .text{
        color: #fff;
      }
    }
    .declare{
      color: #A3D2FF;
    }
  }
}
</style>

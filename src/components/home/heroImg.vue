<template>
  <div class="banner">
  <swiper :options="swiperOption">
    <swiper-slide
      v-for="(slide, index) in banners"
      :key="index">
        <figure class="banner-border">
          <img :src="slide.url" alt="icon">
        </figure>
      </swiper-slide>
    <div class="swiper-pagination swiper-dots" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'heroImg',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        dynamicBullets: true,
        autoplay: {
          delay: 2000
        }
      },
      banners: []
    }
  },
  computed: {
  },
  mounted () {
    fetch('http://192.168.1.232:8787/announcement/HB').then(res => res.json()).then(json => {
      this.banners = json.payload
    })
  }
}
</script>

<style lang="scss" scoped>
.banner{
  .banner-border{
    height: 200px;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination{
    width: 30%;
    left: auto;
    right: 0;
  }
}

</style>

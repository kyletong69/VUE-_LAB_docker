<template>
  <div class="logo">
    <figure>
      <img src="@/assets/img/FIFA.png" alt="FIFA">
    </figure>
    <h5>FIFA排名</h5>
  </div>
</template>

<script>
export default {
  name: 'fifaLogo'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color';
@import '@/assets/scss/layout';
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
</style>

<template>
  <div class="main-carousel">
    <el-carousel trigger="click" height="320px" class="main-el-carousel">
      <el-carousel-item v-for="item in 4" :key="item" class="main-carousel-item">
        <img src="../../assets/images/1.jpg" alt="" width="1000" height="320" style="border-radius: 3px;">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'main-carousel',
  data () {
    return {
      imageList: [{
        src: '../../assert/images/1.jpg'
      },
      {
        src: '../../assert/images/1.jpg'
      },
      {
        src: '../../assert/images/1.jpg'
      },
      {
        src: '../../assert/images/1.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/common';
  .main-carousel {
    width: 100%;
    div:nth-child(2n) {
      background-color: aqua;
    }
    div:nth-child(2n+1) {
      background-color: darkgray;
    }
    .main-el-carousel {
      overflow-y: hidden;
      @include content;
    }
  }
</style>

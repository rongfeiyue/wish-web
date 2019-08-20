<template>
  <div class="main-carousel">
    <el-carousel trigger="click" height="320px" class="main-el-carousel">
      <el-carousel-item v-for="item in 4" :key="item" class="main-carousel-item">
        <h1>{{ item }}</h1>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'main-carousel'
}
</script>

<style lang="scss" scoped>
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
    }
  }
</style>

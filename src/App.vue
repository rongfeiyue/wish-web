<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'assets/css/reset';
  body {
    line-height: 1;
    height: 100%;
    background: url("assets/images/timg.png") no-repeat fixed;
    background-size: cover;
    opacity: 0.6;
  }
</style>

<template>
  <div id="main">
    <el-container>
      <el-header>
        <p-header></p-header>
      </el-header>
      <el-main>
        <p-main></p-main>
      </el-main>
      <el-footer>
        <p-footer></p-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '../components/public_modules/Header'
import Main from '../components/public_modules/Main'
import Footer from '../components/public_modules/Footer'
export default {
  name: 'Main',
  components: {
    'p-header': Header,
    'p-main': Main,
    'p-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
<style>
  .el-header, .el-main, .el-footer {
    padding: 0;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .el-header {
    height: 72px !important;
    background-color: darkgray;
  }
</style>

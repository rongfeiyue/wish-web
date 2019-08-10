<template>
  <div id="main" class="main">
    <el-container>
      <el-header class="ppp_header">
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
    width: 100%;
    box-shadow: 0 2px 16px 0 rgba(239, 232, 242, 0.7);
  }
  .el-main {
    width: 1200px;
    margin: 0 auto;
  }
  .el-footer {
    width: 100%;
  }
  .el-container {
    width: 100%;
  }
  #main {
    width: 100%;
  }
</style>

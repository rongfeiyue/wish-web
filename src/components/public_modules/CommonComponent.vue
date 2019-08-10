<template>
  <div id="common_component" class="common_component">
    <el-container>
      <el-header>
        <p-header></p-header>
      </el-header>
      <el-main>
        <slot name="common_content"></slot>
      </el-main>
      <el-footer>
        <p-footer></p-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '../public_modules/Header'
import Footer from '../public_modules/Footer'
export default {
  name: 'CommonComponent',
  components: {
    'p-header': Header,
    'p-footer': Footer
  }
}
</script>

<style scoped>
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
  #common_component {
    width: 100%;
    background: white;
  }
</style>

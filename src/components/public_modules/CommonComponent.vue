<template>
  <div id="common_component" class="common_component">
    <el-container>
      <el-header>
        <p-header></p-header>
      </el-header>
      <el-main>
        <div class="component_wrapper">
          <el-scrollbar style="height: inherit;" :native="false">
            <div class="concrete_content">
              <slot name="common_content"></slot>
            </div>
          </el-scrollbar>
        </div>
      </el-main>
      <el-footer>
        <p-footer></p-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default {
  name: 'CommonComponent',
  components: {
    'p-header': Header,
    'p-footer': Footer
  }
}
</script>
<style>
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
</style>
<style scoped lang="scss">
  .common_component {
    width: 100%;
    height: 100%;
    background: white;
    .component_wrapper {
      height: 100%;
      min-height: inherit;
      background: #F5F6F7;
      .concrete_content {
        width: 1000px;
        height: inherit;
        margin: 10px auto;
      }
    }
    .el-header, .el-main, .el-footer, .el-container {
      width: 100%;
      height: 100%;
      padding: 0;
    }
    .el-header {
      height: 60px !important;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    }
    .el-main {
      height: 100%;
      min-height: calc(100vh - 120px);
    }
    .el-footer {
      height: 50px !important;
    }
  }
</style>

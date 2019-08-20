<template>
  <div id="common_detail" class="common_detail">
    <common-component>
      <template slot="common_content">
        <div>
          <el-row style="margin-top: 20px;">
            <el-col :span="16">
              <div class="common_left">
                这里面写内容
              </div>
            </el-col>
            <el-col :span="8">
              <div class="common_right">yunzhi
                这里面放广告
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
    </common-component>
  </div>
</template>

<script>
import CommonComponent from './CommonComponent'
export default {
  name: 'CommonDetail',
  components: {
    CommonComponent
  }
}
</script>

<style lang="scss" scoped>
  .common_detail {
    .common_left {
      height: 100%;
      border: 1px solid #e4e3e3;
      margin: 0 20px 20px 0;
      box-sizing: border-box;
    }
    .common_right {
      height: 500px;
      border: 1px solid #e4e3e3;
      margin: 0 0 20px 0;
      box-sizing: border-box;
    }
  }
</style>

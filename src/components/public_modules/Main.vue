<template>
  <div class="wish-main">
    <common-component>
      <template slot="common_content">
        <div style="margin-bottom: 20px">
          <main-carousel></main-carousel>
        </div>
        <div>
          <el-row>
            <el-col :span="16">
              <el-row>
                <div style="margin: 0 20px 20px 0;"><main-wish></main-wish></div>
              </el-row>
              <el-row>
                <div style="margin: 0 20px 20px 0"><main-blessing></main-blessing>
                </div>
              </el-row>
            </el-col>
            <el-col :span="8">
              <div>
                <main-rolling></main-rolling>
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
    </common-component>
  </div>
</template>

<script>
import MainCarousel from './main_modules/MainCarousel'
import MainWish from './main_modules/MainWish'
import MainBlessing from './main_modules/MainBlessing'
import MainRolling from './main_modules/MainRolling'
import CommonComponent from '../public_modules/CommonComponent'
export default {
  name: 'wish-main',
  components: {
    MainCarousel,
    MainWish,
    MainBlessing,
    MainRolling,
    CommonComponent
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="main-wish">
    <main-content title="许愿">
      <template slot="content">
        <el-row>
          <el-col :span="8">
            <div style="height: 175px; width: 100%; border: 1px solid red; box-sizing: border-box">a</div>
          </el-col>
          <el-col :span="8">
            <div style="height: 175px; width: 100%; border: 1px solid red; box-sizing: border-box">a</div>
          </el-col>
          <el-col :span="8">
            <div style="height: 175px; width: 100%; border: 1px solid red; box-sizing: border-box">a</div>
          </el-col>
        </el-row>
      </template>
    </main-content>
  </div>
</template>

<script>
import MainContent from './MainContent'
export default {
  name: 'main-wish',
  components: {
    MainContent
  }
}
</script>

<style lang="scss" scoped>
  .main-wish {
    width: 100%;
    height: 240px;
  }
</style>

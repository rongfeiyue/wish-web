<template>
  <div id="loginAndRegister" class="loginAndRegister">
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="first">登录</el-tab-pane>
        <el-tab-pane label="注册" name="second">注册</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginRegister'
}
</script>

<style scoped lang="scss">
  @import '../../assets/css/common';
  .loginAndRegister {
    width: 100%;
    height: 100%;
    .content {
      margin: 0 auto;
      width: 300px;
      height: 300px;
    }
  }
</style>

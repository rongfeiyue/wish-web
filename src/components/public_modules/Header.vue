<template>
  <div class="wish-header">
    <div class="header-content">
      <el-row>
        <el-col :span="2">
          <div class="logo">
            这有个logo
          </div>
        </el-col>
        <el-col :span="20">
          <div class="search">
            <div>这有个搜索</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="login">
            <img src="../../assets/icons/personal.png"/>
            <span>登录</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wish-header'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/common';
  .wish-header {
    width: 100%;
    height: 72px;
    background-color: #fffbfb;
    .header-content {
      height: 40px;
      width: 1200px;
      margin: 0 auto;
      padding: 16px 0;
      .logo {
        width: 100px;
        height: 40px;
        border: 1px solid green;
        box-sizing: border-box;
        @include layout-center
      }
      .search {
        height: 40px;
        @include layout-vertical;
        div {
          @include layout-center
        }
      }
      .login {
        height: 40px;
        cursor: pointer;
        float: right;
        display: flex;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          margin-right: 5px;
        }
        span {
          @include font-normal;
        }
        span:hover {
          @include font-normal-hover
        }
      }
    }
  }
</style>

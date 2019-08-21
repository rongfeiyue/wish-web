<template>
  <div class="wish-header">
    <div class="header-content">
      <el-row>
        <el-col :span="2">
          <div class="logo" @click="goRoot">
            <!--<el-image style="width: 100px; height: 40px;" src="../../assets/images/logo.jpg"></el-image>-->
            <img src="../../assets/images/logo.jpg" alt="" width="100" height="40">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="menu">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/list/type2' }">列表</el-breadcrumb-item>
              <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="search">
            <el-input placeholder="请输入内容" style="width: 390px;">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="login" @click="goLogin">
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
  name: 'wish-header',
  methods: {
    goLogin () {
      this.$router.push({path: '/login'})
    },
    goRoot () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/common';
  .wish-header {
    width: 100%;
    height: 62px;
    position: fixed;
    @include content;
    border-radius: 0;
    .header-content {
      background: #fff;
      height: 40px;
      width: 1200px;
      margin: 0 auto;
      padding: 10px 0;
      .logo {
        width: 100px;
        height: 40px;
        cursor: pointer;
        @include layout-center
      }
      .menu {
        height: 40px;
        @include layout-center;
        margin-left: 20px;
      }
      .search {
        height: 40px;
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
      }
    }
  }
</style>

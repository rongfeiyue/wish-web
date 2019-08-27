<template>
  <div class="wish-header">
    <div class="header-content">
      <el-row style="height: 40px; line-height: 40px;">
        <el-col :span="2">
          <div class="logo" @click="goRoot">
            <!--<el-image style="width: 100px; height: 40px;" src="../../assets/images/logo.jpg"></el-image>-->
            <img src="../../assets/images/logo.jpg" alt="" width="100" height="40">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="menu">
            <div>s</div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/list/type2' }">列表</el-breadcrumb-item>
              <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="search">
            <el-input placeholder="请输入内容" style="width: 390px;">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="login" @click="goLogin" v-if="userInfo.userId == ''">
            <img src="../../assets/icons/personal.png" v-if="userInfo.userId == ''"/>
            <span>登录</span>
          </div>
          <div class="user_info" v-if="userInfo.userId != ''">
            <el-avatar :size="medium" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
            <div class="username">
              <span :title="userInfo.username">{{userInfo.username | subString(3)}}</span></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wish-header',
  data () {
    return {
      userInfo: {
        username: '荣飞跃少时诵诗书所',
        userId: '123'
      }
    }
  },
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
    height: 60px;
    position: fixed;
    @include content;
    border-radius: 0 !important;
    .header-content {
      background: #fff;
      width: 1000px;
      margin: 0 auto;
      padding: 9px 0;
      .logo {
        width: 100px;
        cursor: pointer;
        @include layout-center
      }
      .menu {
        @include layout-center;
        margin-left: 20px;
      }
      .login {
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
      .user_info {
        @include layout-center;
        .username {
          margin-left: 10px;
          @include font-title;
        }
      }
    }
  }
</style>

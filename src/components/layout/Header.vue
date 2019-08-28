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
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/list/type2' }">列表</el-breadcrumb-item>
              <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :span="13">
          <div class="search">
            <el-input placeholder="请输入内容" style="width: 390px;">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="login" @click="goLogin" v-if="userInfo.id == ''">
            <img src="../../assets/icons/personal.png" v-if="userInfo.id == ''"/>
            <span>登录</span>
          </div>
          <div class="user_info" v-if="userInfo.id != ''">
            <el-button type="primary" size="small" style="margin-right: 20px;" @click="write">写一篇</el-button>
            <el-avatar size="medium" :src="avatar" icon="el-icon-user-solid" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12)"></el-avatar>
            <div class="username">
<!--              <span :title="userInfo.username">{{userInfo.username | subString(3)}}</span>-->
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link" :title="userInfo.nickname">{{userInfo.nickname | subString(3)}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="myArticle"><i class="el-icon-user-solid"></i>我的文章</el-dropdown-item>
                  <el-dropdown-item command="setting"><i class="el-icon-setting"></i>设置</el-dropdown-item>
                  <el-dropdown-item command="logout"><i class="el-icon-bicycle"></i>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'wish-header',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    avatar () {
      if (this.userInfo.id) {
        return `/api/p/${this.userInfo.id}`
      }
      return ''
    }
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    goLogin () {
      this.$router.push({path: '/login'})
    },
    goRoot () {
      this.$router.push({path: '/'})
    },
    write () {
      this.$router.push({path: '/edit'})
    },
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.$confirm('确认退出？')
            .then(_ => {
              // TODO
              this.setUserInfo({
                id: '',
                username: '',
                nickname: '',
                avatar: ''
              })
            })
            .catch(_ => {})
          break
        case 'setting':
          this.$router.push({path: '/u/setting'})
          break
        default:
          break
      }
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
        @include layout-center;
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

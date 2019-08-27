<template>
  <div id="login" class="login">
    <div class="login_cover">
      <div class="login_form">
        <el-row style="text-align: center">
          <el-col :span="24" class="title">
            <p>River</p>
          </el-col>
          <el-col :span="24">
            <el-input size="medium" v-model="loginForm.username" placeholder="请输入用户名" suffix-icon="el-icon-warning" class="username"></el-input>
          </el-col>
          <el-col :span="24">
            <el-input size="medium" v-model="loginForm.password" type="password" placeholder="请输入密码" suffix-icon="el-icon-warning" class="password"></el-input>
          </el-col>
          <el-col :span="24">
            <el-button @click="login" size="mini" class="button">登录</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {login} from '../base/api'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    login () {
      if (this.loginForm.username && this.loginForm.password) {
        login({
          username: this.loginForm.username,
          password: this.loginForm.password
        }).then(res => {
          if (res) {
            this.$message({
              message: '登录成功',
              type: 'success',
              duration: '1000'
            })
            this.setUserInfo(res)
            this.$router.push({path: '/'})
          } else {
            this.$message('用户名或密码错误')
          }
        }).catch(e => {
          alert(e)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
    background: #F0F3F8;
    .login_cover {
      width: 100%;
      height: 100%;
      background: rgba(255,251,255,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      .login_form {
        width: 360px;
        height: 320px;
        border: rgba(208,181,245,0.7) 1px solid;
        box-shadow: 0 3px 10px rgba(0,0,0,.6);
        border-radius: 5px;
        div {
          width: 100%;
        }
        .el-col {
          height: 80px;
          .el-input {
            line-height: 80px;
          }
        }
        .title {
          p {
            line-height: 80px;
          }
        }
        .username {
          width: 240px;
        }
        .password {
          width: 240px;
        }
        .button {
          width: 80px;
        }
      }
    }
  }
</style>

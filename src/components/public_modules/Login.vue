<template>
  <div id="login" class="login">
    <div class="login_cover">
      <div class="login_form">
        <div class="title">
          <p>River</p>
        </div>
        <div>
          <input type="text">
          <input type="password">
          <button>登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    z-index: -10;
    zoom: 1;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background: url("../../assets/images/timg.png") no-repeat center 0;
    .login_cover {
      width: 100%;
      height: 100%;
      background: rgba(255,251,255,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      .login_form {
        width: 360px;
        height: 500px;
        border: rgba(208,181,245,0.7) 1px solid;
        box-shadow: 0 3px 10px rgba(0,0,0,.6);
        border-radius: 5px;
        div {
          width: 100%;
        }
        .title {
          height: 120px;
          p {

          }
        }
      }
    }
  }
</style>

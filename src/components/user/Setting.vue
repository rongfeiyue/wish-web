<template>
  <div class="setting" id="setting">
    <common-component>
      <template slot="common_content">
        <el-page-header @back="goBack"></el-page-header>
        <div class="setting-content">
          <div class="edit-info">
            <el-row>
              <el-col :span="24">
                <p class="info-title">个人信息</p>
              </el-col>
              <el-col :span="24">
                <el-collapse>
                  <el-collapse-item title="头像">
                    <div class="info-avatar">
                      <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="showImage" :src="imageUrl" class="avatar choose">
                        <i v-else class="el-icon-plus avatar-uploader-icon choose"></i>
                      </el-upload>
                      <el-button v-if="showImage" @click="chooseFile" type="primary" icon="el-icon-edit" style="margin-left: 20px;" size="small" round>修改头像</el-button>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="用户名">
                    <el-input v-model="userEditInfo.username" placeholder="请输入用户名" :disabled="true"></el-input>
                  </el-collapse-item>
                  <el-collapse-item title="昵称">
                    <el-input v-model="userEditInfo.nickname" placeholder="请输入昵称"></el-input>
                  </el-collapse-item>
                  <el-collapse-item title="手机号">
                    <el-input v-model="userEditInfo.phone" placeholder="请输入手机号" maxlength="11" show-word-limit oninput="value=value.replace(/[^\d]/g,'')"></el-input>
                  </el-collapse-item>
                </el-collapse>
              </el-col>
              <el-col :span="24">
                <el-button v-show="showSave" @click="saveUserInfo" type="primary" size="medium" round style="margin-top: 30px;">保存</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </template>
    </common-component>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import lodash from 'lodash'
import CommonComponent from '../public_modules/CommonComponent'
import {saveUser} from '../../base/api'
import {UserInfo} from '../../vo/UserInfo'
export default {
  name: 'Setting',
  components: {
    CommonComponent
  },
  data () {
    return {
      imageUrl: '',
      showImage: false,
      userEditInfo: {},
      userEditInfoBak: {},
      showSave: false
    }
  },
  watch: {
    userEditInfo: {
      handler: function (data) {
        if (!lodash.isEqual(data, this.userEditInfoBak)) {
          this.showSave = true
        } else {
          this.showSave = false
        }
      },
      deep: true
    }
  },
  mounted () {
    if (this.userInfo.id) {
      this.showImage = true
      this.imageUrl = `/api/p/${this.userInfo.id}`
      this.userEditInfo = lodash.cloneDeep(this.userInfo)
      this.userEditInfoBak = lodash.cloneDeep(this.userInfo)
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    uploadUrl () {
      if (this.userInfo.id) {
        return `/api/p/upload/${this.userInfo.id}`
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.showImage = true
      this.setUserInfo(new UserInfo().set(this.userEditInfoBak))
      console.log('there')
    },
    beforeAvatarUpload (file) {
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png')
      const isLt1M = file.size / 1024 / 1024 < 1

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt1M) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return isJPG && isLt1M
    },
    goBack () {
      this.$router.go(-1)
    },
    chooseFile () {
      document.querySelector('.el-upload__input').click()
    },
    saveUserInfo () {
      debugger
      saveUser(this.userEditInfo).then(res => {
        this.$message({
          message: '保存成功',
          type: 'success',
          duration: '1000'
        })
        this.userEditInfoBak = lodash.cloneDeep(this.userEditInfo)
        this.userEditInfo = lodash.cloneDeep(this.userEditInfoBak)
        this.setUserInfo(new UserInfo().set(this.userEditInfo))
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/css/common';
  .setting {
    height: 100%;
    .disabled .el-upload--picture-card {
      display: none;
    }
    .setting-content {
      margin-top: 10px;
      @include content;
      .edit-info {
        padding: 30px;
        .info-title {
          @include font-title-big;
          margin-bottom: 30px;
        }
        .info-avatar {
          @include layout-center
        }
      }
    }
  }
</style>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

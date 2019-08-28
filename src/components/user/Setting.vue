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
                <el-divider></el-divider>
              </el-col>
              <el-col :span="24">
                <div class="info-avatar">
                  <el-upload
                    class="avatar-uploader"
                    ref="upload"
                    :action="uploadUrl"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :on-remove="handleRemove">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                  <el-button @click="chooseFile" type="primary" icon="el-icon-edit" style="margin-left: 20px;" size="small" round>修改头像</el-button>
                </div>
                <el-divider></el-divider>
              </el-col>
              <el-col :span="24">
                用户名
                <el-divider></el-divider>
              </el-col>
              <el-col :span="24">
                昵称
                <el-divider></el-divider>
              </el-col>
              <el-col :span="24">
                手机号
                <el-divider></el-divider>
              </el-col>
            </el-row>
          </div>
        </div>
      </template>
    </common-component>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CommonComponent from '../public_modules/CommonComponent'
export default {
  name: 'Setting',
  components: {
    CommonComponent
  },
  data () {
    return {
      imageUrl: ''
    }
  },
  mounted () {
    this.imageUrl = `/api/p/${this.userInfo.id}`
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    uploadUrl () {
      return `/api/p/upload/${this.userInfo.id}`
    }
  },
  methods: {
    handleRemove () {},
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(res)
      console.log(file)
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
      console.log(this.$refs)
      this.$refs.upload.submit()
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
        padding: 20px;
        .info-title {
          @include font-title-big
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

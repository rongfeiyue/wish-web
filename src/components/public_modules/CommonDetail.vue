<template>
  <div id="common_detail" class="common_detail">
    <common-component>
      <template slot="common_content">
        <el-page-header @back="goBack"></el-page-header>
        <el-row style="margin-top: 10px;">
          <el-col :span="6">
            <div style="margin-right: 10px;">
              <div class="detail-left" style="padding: 20px;">
                <div class="title">
                  <el-image style="width: 60px; height: 60px; border-radius: 50%;" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
                  <div style="padding-left: 10px;">
                    <div class="username">荣飞跃</div>
                    <div class="join">2019-08-21 创作</div>
                  </div>
                </div>
                <el-divider>作者</el-divider>
              </div>
              <div class="detail-left" style="padding: 20px; margin-top: 10px;">
                <div style="height: 300px;">1</div>
              </div>
              <div class="detail-left" style="padding: 20px; margin-top: 10px;">
                <div style="height: 300px;">1</div>
              </div>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="detail-center">
              <div>
                <p class="title">{{article.title}}</p>
                <div>编辑</div>
              </div>
              <el-divider></el-divider>
              <div class="content">
                <mavon-editor :ishljs="true" @change="changeData" v-html="article.content" :defaultOpen="defaultOpen" :subfield="false" :toolbarsFlag="false" :boxShadow="false" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-backtop target=".el-scrollbar__wrap"></el-backtop>
      </template>
    </common-component>
  </div>
</template>

<script>
import CommonComponent from './CommonComponent'
import { getDetail } from '../../base/api'

export default {
  name: 'CommonDetail',
  components: {
    CommonComponent
  },
  data () {
    return {
      article: {
        id: '',
        title: '',
        content: '',
        owner: ''
      },
      defaultOpen: 'preview'
    }
  },
  mounted () {
    let params = this.$route.params
    getDetail(params.type, params.id).then(res => {
      this.article = res
    })
  },
  methods: {
    changeData (value, render) {
      console.log(render)
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/common';
  .common_detail {
    height: 100%;
    .el-page-header:hover {
      color: #615dff;
    }
    .detail-left {
      @include content;
      .title {
        display: flex;
        align-items: start;
        .username {
          width: 100%;
          height: 40px;
          @include font-title;
          cursor: default !important;
        }
        .join {
          height: 20px;
          width: 100%;
          @include font-normal;
        }
      }
    }
    .detail-center {
      @include content;
      padding: 30px;
      .title {
        @include font-title-big;
      }
      .content {
        @include font-content;
      }
    }
  }
</style>

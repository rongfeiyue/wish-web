<template>
  <div id="common_detail" class="common_detail">
    <common-component>
      <template slot="common_content">
        <el-row style="margin-top: 10px;">
          <el-col :span="6">
            <div style="margin-right: 10px;">
              <div class="detail-left" style="padding: 20px;">
                <div class="title">
                  <el-image style="width: 60px; height: 60px; border-radius: 50%;" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
                  <div style="padding-left: 10px;">
                    <div class="username">荣飞跃</div>
                    <div class="join">2019-08-21 加入</div>
                  </div>
                </div>
                <el-divider>作者</el-divider>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div style="margin-right: 10px;">
              <div class="detail-center">
                <div class="title">
                  鉴往知来——跟着总书记学历史｜革命历史带来的启示
                </div>
                <el-divider></el-divider>
                <div class="content">
                  <mavon-editor :ishljs="true" @change="changeData" v-html="articleDetail" :defaultOpen="defaultOpen" :subfield="false" :toolbarsFlag="false" :boxShadow="false" />
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="detail_right">
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
export default {
  name: 'CommonDetail',
  components: {
    CommonComponent
  },
  data () {
    return {
      articleDetail: '<h1><a id="sdfsd_0"></a>sdfsd</h1>',
      defaultOpen: 'preview'
    }
  },
  methods: {
    changeData (value, render) {
      console.log(render)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/common';
  .common_detail {
    height: 100%;
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
      padding: 20px;
      .title {
        @include font-title-big;
      }
      .content {
        @include font-content;
      }
    }
    .detail_right {
      @include content;
      height: 500px;
      padding: 20px;
    }
  }
</style>

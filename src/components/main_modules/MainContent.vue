<template>
  <div class="main-content">
    <el-row>
      <el-col :span="12">
        <span class="title">{{title}}</span>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <span class="view-all" @click="viewAll">
          <a>查看全部<i class="el-icon-caret-right"></i></a>
        </span>
      </el-col>
    </el-row>
    <el-row>
      <slot name="content"></slot>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'main-content',
  props: {
    title: String,
    moreUrl: String
  },
  methods: {
    viewAll () {
      // TODO
      this.$router.push({path: `/list/type1`})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";
  .main-content {
    @include content;
    height: 100%;
    padding: 20px;
    .title {
      font-size: 24px;
      font-family: Microsoft YaHei;
    }
    .view-all {
      text-align: right;
      a {
        @include detail-link;
      }
    }
  }
</style>

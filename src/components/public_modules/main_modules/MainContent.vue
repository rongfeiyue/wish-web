<template>
  <div class="main-content">
    <el-row>
      <el-col :span="12">
        <span class="title">{{title}}</span>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <span class="view-all" @click="viewAll">查看全部</span>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    width: 100%;
    height: 100%;
    border: 1px solid #e4e3e3;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 20px;
    .title {
      font-size: 24px;
      font-family: Microsoft YaHei;
    }
    .view-all {
      font-size: 14px;
      color: #9a9a9a;
      cursor: pointer;
      text-align: right;
    }
    .view-all:hover {
      color: #888;
    }
  }
</style>

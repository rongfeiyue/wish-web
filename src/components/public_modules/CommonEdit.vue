<template>
  <div class="common-edit">
    <div class="edit-title">
      <el-row style="line-height: 58px;">
        <el-col :span="20">
          <el-input v-model="article.title" placeholder="请输入标题" style="margin-left: 20px; width: 90%;"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="handleSubmit">提&nbsp;&nbsp;交</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="edit-editor">
      <mavon-editor v-model="article.renderContent" :ishljs = "true" :toolbars="toolbars" @change="handleChange"/>
    </div>
  </div>
</template>

<script>
import { submitArticle } from '../../base/api'
export default {
  name: 'CommonEdit',
  data () {
    return {
      article: {
        title: '',
        content: '',
        renderContent: ''
      },
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: false, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  methods: {
    handleChange (value, render) {
      this.article.content = render
    },
    handleSubmit () {
      if (this.article.title && this.article.content) {
        submitArticle(this.article).then(res => {
          this.$router.push({path: `/list/type`})
        })
      }
    }
  }
}
</script>
<style>
  .v-note-op.shadow {
    position: fixed !important;
  }
  .v-note-panel.shadow {
    margin-top: 40px !important;
  }
</style>
<style scoped lang="scss">
  @import '../../assets/css/common';
  .common-edit {
    width: 100%;
    height: 100%;
    .edit-title {
      width: 100%;
      height: 60px;
      position: fixed;
      top: 0;
      z-index: 1501;
      background: white;
      @include content;
    }
    .edit-editor {
      margin-top: 60px;
    }
  }
</style>

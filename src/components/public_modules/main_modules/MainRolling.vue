<template>
  <div class="main-rolling">
    <main-content title="已实现">
      <template slot="content">
        <div v-for="item in comeTrueList" v-bind:key="item.id" class="come_true_item">
          <el-row>
            <el-col><span class="title">{{item.title}}</span></el-col>
            <el-col><span class="date">{{item.date}}</span></el-col>
          </el-row>
        </div>
      </template>
    </main-content>
  </div>
</template>

<script>
import MainContent from './MainContent'
export default {
  name: 'main-rolling',
  components: {
    MainContent
  },
  data () {
    return {
      comeTrueList: [{
        id: 1,
        title: '第1个标题',
        date: '2019-07-22 20:20:20'
      }, {
        id: 2,
        title: '第2个标题',
        date: '2019-07-22 20:20:20'
      }, {
        id: 3,
        title: '第3个标题',
        date: '2019-07-22 20:20:20'
      }, {
        id: 4,
        title: '第4个标题',
        date: '2019-07-22 20:20:20'
      }, {
        id: 5,
        title: '第5个标题',
        date: '2019-07-22 20:20:20'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-rolling {
    width: 100%;
    height: 500px;
    .come_true_item {
      width: 100%;
      border-bottom: 1px dashed gray;
      height: 50px;
      box-sizing: border-box;
      margin: 20px 0;
      .title {
        height: 30px;
        cursor: pointer;
        line-height: 30px;
      }
      .title:hover {
        color: #888;
      }
      .date {
        float: right;
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>

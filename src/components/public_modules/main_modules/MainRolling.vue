<template>
  <div class="main_rolling">
    <main-content title="已实现">
      <template slot="content">
        <div class="come_true">
          <el-scrollbar style="height: 450px;" wrap-class="come_true_list" :native="false">
            <div v-for="item in comeTrueNum" v-bind:key="item" class="come_true_item">
              <el-row>
                <el-col><span class="title" @click="goDetail(item)">{{'第' + item + '条'}}</span></el-col>
                <el-col><span class="date">{{'2019-08-10 10:26:0' + item}}</span></el-col>
              </el-row>
            </div>
          </el-scrollbar>
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
      comeTrueNum: 10
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push({path: `/detail/${id}`})
    }
  }
}
</script>

<style lang="scss" scoped>
  .main_rolling {
    width: 100%;
    height: 500px;
    .come_true {
      max-height: 450px;
      overflow: hidden;
      .come_true_list {
        max-height: 300px;
      }
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
  }
</style>

<template>
  <div id="common_list" class="common_list">
    <common-component>
      <template slot="common_content">
        <div>
          <el-row>
            <el-col :span="16">
              <div style="margin-right: 10px;">
                <div class="list_detail" v-for="i in count" v-bind:key="i">
                  <div style="padding: 20px;">
                    <div class="detail_header">
                      <el-image style="width: 30px; height: 30px; border-radius: 50%;" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
                      <div class="header_username">荣飞跃</div>
                    </div>
                    <div class="detail_content">
                      <p @click="goDetail(i)">这块应该放一个标题</p>
                    </div>
                    <div class="detail_footer">
                      <p>2019-08-21 12:39</p>
                    </div>
                  </div>
                </div>
                <el-pagination
                  small
                  layout="prev, pager, next"
                  :total="500">
                </el-pagination>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="list_right" style="height: 500px;">
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
    </common-component>
  </div>
</template>

<script>
import CommonComponent from './CommonComponent'
export default {
  name: 'CommonList',
  components: {CommonComponent},
  data () {
    return {
      count: 10
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push({path: `/detail/${id}`})
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/css/common';
  .common_list {
    height: 100%;
    .list_detail {
      @include content;
      margin-bottom: 10px;
      .detail_header {
        display: flex;
        justify-content: left;
        .header_username {
          @include header-username;
          padding-left: 8px;
        }
      }
      .detail_content {
        margin: 8px 0;
        padding-left: 38px;
        p {
          @include font-title;
        }
      }
      .detail_footer {
        width: 100%;
        height: 20px;
        line-height: 20px;
        text-align: right;
        p {
          @include font-small;
        }
      }
    }
    .list_right {
      @include content;
    }
  }
</style>

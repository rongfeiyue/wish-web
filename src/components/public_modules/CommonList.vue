<template>
  <div id="common_list" class="common_list">
    <common-component>
      <template slot="common_content">
        <el-page-header @back="goBack"></el-page-header>
        <el-row style="margin-top: 10px;">
          <el-col :span="16">
            <div style="margin-right: 10px;">
              <div class="list_detail" v-for="item in result.list" v-bind:key="item.id">
                <div style="padding: 20px;">
                  <div class="detail_header">
                    <el-image style="width: 30px; height: 30px; border-radius: 50%;" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
                    <div class="header_username">{{item.owner}}</div>
                  </div>
                  <div class="detail_content">
                    <p @click="goDetail(2, item.id)">{{item.title}}</p>
                  </div>
                  <div class="detail_footer">
                    <p>{{item.createTime}}</p>
                  </div>
                </div>
              </div>
              <el-pagination
                small
                layout="prev, pager, next"
                :total="result.count">
              </el-pagination>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="list_right">
              <login-register></login-register>
            </div>
          </el-col>
        </el-row>
      </template>
    </common-component>
  </div>
</template>

<script>
import CommonComponent from './CommonComponent'
import LoginRegister from './LoginRegister'
import { listArticle } from '../../base/api'
export default {
  name: 'CommonList',
  components: {
    CommonComponent,
    LoginRegister
  },
  mounted () {
    this.getList()
  },
  data () {
    return {
      params: {
        type: '1',
        status: '1',
        page: 1,
        rows: 10
      },
      result: {
        count: 10,
        list: []
      }
    }
  },
  methods: {
    goDetail (type, id) {
      this.$router.push({path: `/a/${id}`})
    },
    getList () {
      listArticle(this.params).then(res => {
        this.result.count = res.count
        this.result.list = res.list
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/css/common';
  .common_list {
    height: 100%;
    .el-page-header:hover {
      color: #615dff;
    }
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
    .list_detail:hover {
      border: 1px solid #615dff;
    }
    .list_right {
      @include content;
    }
  }
</style>

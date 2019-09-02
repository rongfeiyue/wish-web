<template>
  <div class="main_rolling">
    <main-content title="最新">
      <template slot="content">
        <div class="come_true">
          <el-scrollbar style="height: 550px; overflow-x: hidden;" wrap-class="come_true_list" :native="false">
            <div v-for="item in list" v-bind:key="item.id" class="come_true_item">
              <el-row>
                <el-col><span class="title" @click="goDetail(item.id)">{{item.title}}</span></el-col>
                <el-col><span class="date">{{item.time}}</span></el-col>
              </el-row>
              <el-divider></el-divider>
            </div>
          </el-scrollbar>
        </div>
      </template>
    </main-content>
  </div>
</template>

<script>
import MainContent from './MainContent'
import { listArticle } from '../../base/api'
import {mapGetters} from 'vuex'
export default {
  name: 'main-rolling',
  components: {
    MainContent
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  mounted () {
    listArticle({
      page: 1,
      rows: 10,
      owner: this.userInfo.id
    }).then(res => {
      this.list = res.list
    })
  },
  methods: {
    goDetail (id) {
      this.$router.push({path: `/a/${id}`})
    }
  }
}
</script>
<style lang="scss" scoped>
  .main_rolling {
    width: 100%;
    height: 610px;
    .come_true {
      max-height: 570px;
      overflow: hidden;
      .come_true_list {
        max-height: 200px;
      }
      .come_true_item {
        width: 100%;
        /*height: 50px;*/
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

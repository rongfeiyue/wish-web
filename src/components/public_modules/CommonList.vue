<template>
  <div id="common_list" class="common_list">
    <common-component>
      <template slot="common_content">
        <div>
          <el-row>
            <el-col :span="16">
              <div class="list_detail">
                <div style="padding: 20px;">
                  <div class="detail_header">
                    作者
                  </div>
                  <div class="detail_content">
                    内容
                  </div>
                  <div class="detail_footer">查看详情</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8"></el-col>
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
      count: 0
    }
  },
  methods: {
    load () {
      this.count += 2
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/css/common';
  .common_list {
    .list_detail {
      @include content;
      margin-bottom: 10px;
    }
  }
</style>

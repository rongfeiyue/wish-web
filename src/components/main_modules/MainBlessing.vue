<template>
  <div class="main-blessing">
    <main-content title="今日活跃" :show-all="false">
      <template slot="content"></template>
    </main-content>
  </div>
</template>

<script>
import MainContent from './MainContent'
export default {
  name: 'main-blessing',
  components: {
    MainContent
  }
}
</script>

<style lang="scss" scoped>
  .main-blessing {
    width: 100%;
    height: 300px;
  }
</style>

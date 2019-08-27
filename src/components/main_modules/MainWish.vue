<template>
  <div class="main-wish">
    <main-content title="今日推荐" :show-all="false">
      <template slot="content">
      </template>
    </main-content>
  </div>
</template>

<script>
import MainContent from './MainContent'
export default {
  name: 'main-wish',
  components: {
    MainContent
  }
}
</script>

<style lang="scss" scoped>
  .main-wish {
    width: 100%;
    height: 300px;
  }
</style>

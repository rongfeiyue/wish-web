<template>
  <div class="main-blessing">
    <main-content title="标题">
      <template slot="content">ss</template>
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
    height: 240px;
  }
</style>

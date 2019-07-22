<template>
  <div class="main-rolling">
    <main-content title="已实现">
      <template slot="content">sss
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
  }
}
</script>

<style lang="scss" scoped>
  .main-rolling {
    width: 100%;
    height: 500px;
  }
</style>

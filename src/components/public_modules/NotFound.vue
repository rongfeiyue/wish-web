<template>
  <div><h1>404</h1></div>
</template>

<script>
export default {
  name: '404',
  beforeRouterEnter (to, from, next) {
    console.log(to)
    document.title = to.title
    next()
  }
}
</script>

<style scoped>

</style>
